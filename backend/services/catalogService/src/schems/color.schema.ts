import { z } from "zod";

export const createColorSchema = z.object({
  id: z.number().optional(),
  name: z.string().min(1, "ColorName is required!"),
  hex: z.string().min(1, "HEX is required!").max(7).startsWith("#"),
});
