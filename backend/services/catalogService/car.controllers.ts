import { Request, Response } from "express";
import CarRepository from "./car.repository";
import { Prisma } from "@prisma/client";
import asyncHandler from "./middlewares/asyncError.middleware";
import ErrorApp from "./utils/errorApp";

class CarController {
  getAllCars = asyncHandler(async (req: Request, res: Response) => {
    const cars = await CarRepository.getAll();
    return res.status(200).json(cars);
  });

  getOneCar = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    const car = await CarRepository.getOneById(String(id));
    if (!car) {
      throw ErrorApp.notFound("Car not found");
    }
    return res.status(200).json(car);
  });

  createCar = asyncHandler(async (req: Request, res: Response) => {
    const data: Prisma.CarCreateInput = req.body;
    const car = await CarRepository.create(data);
    return res.status(201).json(car);
  });

  updateCar = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    const data: Prisma.CarUpdateInput = req.body;
    const car = await CarRepository.update(String(id), data);
    return res.status(200).json(car);
  });

  deleteCar = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    await CarRepository.delete(String(id));
    return res.status(200).json({ message: "Car deleted successfully" });
  });
}

export default new CarController();
