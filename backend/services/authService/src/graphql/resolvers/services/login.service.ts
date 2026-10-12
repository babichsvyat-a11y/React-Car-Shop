import argon2 from "argon2";
import prisma from "../../../../prisma/prismaClient";
import crypto from "node:crypto";
import createJwt from "src/utils/createJWT";
import type { TLoginInput } from "src/schems/loginInput.schema";

const loginUser = async (input: TLoginInput) => {
  const existingUser = await prisma.users.findUnique({
    where: {
      email: input.email,
    },
  });
  if (!existingUser) {
    throw new Error("Inncorect email");
  }
  const VerifyPassword = await argon2.verify(
    existingUser.password,
    input.password,
  );
  if (!VerifyPassword) {
    throw new Error("Incorrect password");
  }
  const refreshToken = crypto.randomBytes(40).toString("hex");
  const liveTime = Number(process.env.LIVE_TIME) || 2592000000;
  const timeMark = new Date(Date.now() + liveTime);
  await prisma.refresh_tokens.create({
    data: {
      token: refreshToken,
      user_id: existingUser.id,
      expires_at: timeMark,
    },
  });

  const accessToken = createJwt(existingUser);

  return { accessToken, refreshToken, user: existingUser };
};

export default loginUser;
