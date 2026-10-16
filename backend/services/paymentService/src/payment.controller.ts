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

    const payment = await prisma.payment.create({
      data: {
        user_id,
        amount,
        comment,
        provider,
        provider_tx_id,
        status: "PENDING",
      },
    });

    logger.info(`Payment created successfully with ID: ${payment.id}`);

    res.status(201).json({
      message: "Payment created successfully",
      payment,
    });
  });
}

export default new PaymentController();
