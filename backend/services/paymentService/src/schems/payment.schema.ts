import { z } from "zod";

export const paymentSchema = z.object({
  user_id: z.string().min(1, "user_id is required"),
  car_id: z.string().min(1, "car_id is required"),
  amount: z.number().positive(),
  comment: z.string().optional(),
  provider: z.string().min(1, "provider is required"),
  provider_tx_id: z.string(),
});

export type TPayment = z.infer<typeof paymentSchema>;
