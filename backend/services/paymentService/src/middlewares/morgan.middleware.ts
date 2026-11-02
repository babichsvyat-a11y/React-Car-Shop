import type { StreamOptions } from "morgan";
import { logger } from "../utils/logger";
import type { Request, Response } from "express";
import morgan from "morgan";

const stream: StreamOptions = {
  write: (message) => logger.http(message.trim()),
};

const skip = (req: Request, res: Response) => {
  const env = process.env.NODE_ENV || "development";
  if (env !== "development") {
    return res.statusCode < 400;
  }
  return false;
};

const httpMorgan = morgan(
  ":method :url :status :res[content-length] - :response-time ms",
  { stream, skip },
);

export default httpMorgan;
