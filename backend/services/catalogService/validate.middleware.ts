import { NextFunction, Request, Response } from "express";
import { ZodError, ZodTypeAny } from "zod";

export const validate = (
  schema: ZodTypeAny,
  source: "body" | "params" | "query" = "body",
) => {
  return async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      req.[source] = await schema.parseAsync(req[source]);
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
