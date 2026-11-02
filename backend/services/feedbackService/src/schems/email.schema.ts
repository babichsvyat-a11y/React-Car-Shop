import { z } from "zod";

export const emailSchema = z.object({
  type: z.enum(["SINGLE", "BROADCAST"]).default("BROADCAST"),
  emails: z.array(z.email("Invalid email format")).default([]),
  phones: z
    .array(z.string().regex(/^\+380\d{9}$/, "incorect phone format"))
    .default([]),
  channel: z.enum(["EMAIL", "SMS"]).default("EMAIL"),
  subject: z.string().min(1, "subject is required!!").max(100),
  text: z.string().min(1, "text is required!!").max(1000),
  template: z.string().optional(),
  attachmentsPath: z.string().optional(),
});

export type TEmailSchema = z.infer<typeof emailSchema>;
