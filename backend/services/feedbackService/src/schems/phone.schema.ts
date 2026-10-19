import { string, z } from "zod";

export const phoneSchema = z.object({
  name: z.string().min(1, "name is required"),
  phone: z
    .string()
    .min(1, "phone is required")
    .regex(/^\+380\d{9}$/, "incorect phone format"),
  comment: z.string().optional(),
});

export type TPhoneSchema = z.infer<typeof phoneSchema>;
