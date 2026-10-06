import express from "express";
import carRouter from "./car.router";
import prisma from "../../prisma/prismaClient";
import globalErrorHandler from "./middlewares/globalError.middleware";
import { logger } from "./utils/logger";

const app = express();
app.use(express.json());

app.use("/api/v1/catalog", carRouter);

app.use(globalErrorHandler);

const PORT = process.env || 5080;
app.listen(PORT, () => {
  logger.info(`Server is running on http://localhost:${PORT}`);
});

process.on("SIGINT", async () => {
  logger.info("Shutting down gracefully...");
  await prisma.$disconnect();
  process.exit(0);
});

export default app;
