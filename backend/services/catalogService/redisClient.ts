import { createClient } from "redis";
import { logger } from "./utils/logger";

const redisClient = createClient({
  url: process.env.REDIS_URL || "redis://localhost:6379",
});

redisClient.on("error", (err) => logger.error(`Redis Client Error: ${err}`));
redisClient.on("connect", () =>
  logger.info("Redis Client Connected successfully!"),
);

export const connectRedis = async (): Promise<void> => {
  try {
    await redisClient.connect();
  } catch (error) {
    logger.error("Falied to connect to Redis", error);
  }
};

export default redisClient;
