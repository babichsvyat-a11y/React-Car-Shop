import type { Request, Response } from "express";
import { logger } from "../utils/logger";
import jwt from "jsonwebtoken";
import prisma from "prisma/prismaClient";
import type { IncomingMessage, ServerResponse } from "node:http";

export interface IContext {
  req: IncomingMessage;
  res: ServerResponse;
  request: InstanceType<typeof Request>;
}

export const createContext = async ({ req, res, request }: IContext) => {
  const authHeader = request.headers.get("authorization");

  let curentUser = null;

  if (authHeader && authHeader.startsWith("Bearer")) {
    const token = authHeader.split(" ")[1];
    try {
      const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);
      curentUser = await prisma.user.findUnique({
        where: { id: decoded.user_id || decoded.id || decoded.userId },
      });
    } catch (err) {
      logger.error("Invalid or expired token in context");
    }
  }
  return {
    req,
    res,
    user: curentUser,
  };
};
