import express from "express";
import prisma from "../../prisma/prismaClient";

const app = express();
app.use(express.json());

app.listen(5080, () => {
  console.log("http://localhost:5080");
});

process.on("SIGINT", async () => {
  await prisma.$disconnect();
  process.exit(0);
});
