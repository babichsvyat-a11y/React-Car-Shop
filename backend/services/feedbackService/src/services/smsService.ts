import dotenv from "dotenv";
dotenv.config();

import { logger } from "src/config/logger";

interface ISendSMS {
  phone: string;
  message: string;
}

async function sendSms({
  phone,
  message,
}: ISendSMS): Promise<{ success: boolean; error?: string }> {
  const token = process.env.TURBOSMS_TOKEN;

  if (!token) {
    const errorMsg = "Missing token";
    logger.error(`[SMS Gateway] ${errorMsg}`);
    return { success: false, error: errorMsg };
  }

  try {
    // 👇 ТИМЧАСОВО ДОДАЙ ЦЕЙ ЛОГ СЮДI:
    console.log(
      `[DEBUG] НАДСИЛАЄМО ТОКЕН ДОВЖИНОЮ: ${process.env.TURBOSMS_TOKEN ? process.env.TURBOSMS_TOKEN.length : 0}. САМ ТОКЕН: [${process.env.TURBOSMS_TOKEN}]`,
    );

    const requestBody = {
      recipients: [phone],
      sms: {
        sender: "Msg",
        text: message,
      },
    };

    const response = await fetch("https://turbosms.ua", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(requestBody),
    });

    const responseData = (await response.json()) as any;

    if (!response.ok || responseData.response_code !== 0) {
      const statusText =
        responseData.response_status ||
        `TurboSMS error status ${response.status}`;
      throw new Error(statusText);
    }

    logger.info(`[SMS Gateway] Successfully sent SMS to ${phone} via TurboSMS`);
    return { success: true };
  } catch (err: any) {
    logger.error(
      `[SMS Gateway] Failed to send SMS to ${phone}: ${err.message}`,
    );
    return { success: false, error: err.message };
  }
}

export default sendSms;
