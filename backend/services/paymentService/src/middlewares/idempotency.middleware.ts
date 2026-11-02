import type { NextFunction, Request, Response } from "express";
import prisma from "../../prisma/prismaClient";
import { logger } from "src/utils/logger";

const idempotencyMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  const idempotencyKey = req.headers["idempotency-key"] as string;

  if (!idempotencyKey) {
    return next();
  }

  try {
    const existingRecord = await prisma.idempotencyKey.findUnique({
      where: { key: idempotencyKey },
    });

    if (existingRecord) {
      logger.info("idempotencyKey found, return object!");
      res.status(200).json(existingRecord.response);
      return;
    }

    const originalJson = res.json.bind(res);

    res.json = (body: any) => {
      prisma.idempotencyKey
        .create({
          data: {
            key: idempotencyKey,
            response: body,
          },
        })
        .catch((err) => {
          logger.error("Failed to save idempotency key:", err);
        });
      return originalJson(body);
    };
    next();
  } catch (error) {
    logger.error("Idompotency middleware error", error);
    res
      .status(500)
      .json({ error: "Internal server error during idempotency check" });
  }
};

export default idempotencyMiddleware;
