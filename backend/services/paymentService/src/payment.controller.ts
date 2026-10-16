import asyncHandler from "./middlewares/asyncError.middleware";
import { logger } from "./utils/logger";
import type { Request, Response } from "express";
import { paymentSchema } from "./schems/payment.schema";
import { z } from "zod";
import prisma from "prisma/prismaClient";

class PaymentController {
  createPayment = asyncHandler(async (req: Request, res: Response) => {
    const validationResult = paymentSchema.safeParse(req.body);

    if (!validationResult.success) {
      res.status(400).json({
        error: "Validation failed",
        details: z.flattenError(validationResult.error),
      });
      return;
    }

    const { user_id, amount, comment, provider, provider_tx_id } =
      validationResult.data;

    const payment = await prisma.payment.upsert({
      where: {
        provider_tx_id: provider_tx_id,
      },
      update: {
        comment: comment,
      },
      create: {
        user_id,
        amount,
        comment,
        provider,
        provider_tx_id,
        status: "PENDING",
        currency: "USD",
      },
    });

    logger.info(`Payment created successfully with ID: ${payment.id}`);

    res.status(201).json({
      message: "Payment created successfully",
      payment,
    });
  });

  handleWebhook = asyncHandler(async (req: Request, res: Response) => {
    const event = req.body;
    logger.info(`Received webhook event: ${event.type || "unknown"}`);

    const { provider_tx_id, status } = event;

    if (!provider_tx_id) {
      res.status(400).json({
        error: "Missing provider_tx_id in webhook payload",
      });
      return;
    }

    let mappedStatus: "SUCCESS" | "FAILED" | "REFUNDED";

    if (status === "succeeded" || status === "success") {
      mappedStatus = "SUCCESS";
    } else if (status === "failed") {
      mappedStatus = "FAILED";
    } else if (status === "refunded") {
      mappedStatus = "REFUNDED";
    } else mappedStatus = "FAILED";

    const updatedPayment = await prisma.payment
      .update({
        where: { provider_tx_id },
        data: {
          status: mappedStatus,
        },
      })
      .catch(() => null);

    if (!updatedPayment) {
      logger.warn(
        `Payment with provider_tx_id ${provider_tx_id} not found for webhook update`,
      );
      res.status(200).json({ received: true, warning: "Payment not found" });
      return;
    }

    logger.info(
      `Payment ${updatedPayment.id} status updated to ${mappedStatus} via webhook`,
    );
    res.status(200).json({ received: true });
  });
}

export default new PaymentController();
