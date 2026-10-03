import { Request, Response } from "express";
import CarRepository from "./car.repository";
import { Prisma } from "@prisma/client";

class CarController {
  getAllCars = async (req: Request, res: Response) => {
    try {
      const cars = await CarRepository.getAll();
      return res.status(200).json(cars);
    } catch (err) {
      console.error("Error in getAllCars:", err);
      return res.status(500).json({ error: "Failed conection with DB!" });
    }
  };

  getOneCar = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const car = await CarRepository.getOneById(String(id));
      if (!car) {
        return res.status(404).json({ error: "Car not found" });
      }
      return res.status(200).json(car);
    } catch (err) {
      console.error("Error in getOneCar:", err);
      return res.status(500).json({ error: "Internal server error" });
    }
  };

  createCar = async (req: Request, res: Response) => {
    try {
      const data: Prisma.CarCreateInput = req.body;
      const car = await CarRepository.create(data);
      return res.status(201).json(car);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Failed conection with DB!" });
    }
  };

  updateCar = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const data: Prisma.CarUpdateInput = req.body;
      const car = await CarRepository.update(String(id), data);
      return res.status(200).json(car);
    } catch (err) {
      console.error("Error in updateCar:", err);
      return res.status(500).json({ error: "Failed to update car" });
    }
  };

  deleteCar = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      await CarRepository.delete(String(id));
      return res.status(200).json({ message: "Car deleted successfully" });
    } catch (err) {
      console.error("Error in deleteCar:", err);
      return res.status(500).json({ error: "Failed to delete car" });
    }
  };
}

export default new CarController();
