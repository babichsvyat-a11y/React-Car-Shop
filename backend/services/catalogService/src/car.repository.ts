import { Prisma } from "@prisma/client";
import prisma from "../prisma/prismaClient";

const carInclude = {
  images: true,
  colors: {
    include: {
      color: true,
    },
  },
};

class CarRepository {
  async getAll(page: number = 1, limit: number = 20) {
    const skip = (page - 1) * limit;
    return await prisma.car.findMany({
      where: { is_available: true },
      include: carInclude,
      skip: skip,
      take: limit,
    });
  }

  async getOneById(id: string) {
    return await prisma.car.findUnique({
      where: { id },
      include: carInclude,
    });
  }

  async create(data: any) {
    const { colors, images, ...carData } = data;

    return await prisma.car.create({
      data: {
        ...carData,
        ...(images &&
          images.length > 0 && {
            images: {
              create: images.map((img: any) => ({
                ...(img.id && { id: img.id }),
                url: img.url,
              })),
            },
          }),
        ...(colors &&
          colors.length > 0 && {
            colors: {
              create: colors.map((c: any) => ({
                color: {
                  ...(c.id
                    ? { connect: { id: c.id } }
                    : {
                        connectOrCreate: {
                          where: { name: c.name },
                          create: { name: c.name, hex: c.hex },
                        },
                      }),
                },
              })),
            },
          }),
      },
      include: carInclude,
    });
  }

  async update(id: string, data: Prisma.CarUpdateInput) {
    return await prisma.car.update({
      where: { id },
      data,
      include: carInclude,
    });
  }

  async delete(id: string) {
    return await prisma.car.delete({
      where: { id },
    });
  }
}

export default new CarRepository();
