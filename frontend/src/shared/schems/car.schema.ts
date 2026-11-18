import { z } from "zod";

export const createCarSchema = z.object({
  style: z.string().min(1, "style is required!"),
  rating: z.number().max(5),
  about: z.string().min(1, "about is required!"),
  acceleration: z.number().min(1, "acceleration is required!"),
  brand: z.string().min(1, "brand is required!"),
  model: z.string().min(1, "model is required!"),
  year: z.number().min(1, "year is required!"),
  hour_cost: z.number().min(1, "hour cost is required!"),
  full_cost: z.number().min(1, "full cost is required!"),
  powertrain_type: z.string().min(1, "powertrain is required!"),
  total_hp: z.number().min(1, "HP is required!"),
  total_kw: z.number().min(1, "KW is required!"),
  torque_nm: z.number().min(1, "NM is required!"),
  fuel_consumption: z.number().min(1, "fuel consumption is required!"),
  transmission: z.string().min(1, "transmission is required!"),
  drive_type: z.string().min(1, "divetype is required!"),
  colors: z.array(
    z.object({
      car_id: z.string(),
      color: z.object({
        name: z.string().min(1, "color name is required!"),
        hex: z.string().min(1, "color hex is required!").startsWith("#"),
      }),
      color_id: z.string(),
    }),
  ),
  images: z
    .array(
      z.object({
        url: z.string(),
      }),
    )
    .optional(),
});

export type CarFormSchema = z.infer<typeof createCarSchema>;
