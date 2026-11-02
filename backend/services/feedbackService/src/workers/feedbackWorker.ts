import { Job, Worker } from "bullmq";
import { logger } from "src/config/logger";
import type { TPhoneSchema } from "src/schems/phone.schema";
import prisma from "src/config/prismaClient";
import sendEmail from "src/config/mailer";
import type { TEmailSchema } from "src/schems/email.schema";
import sendSms from "src/services/smsService";

type TFeedbackJobData = TPhoneSchema | TEmailSchema;

const handleFeedbackJob = async (job: Job<TFeedbackJobData, any, string>) => {
  logger.info(`[Worker] Processing job ID: ${job.id}, Name: ${job.name}`);

  if (job.name === "create-callback") {
    const data = job.data as TPhoneSchema;
    const { name, phone, comment } = data;

    const isPending = await prisma.callbackTask.findFirst({
      where: {
        phone: phone,
        status: "PENDING",
      },
    });

    if (isPending) {
      logger.info(
        `[Worker] Callback task already saved in DB for phone: ${phone}`,
      );
      return;
    }

    const callbackTask = await prisma.callbackTask.create({
      data: {
        name,
        phone,
        comment: comment || null,
      },
    });

    logger.info(
      `[Worker] Callback task successfully saved to DB withID: ${callbackTask.id}`,
    );

    return callbackTask;
  }

  if (job.name === "create-notify") {
    const data = job.data as TEmailSchema;
    const {
      emails,
      phones,
      channel,
      subject,
      text,
      template,
      attachmentsPath,
    } = data;

    if (channel === "EMAIL") {
      const attachments = attachmentsPath
        ? [{ path: attachmentsPath }]
        : undefined;
      const totalRecipients = emails.length;

      logger.info(
        `[Worker] Starting email broadcast. Total recipients: ${totalRecipients}`,
      );

      let successCount = 0;
      let failCount = 0;

      for (const email of emails) {
        try {
          const emailResult = await sendEmail({
            to: email,
            subject,
            text,
            html: template,
            attachments,
          });

          if (!emailResult || emailResult.success === false) {
            throw new Error(
              `Failed to send email via SMTP: ${emailResult.error || "Unknown error"}`,
            );
          }

          await prisma.notificationLog.create({
            data: {
              email: email,
              channel: "EMAIL",
              status: "SENT",
              payload: {
                subject,
                text,
                template: template || "",
              },
            },
          });

          successCount++;
        } catch (err: any) {
          failCount++;

          logger.error(
            `[Worker] Failed to send email to ${email}: ${err.message}`,
          );

          await prisma.notificationLog.create({
            data: {
              email: email,
              channel: "EMAIL",
              status: "FAILED",
              payload: { error: err.message },
            },
          });
        }
      }
      logger.info(
        `[Worker] Broadcast completed. Success: ${successCount}/${totalRecipients}, Failed: ${failCount}/${totalRecipients}!`,
      );
    }

    if (channel === "SMS") {
      const totalRecipients = phones.length;

      logger.info(
        `[Worker] Starting sms broadcast. Total recipients: ${totalRecipients}`,
      );

      let successCount = 0;
      let failCount = 0;

      for (const phone of phones) {
        try {
          const phoneResult = await sendSms({
            phone: phone,
            message: text,
          });

          if (!phoneResult || phoneResult.success === false) {
            throw new Error(
              `Failed to send sms: ${phoneResult.error || "Unknown error"}`,
            );
          }

          await prisma.notificationLog.create({
            data: {
              phone: phone,
              channel: "SMS",
              status: "SENT",
              payload: {
                template: "",
              },
            },
          });

          successCount++;
        } catch (err: any) {
          failCount++;

          logger.error(
            `[Worker] Failed to send sms to ${phone}: ${err.message}`,
          );

          await prisma.notificationLog.create({
            data: {
              phone: phone,
              channel: "SMS",
              status: "FAILED",
              payload: { error: err.message },
            },
          });
        }
      }
      logger.info(
        `[Worker] Broadcast completed. Success: ${successCount}/${totalRecipients}, Failed: ${failCount}/${totalRecipients}!`,
      );
    }
  }
};

const feedbackWorker = new Worker("feedbackqueue", handleFeedbackJob, {
  connection: {
    host: process.env.FEEDBACK_REDIS_HOST,
    port: Number(process.env.FEEDBACK_REDIS_PORT),
  },
});

feedbackWorker.on("completed", (job) => {
  logger.info(`[Worker] Job ${job.id} completed successfully!`);
});

feedbackWorker.on("failed", (job, err) => {
  logger.error(`[Worker] Job ${job?.id} failed with error: ${err.message}!`);
});

export default feedbackWorker;
