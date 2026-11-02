import express from "express";
import httpMorgan from "./middlewares/morgan.middleware";
import paymentRouter from "./payment.router";
import globalErrorHandler from "./middlewares/globalError.middleware";

const app = express();

app.use(
  "/api/v1/payment/webhook",
  express.json({
    verify: (req: any, res, buf) => {
      req.rawBody = buf;
    },
  }),
);
app.use(express.json());
app.use(httpMorgan);
app.use("/api/v1/payment", paymentRouter);
app.use(globalErrorHandler);

export default app;
