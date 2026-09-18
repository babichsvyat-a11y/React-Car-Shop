import "dotenv/config";
import mongoose from "mongoose";
import { Auto } from "./models/Auto.js";
import { initialCars } from "./initialCars.js";

const MONGO_URL =
  process.env.MONGO_URL || "mongodb://127.0.0.1:27017/reactcarshop";

async function seedDatabase() {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("MongoDB conected to puch data");

    await Auto.deleteMany({});
    console.log("Old data deleted");

    await Auto.insertMany(initialCars);
    console.log("Data base succsesful install");
  } catch (error) {
    console.error("Failed install BD", error);
  } finally {
    await mongoose.connection.close();
    console.log("Conection with BD has been closed!");
  }
}

seedDatabase();
