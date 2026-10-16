import { Router } from "express";
import idempotencyMiddleware from "./middlewares/idempotency.middleware";
import paymentController from "./payment.controller";

const paymentRouter = Router();

paymentRouter.post("/", idempotencyMiddleware, paymentController.createPayment);

export default paymentRouter;
