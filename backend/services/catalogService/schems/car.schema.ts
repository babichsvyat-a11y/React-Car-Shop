import { z } from "zod";
import { createImageSchema } from "./image.schema";
import { createColorSchema } from "./color.schema";

export const createCarSchema = z.object({
  style: z.string().min(1, "style is required").toLowerCase(),
  rating: z.number().positive().min(1).max(5),
  about: z.string().min(1, "about is required").max(500),
  acceleration: z.number().positive(),
  brand: z.string().min(1, "brand is required"),
  model: z.string().min(1, "model is required"),
  year: z.number().min(1900).max(new Date().getFullYear()).positive().int(),
  hour_cost: z.number().positive(),
  full_cost: z.number().positive(),
  powertrain_type: z.string().min(1, "powertrain is required"),
  total_hp: z.number().positive().int(),
  total_kw: z.number().positive().int(),
  torque_nm: z.number().positive().int(),
  fuel_consumption: z.number().nonnegative(),
  transmission: z.string().min(1, "transmission is required"),
  drive_type: z.string().min(1, "driveType is required"),
  colors: z.array(createColorSchema).nonempty(),
  images: z.array(createImageSchema).nonempty(),
});

export const updateCarSchema = createCarSchema.partial();
