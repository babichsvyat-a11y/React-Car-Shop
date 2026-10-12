import {
  RegisterInputSchema,
  type TRegisterInput,
} from "src/schems/registerInput.schema";
import prisma from "../../../prisma/prismaClient";
import { logger } from "src/utils/logger";
import argon2 from "argon2";
import createJwt from "src/utils/createJWT";
import crypto from "node:crypto";
import {
  LoginInputSchema,
  type TLoginInput,
} from "src/schems/loginInput.schema";
import registerUser from "./services/register.service";
import loginUser from "./services/login.service";
import refreshTokenUser from "./services/refreshToken.service";
import logoutUser from "./services/logout.service";

const setRefreshTokenCookie = (res: any, token: string) => {
  res.cookie("refreshToken", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
  });
};

const resolvers = {
  Mutation: {
    register: async (
      _parent: unknown,
      { input }: { input: TRegisterInput },
      context: any,
    ) => {
      try {
        const validatedData = RegisterInputSchema.parse(input);
        const { accessToken, refreshToken, user } =
          await registerUser(validatedData);

        setRefreshTokenCookie(context.res, refreshToken);
        return {
          access_token: accessToken,
          user,
        };
      } catch (err) {
        logger.error("User registration failed", err);
        throw err;
      }
    },
    login: async (
      _parent: unknown,
      { input }: { input: TLoginInput },
      context: any,
    ) => {
      try {
        const validatedData = LoginInputSchema.parse(input);
        const { accessToken, refreshToken, user } =
          await loginUser(validatedData);

        setRefreshTokenCookie(context.res, refreshToken);
        return {
          access_token: accessToken,
          user,
        };
      } catch (err) {
        logger.error("User login failed", err);
        throw err;
      }
    },
    refreshToken: async (_parent: unknown, _args: unknown, context: any) => {
      try {
        const curentToken = context.req.cookies.refreshToken;

        const { accessToken, newRefreshToken, user } =
          await refreshTokenUser(curentToken);

        context.res.cookie("refreshToken", newRefreshToken, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "strict",
        });

        return {
          access_token: accessToken,
          user,
        };
      } catch (err) {
        logger.error("User token refresh failed", err);
        throw err;
      }
    },
    logout: async (_parent: unknown, _args: unknown, context: any) => {
      try {
        const curentToken = context.req.cookies.refreshToken;

        await logoutUser(curentToken);

        context.res.clearCookie("refreshToken", {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "strict",
        });

        return true;
      } catch (err) {
        logger.error("Logout failed", err);
        throw err;
      }
    },
  },
  Query: {
    me: async (_parent: unknown, _args: unknown, context: any) => {
      if (!context.user) {
        throw new Error("Not authenticated");
      }
      return context.user;
    },
  },
};

export default resolvers;
