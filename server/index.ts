import dotenv from "dotenv";
import express from "express";
import type { Request, Response } from "express";
import cors from "cors";
import mongoose from "mongoose";
import { Auto } from "./models/Auto.js";

const app = express();
const PORT = 5000;

dotenv.config();
app.use(cors());
app.use(express.json());

const MONGO_URL =
  process.env.MONGO_URL || "mongodb://127.0.0.1:27017/reactcarshop";

mongoose
  .connect(MONGO_URL)
  .then(() => console.log("Succsesful conection with MongoDB!"))
  .catch((err) => console.error("Failed conection with MongoDB", err));

app.get("/api/cars", async (req, res) => {
  try {
    const totalAuto = await Auto.find();
    res.json(totalAuto);
  } catch (err) {
    res.status(500).json({ error: "Server fail" });
  }
});

app.get("/api/cars/:id", async (req, res) => {
  try {
    const auto = await Auto.findById(req.params.id);
    if (!auto) return res.status(404).json({ error: "This car not founded" });
    res.json(auto);
  } catch (err) {
    res.status(500).json({ error: "Incorect ID" });
  }
});

// app.post("/api/cars", (req: Request, res: Response) => {
//   const {
//     image,
//     name,
//     style,
//     rating,
//     about,
//     acceleration0To100,
//     brand,
//     model,
//     year,
//     color,
//     powertrain,
//     drivetrain,
//   } = req.body;

//   if (
//     !image ||
//     !name ||
//     !style ||
//     !rating ||
//     !about ||
//     !acceleration0To100 ||
//     !brand ||
//     !model ||
//     !year ||
//     !color ||
//     !powertrain ||
//     !drivetrain
//   ) {
//     return res.status(400).json({ error: "Please take a corect data!" });
//   }
//   const newCar = {
//     id: totalAuto.length > 0 ? totalAuto[totalAuto.length - 1].id + 1 : 1,
//     image,
//     name,
//     style,
//     rating,
//     about,
//     acceleration0To100,
//     brand,
//     model,
//     year,
//     color,
//     powertrain,
//     drivetrain,
//   };
//   totalAuto.push(newCar);
//   res.status(201).json(newCar);
// });

// app.put("/api/cars/:id", (req: Request, res: Response) => {
//   const carId = Number(req.params.id);
//   const {
//     image,
//     name,
//     style,
//     rating,
//     about,
//     acceleration0To100,
//     brand,
//     model,
//     year,
//     color,
//     powertrain,
//     drivetrain,
//   } = req.body;

//   const carIndex = totalAuto.findIndex((auto) => auto.id === carId);

//   if (carIndex === -1) {
//     return res.status(404).json({ error: "This car not founded" });
//   }

//   totalAuto[carIndex] = {
//     ...totalAuto[carIndex],
//     image: image ?? totalAuto[carIndex].image,
//     name: name ?? totalAuto[carIndex].name,
//     style: style ?? totalAuto[carIndex].style,
//     rating: rating !== undefined ? Number(rating) : totalAuto[carIndex].rating,
//     about: about ?? totalAuto[carIndex].about,
//     acceleration0To100:
//       acceleration0To100 !== undefined
//         ? Number(acceleration0To100)
//         : totalAuto[carIndex].acceleration0To100,
//     brand: brand ?? totalAuto[carIndex].brand,
//     model: model ?? totalAuto[carIndex].model,
//     year: year !== undefined ? Number(year) : totalAuto[carIndex].year,
//     color: color ?? totalAuto[carIndex].color,
//     powertrain: powertrain ?? totalAuto[carIndex].powertrain,
//     drivetrain: drivetrain ?? totalAuto[carIndex].drivetrain,
//   };

//   res.json(totalAuto[carIndex]);
// });

// app.delete("/api/cars/:id", (req: Request, res: Response) => {
//   const carId = Number(req.params.id);
//   const carIndex = totalAuto.findIndex((auto) => auto.id === carId);

//   if (carIndex === -1) {
//     return res.status(404).json({ error: "This car not founded" });
//   }
//   const deletedCar = totalAuto.splice(carIndex, 1);
//   res.json({ message: "The car has been deleted!", car: deletedCar[0] });
// });

app.listen(PORT, () => {
  console.log(`Server is Done!: http://localhost:${PORT}/api/cars`);
});
