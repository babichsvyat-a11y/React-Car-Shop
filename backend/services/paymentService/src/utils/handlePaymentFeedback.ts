import axios from "axios";
import axiosRetry from "axios-retry";
import { logger } from "./logger";

const serviceClient = axios.create({
  timeout: 5000,
});

axiosRetry(serviceClient, {
  retries: 3,
  retryCondition: (err) => {
    return (
      axiosRetry.isNetworkOrIdempotentRequestError(err) ||
      (err.response ? err.response.status >= 500 : false)
    );
  },
  retryDelay: (retryCount) => {
    return axiosRetry.exponentialDelay(retryCount);
  },
  onRetry: (retryCount, err) => {
    logger.warn(
      `[Payment Service -> Feedback Service]: Retry #${retryCount} due to error: ${err.message}`,
    );
  },
});

export async function handlePaymentFeedback(
  id: string,
  email: string | undefined,
  phone: string | undefined,
  channel: string,
): Promise<boolean> {
  try {
    const feedbackServiceHost = process.env.FSHOST;
    const feedbackServicePort = process.env.FSPORT;

    if (!feedbackServiceHost || !feedbackServicePort) {
      throw new Error(
        "Feedback service host or port is not defined in enviroment variables!",
      );
    }

    if (channel === "EMAIL") {
      const responseEmail = await serviceClient.post(
        `${feedbackServiceHost}:${feedbackServicePort}/api/v1/feedback/notify`,
        {
          emails: [email],
          channel: channel,
          subject: "Your tax from ReactCarShop",
          template: `<!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Your tax from ReactCarShop</title>
    </head>
    <body style="font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 20px;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
              <tr>
          <td bgcolor="#4F46E5" style="padding: 20px; text-align: center; color: #ffffff;">
            <h1 style="margin: 0; font-size: 24px;">ReactCarShop</h1>
          </td>
        </tr>
        <tr>
          <td style="padding: 30px; color: #333333; line-height: 1.6;">
            <p style="font-size: 18px; margin-top: 0;">Thanks for payment</strong>!</p>
            <p>Payment # ${id} successful! </p>
          </td>
        </tr>
        <tr>
          <td bgcolor="#f9fafb" style="padding: 15px; text-align: center; font-size: 12px; color: #6b7280; border-top: 1px solid #e5e7eb;">
            &copy; 2026 ReactCarShop. All rights reserved. Private Policy
          </td>
        </tr>
      </table>
    </body>
    </html>
  `,
        },
        {
          headers: {
            "X-Internal-Service": "payment-service",
          },
        },
      );
      logger.info(
        `[Payment Service]: Email is order. Response feedback:`,
        responseEmail.data,
      );
      return true;
    } else {
      const responseSMS = await serviceClient.post(
        `${feedbackServiceHost}:${feedbackServicePort}/api/v1/feedback/notify`,
        {
          phones: [phone],
          channel: channel,
          subject: "Your tax from ReactCarShop",
          text: `Payment #${id} successfull`,
        },
        {
          headers: {
            "X-Internal-Service": "payment-service",
          },
        },
      );
      logger.info(
        `[Payment Service]: SMS is order. Response feedback:`,
        responseSMS.data,
      );
      return true;
    }
  } catch (err: any) {
    logger.error(`[Payment Service]: Failed to order feedback:`, err.message);
    throw new Error(
      `Feedback is not order after payment. Original error: ${err.message}`,
    );
  }
}
