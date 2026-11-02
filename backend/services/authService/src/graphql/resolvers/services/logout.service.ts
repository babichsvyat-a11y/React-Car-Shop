import prisma from "../../../../prisma/prismaClient";

const logoutUser = async (curentToken: string) => {
  if (curentToken) {
    await prisma.refreshToken.deleteMany({
      where: {
        token: curentToken,
      },
    });
  }
};

export default logoutUser;
