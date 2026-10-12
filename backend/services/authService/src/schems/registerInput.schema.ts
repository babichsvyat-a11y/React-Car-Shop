import { z } from "zod";

export const RegisterInputSchema = z.object({
  email: z.string().email("Incorect email").min(1, "email is required"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  first_name: z.string().optional(),
  last_name: z.string().min(1, "Last name is required"),
});

export type TRegisterInput = z.infer<typeof RegisterInputSchema>;
