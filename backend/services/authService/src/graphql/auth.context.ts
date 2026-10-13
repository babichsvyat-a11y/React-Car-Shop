import type { Request, Response } from "express";
import { logger } from "../utils/logger";
import jwt from "jsonwebtoken";
import prisma from "prisma/prismaClient";

export const createContext = async ({
  req,
  res,
}: {
  req: Request;
  res: Response;
}) => {
  const authHeader = req.headers.authorization;

  let curentUser = null;

  if (authHeader && authHeader.startsWith("Bearer")) {
    const token = authHeader.split(" ")[1];
    try {
      const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);
      curentUser = await prisma.user.findUnique({
        where: { id: decoded.user_id || decoded.id },
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
