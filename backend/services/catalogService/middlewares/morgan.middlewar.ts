import morgan, { StreamOptions } from "morgan";
import { logger } from "../utils/logger";
import { Request, Response } from "express";

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
