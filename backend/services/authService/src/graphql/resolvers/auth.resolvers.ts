import {
  RegisterInputSchema,
  type TRegisterInput,
} from "src/schems/registerInput.schema";
import { logger } from "src/utils/logger";
import {
  LoginInputSchema,
  type TLoginInput,
} from "src/schems/loginInput.schema";
import registerUser from "./services/register.service";
import loginUser from "./services/login.service";
import refreshTokenUser from "./services/refreshToken.service";
import logoutUser from "./services/logout.service";

const setRefreshTokenCookie = (context: any, token: string) => {
  const isProd = process.env.NODE_ENV === "production";
  context.res.setHeader(
    "Set-Cookie",
    `refreshToken=${token}; HttpOnly; Path=/; SameSite=Strict${isProd ? "; Secure" : ""}`,
  );
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

        setRefreshTokenCookie(context, refreshToken);
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

        setRefreshTokenCookie(context, refreshToken);
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
        const cookieHeader = context.req.headers.cookie || "";
        const targetCookie = cookieHeader
          .split("; ")
          .find((row: string) => row.startsWith("refreshToken="));
        const curentToken = targetCookie
          ? targetCookie.split("=")[1]
          : undefined;
        if (!curentToken) {
          throw new Error("Refresh token missing");
        }

        const { accessToken, newRefreshToken, user } =
          await refreshTokenUser(curentToken);

        setRefreshTokenCookie(context, newRefreshToken);

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
        const cookieHeader = context.req.headers.cookie || "";
        const targetCookie = cookieHeader
          .split("; ")
          .find((row: string) => row.startsWith("refreshToken="));

        const curentToken = targetCookie
          ? targetCookie.split("=")[1]
          : undefined;

        if (curentToken) {
          await logoutUser(curentToken);
        }

        const isProd = process.env.NODE_ENV === "production";
        context.res.setHeader(
          "Set-Cookie",
          `refreshToken=; Max-Age=0; HttpOnly; Path=/; SameSite=Strict${isProd ? "; Secure" : ""}`,
        );

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
