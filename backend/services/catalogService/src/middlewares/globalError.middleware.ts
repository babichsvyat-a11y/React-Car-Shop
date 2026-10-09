import type { NextFunction, Request, Response } from "express";
import ErrorApp from "../utils/errorApp";
import { logger } from "../utils/logger";

const globalErrorHandler = (
  err: Error | ErrorApp | any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const statusCode = err.statusCode || 500;
  const isDevelopment = process.env.NODE_ENV === "development";
  const meta = {
    method: req.method,
    url: req.originalUrl,
    statusCode,
  };

  if (err.isOperational) {
    logger.warn(
      `[${meta.method}] ${meta.url} - ${statusCode}: ${err.message}`,
      { meta },
    );

    return res.status(statusCode).json({
      status: "fail",
      message: err.message,
      ...(isDevelopment && { stack: err.stack }),
    });
  }
  logger.error(
    `[${meta.method}] ${meta.url} - Critical Error:${err.message}`,
    err,
  );
  return res.status(statusCode).json({
    status: "error",
    message: isDevelopment ? err.message : "Something went wrong on the server",
    ...(isDevelopment && { stack: err.stack }),
  });
};

export default globalErrorHandler;
