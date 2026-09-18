import express from "express";
import type { Request, Response } from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/api/hello", (req: Request, res: Response) => {
  res.json({ message: "Hello, my little boy!" });
});

app.listen(PORT, () => {
  console.log("Server is Done!");
});
