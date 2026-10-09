import express from "express";
import carRouter from "./car.router";
import globalErrorHandler from "./middlewares/globalError.middleware";
import httpMorgan from "./middlewares/morgan.middlewar";

const app = express();

app.use(express.json());
app.use(httpMorgan);

app.use("/api/v1/catalog", carRouter);

app.use(globalErrorHandler);

export default app;
