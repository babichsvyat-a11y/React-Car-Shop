import { IColor } from "./color.interface";
import { IImage } from "./image.interface";

export interface ICar {
  id: string;
  style: string;
  rating: number;
  about: string;
  acceleration: number;
  brand: string;
  model: string;
  year: number;
  hour_cost: number;
  full_cost: number;
  powertrain_type: string;
  total_hp: number;
  total_kw: number;
  torque_nm: number;
  fuel_consumption: number;
  transmission: string;
  drive_type: string;
  is_available: boolean;
  created_at: Date;
  colors: IColor[];
  images: IImage[] | undefined;
}
