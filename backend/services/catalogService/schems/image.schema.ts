import { z } from "zod";

export const createImageSchema = z.object({
  id: z.string().optional(),
  url: z.string().min(1, "URL is required!"),
});
