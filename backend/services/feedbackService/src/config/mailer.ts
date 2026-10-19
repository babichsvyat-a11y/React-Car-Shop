import dotenv from "dotenv";
import nodemailer, { type SendMailOptions } from "nodemailer";
import { logger } from "./logger";
dotenv.config();

const transporter = nodemailer.createTransport({
  pool: true,
  maxConnections: 5,
  maxMessages: 100,
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

interface ISendEmailParams {
  to: string;
  subject: string;
  text?: string;
  html?: string;
  attachments?: SendMailOptions["attachments"];
}

interface IEmailResult {
  success: boolean;
  messageId?: string;
  error?: string;
}

async function sendEmail({
  to,
  subject,
  text,
  html,
  attachments,
}: ISendEmailParams): Promise<IEmailResult> {
  try {
    const info = await transporter.sendMail({
      from: `"FireWheels" <${process.env.SMTP_USER}>`,
      to,
      subject,
      text,
      html,
      attachments,
    });

    logger.info(`Mail successfully sent! ID: ${info.messageId}`);
    return { success: true, messageId: info.messageId };
  } catch (err: any) {
    logger.error(`Failed sending email:`, err);
    return { success: false, error: err.message };
  }
}

export default sendEmail;
