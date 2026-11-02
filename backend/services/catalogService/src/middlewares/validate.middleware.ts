import type { NextFunction, Request, Response } from "express";
import { ZodError, ZodType } from "zod";

export const validate = (
  schema: ZodType,
  source: "body" | "params" | "query" = "body",
) => {
  return async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      req[source] = await schema.parseAsync(req[source]);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({
          error: "Validation failed",
          details: error.issues.map((issue) => ({
            field: issue.path.join("."),
            message: issue.message,
          })),
        });
        return;
      }
      next(error);
    }
  };
};
