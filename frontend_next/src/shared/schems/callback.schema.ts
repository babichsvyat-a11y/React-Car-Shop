import { z } from "zod";

export const createCallbackSchema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z
    .string()
    .min(1, "Phone is required")
    .regex(
      /^\+380\d{9}$/,
      "The number must start with +380 and contain 9 digits",
    ),
  comment: z
    .string()
    .max(250, "The number must contain at most 250 characters")
    .nullable(),
});

export type CallbackFormSchema = z.infer<typeof createCallbackSchema>;
