import prisma from "../../../../prisma/prismaClient";
import crypto from "node:crypto";
import createJwt from "src/utils/createJWT";

const refreshTokenUser = async (curentToken: string) => {
  if (!curentToken) {
    throw new Error("Unauthorized");
  }

  const tokenRecord = await prisma.refresh_tokens.findUnique({
    where: {
      token: curentToken,
    },
    include: { user: true },
  });

  if (!tokenRecord) {
    throw new Error("Invalid refresh token");
  }

  if (tokenRecord.expires_at < new Date()) {
    await prisma.refresh_tokens.delete({
      where: { id: tokenRecord.id },
    });
    throw new Error("Refresh token expired");
  }

  await prisma.refresh_tokens.delete({
    where: { id: tokenRecord.id },
  });

  const newRefreshToken = crypto.randomBytes(40).toString("hex");
  const liveTime = Number(process.env.LIVE_TIME) || 2592000000;
  const timeMark = new Date(Date.now() + liveTime);

  await prisma.refresh_tokens.create({
    data: {
      token: newRefreshToken,
      user_id: tokenRecord.user.id,
      expires_at: timeMark,
    },
  });

  const accessToken = createJwt(tokenRecord.user);

  return { accessToken, newRefreshToken, user: tokenRecord.user };
};

export default refreshTokenUser;
