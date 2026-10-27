import { Router } from "express";
import CarControllers from "./car.controllers";
import { validate } from "./middlewares/validate.middleware";
import { createCarSchema, updateCarSchema } from "./schems/car.schema";
import carControllers from "./car.controllers";

const carRouter = Router();

carRouter.get("/", CarControllers.getAllCars);
carRouter.get("/:id", CarControllers.getOneCar);
carRouter.post("/", validate(createCarSchema), CarControllers.createCar);
carRouter.patch(
  ":id/status",
  validate(updateCarSchema),
  carControllers.updateCar,
);
carRouter.put("/:id", validate(updateCarSchema), CarControllers.updateCar);
carRouter.delete("/:id", CarControllers.deleteCar);

export default carRouter;
