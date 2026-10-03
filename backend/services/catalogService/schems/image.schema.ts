import { z } from "zod";

export const createImageSchema = z.object({
  id: z.string().min(1, "ID is required!"),
  url: z.string().min(1, "URL is required!"),
});
