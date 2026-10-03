import { z } from "zod";
import { createImageSchema } from "./image.schema";
import { createCarSchema } from "./car.schema";

export const createColorSchema = z.object({
  id: z.number(),
  name: z.string().min(1, "ColorName is required!"),
  hex: z.string().min(1, "HEX is required!").max(7).startsWith("#"),
});
