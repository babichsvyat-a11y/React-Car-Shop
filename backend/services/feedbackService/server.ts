import dotenv from "dotenv";
dotenv.config();

import Fastify from "fastify";
import feedbackRoutes from "./src/routes/feedbackRoutes";
import { logger } from "./src/config/logger";
import prisma from "./src/config/prismaClient";
import feedbackWorker from "./src/workers/feedbackWorker";

const PORT = Number(process.env.PORT);
const HOST = process.env.HOST;

const fastify = Fastify({
  logger: true,
});

fastify.register(feedbackRoutes);

const startServer = async () => {
  try {
    await fastify.listen({ port: PORT, host: HOST }, () => {
      logger.info(`Server is running on http://${HOST}:${PORT}`);
    });

    const shutdown = async (signal: string) => {
      logger.info(`${signal} received. Shutting down gracefully...`);
      try {
        await feedbackWorker.close();
        logger.info("BullMQ Worker closed!");

        await fastify.close();
        logger.info("Fastify server closed!");

        await prisma.$disconnect();
        logger.info("DB disconected. Process terminated.");

        process.exit(0);
      } catch (err) {
        logger.error("Error during graceful shutdown:", err);
        process.exit(1);
      }
    };

    process.on("SIGINT", () => shutdown("SIGINT"));
    process.on("SIGTERM", () => shutdown("SIGTERM"));
  } catch (error) {
    logger.error("Failed to start Feedback Service:", error);
    process.exit(1);
  }
};

startServer();
