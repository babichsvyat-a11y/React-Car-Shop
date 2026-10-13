import dotenv from "dotenv";
dotenv.config();

import { logger } from "./src/utils/logger";
import { connectRedis } from "./src/redisClient";
import prisma from "./prisma/prismaClient";
import app from "./src/app";

const PORT = process.env.PORT || 5080;
const HOST = process.env.HOST || "0.0.0.0";

const startServer = async () => {
  try {
    await connectRedis();

    const server = app.listen(Number(PORT), HOST, () => {
      logger.info(`Server is running on http://${HOST}:${PORT}`);
    });

    const shutdown = async (signal: string) => {
      logger.info(`${signal} received. Shutting down gracefully...`);
      server.close(async () => {
        await prisma.$disconnect();
        logger.info("DB disconected. Process terminated.");
        process.exit(0);
      });
    };
    process.on("SIGINT", () => shutdown("SIGINT"));
    process.on("SIGTERM", () => shutdown("SIGTERM"));
  } catch (error) {
    logger.error("Failed to start Catalog Service:", error);
    process.exit(1);
  }
};

startServer();
