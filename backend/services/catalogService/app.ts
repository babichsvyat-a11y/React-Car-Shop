import express, { Router } from "express";
import carRouter from "./car.router";
import prisma from "../../prisma/prismaClient";

const app = express();
app.use(express.json());

app.use("/api/v1/catalog", carRouter);

app.listen(5080, () => {
  console.log("http://localhost:5080");
});

process.on("SIGINT", async () => {
  await prisma.$disconnect();
  process.exit(0);
});

export default app;
