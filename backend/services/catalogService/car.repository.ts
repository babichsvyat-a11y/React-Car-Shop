import { Prisma } from "@prisma/client";
import prisma from "../../prisma/prismaClient";

const carInclude = {
  images: true,
  colors: {
    include: {
      color: true,
    },
  },
};

class CarRepository {
  async getAll() {
    return await prisma.car.findMany({
      where: { is_available: true },
      include: carInclude,
    });
  }

  async getOneById(id: string) {
    return await prisma.car.findUnique({
      where: { id },
      include: carInclude,
    });
  }

  async create(data: Prisma.CarCreateInput) {
    return await prisma.car.create({
      data,
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
