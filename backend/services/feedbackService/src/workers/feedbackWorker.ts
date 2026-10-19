import { Job, Worker } from "bullmq";
import { logger } from "src/config/logger";
import type { TPhoneSchema } from "src/schems/phone.schema";
import prisma from "src/config/prismaClient";

const handleFeedbackJob = async (job: Job<TPhoneSchema>) => {
  logger.info(`[Worker] Processing job ID: ${job.id}, Name: ${job.name}`);

  if (job.name === "create-callback") {
    const { name, phone, comment } = job.data;
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
