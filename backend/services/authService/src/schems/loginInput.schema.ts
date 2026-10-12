import { z } from "zod";

export const LoginInputSchema = z.object({
  email: z.string().email("Incorect email").min(1, "email is required"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

export type TLoginInput = z.infer<typeof LoginInputSchema>;
