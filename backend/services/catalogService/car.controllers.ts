import { Request, Response } from "express";
import CarRepository from "./car.repository";
import { Prisma } from "@prisma/client";
import asyncHandler from "./middlewares/asyncError.middleware";
import ErrorApp from "./utils/errorApp";
import redisClient from "./redisClient";
import { logger } from "./utils/logger";

const CACHE_KEY_ALL = "cars:all";
const CACHE_TTL = 3600;
class CarController {
  getAllCars = asyncHandler(async (req: Request, res: Response) => {
    const cachedCars = await redisClient.get(CACHE_KEY_ALL);

    if (cachedCars) {
      logger.info("CACHE HIT: Cars download from Redis");
      return res.status(200).json(JSON.parse(cachedCars));
    }

    logger.info("CACHE MISS: Fetching cars from DB");
    const cars = await CarRepository.getAll();

    await redisClient.set(CACHE_KEY_ALL, JSON.stringify(cars), {
      EX: CACHE_TTL,
    });
    return res.status(200).json(cars);
  });

  getOneCar = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    const cacheKey = `car:${id}`;

    const cachedCar = await redisClient.get(cacheKey);
    if (cachedCar) {
      logger.info(`CACHE HIT: Car ${id} download from Redis`);
      return res.status(200).json(JSON.parse(cachedCar));
    }

    const car = await CarRepository.getOneById(String(id));
    if (!car) {
      throw ErrorApp.notFound("Car not found");
    }

    await redisClient.set(cacheKey, JSON.stringify(car), { EX: CACHE_TTL });
    return res.status(200).json(car);
  });

  createCar = asyncHandler(async (req: Request, res: Response) => {
    const data: Prisma.CarCreateInput = req.body;
    const car = await CarRepository.create(data);

    await redisClient.del(CACHE_KEY_ALL);
    logger.info("Cache invalidated: cars:all");

    return res.status(201).json(car);
  });

  updateCar = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    const data: Prisma.CarUpdateInput = req.body;

    const car = await CarRepository.update(String(id), data);
    await redisClient.del([CACHE_KEY_ALL, `car:${id}`]);
    logger.info(`Cache invalidated: cars:all & car:${id}`);

    return res.status(200).json(car);
  });

  deleteCar = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;

    await CarRepository.delete(String(id));
    await redisClient.del([CACHE_KEY_ALL, `car:${id}`]);

    logger.info(`Cache invalidated: cars:all & car:${id}`);
    return res.status(200).json({ message: "Car deleted successfully" });
  });
}

export default new CarController();
