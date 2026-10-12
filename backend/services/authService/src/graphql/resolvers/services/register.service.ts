import argon2 from "argon2";
import prisma from "../../../../prisma/prismaClient";
import type { TRegisterInput } from "src/schems/registerInput.schema";
import crypto from "node:crypto";
import createJwt from "src/utils/createJWT";

const registerUser = async (input: TRegisterInput) => {
  const existingUser = await prisma.user.findUnique({
    where: { email: input.email },
  });

  if (existingUser) {
    throw new Error("User with this email already exists");
  }

  const hashedPassword = await argon2.hash(input.password);
  const user = await prisma.user.create({
    data: {
      email: input.email,
      password: hashedPassword,
      first_name: input.first_name,
      last_name: input.last_name,
    },
  });

  const refreshToken = crypto.randomBytes(40).toString("hex");
  const liveTime = Number(process.env.LIVE_TIME) || 2592000000;
  const timeMark = new Date(Date.now() + liveTime);
  await prisma.refreshToken.create({
    data: {
      token: refreshToken,
      user_id: user.id,
      expires_at: timeMark,
    },
  });

  const accessToken = createJwt(user);

  return { accessToken, refreshToken, user };
};

export default registerUser;
