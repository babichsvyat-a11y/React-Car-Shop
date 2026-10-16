import type { NextFunction, Request, Response } from "express";
import { logger } from "src/utils/logger";
import crypto from "crypto";

interface IRequest extends Request {
  rawBody?: Buffer;
}

const verifyWebhookSignature = (
  req: IRequest,
  res: Response,
  next: NextFunction,
): void => {
  try {
    const signature = req.headers["x-signature"] as string;

    if (!signature) {
      logger.warn("Webhook request missing signature header");
      res.status(401).json({
        error: "Missing signature header",
      });
      return;
    }

    const secretKey = process.env.WEBHOOK_SECRET_KEY;
    if (!secretKey) {
      logger.error(
        "WEBHOOK_SECRET_KEY is not defined in environment variables",
      );
      res.status(500).json({ error: "Server configuration error" });
      return;
    }

    const payload = req.rawBody
      ? req.rawBody.toString("utf-8")
      : JSON.stringify(req.body);

    const computedSignature = crypto
      .createHmac("sha256", secretKey)
      .update(payload)
      .digest("hex");

    const signatureBufer = Buffer.from(signature);
    const computedBufer = Buffer.from(computedSignature);

    const isValid =
      signatureBufer.length === computedBufer.length &&
      crypto.timingSafeEqual(signatureBufer, computedBufer);

    if (!isValid) {
      logger.warn("Invalid webhook signature attempt detected");
      res.status(401).json({ error: "Invalid signature" });
      return;
    }

    next();
  } catch (err) {
    logger.error("Error during webhook signature verification:", err);
    res.status(500).json({ error: "Signature verification failed" });
  }
};

export default verifyWebhookSignature;
