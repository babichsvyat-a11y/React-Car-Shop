import "dotenv/config";
import mongoose from "mongoose";
import { Auto } from "./models/Auto.ts";
import { initialCars } from "./initialCars.ts";
import { logger } from "./utils/log.ts";

const MONGO_URL =
  process.env.MONGO_URL || "mongodb://127.0.0.1:27017/reactcarshop";

async function seedDatabase() {
  try {
    await mongoose.connect(MONGO_URL);
    logger.info("MongoDB conected to puch data");

    await Auto.deleteMany({});
    logger.info("Old data deleted");

    await Auto.insertMany(initialCars);
    logger.info("Data base succsesful install");
  } catch (error) {
    logger.error("Failed install BD", error);
  } finally {
    await mongoose.connection.close();
    logger.info("Conection with BD has been closed!");
  }
}

seedDatabase();
