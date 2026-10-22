import { Router } from "express";
import idempotencyMiddleware from "./middlewares/idempotency.middleware";
import paymentController from "./payment.controller";
import verifyWebhookSignature from "./middlewares/webhookVerify.middleware";

const paymentRouter = Router();

paymentRouter.get("/:id", paymentController.getStatus);
paymentRouter.post("/", idempotencyMiddleware, paymentController.createPayment);
paymentRouter.post(
  "/webhook",
  verifyWebhookSignature,
  paymentController.handleWebhook,
);

export default paymentRouter;
