import prisma from "prisma/prismaClient";

export async function getStatus(id: string) {
  return await prisma.payment.findUnique({
    where: { id },
  });
}
