import { type ICar } from "./car.interface";
import { type IImage } from "./image.interface";

export interface IColor {
  id: number;
  name: string;
  hex: string;
  cars: ICar[];
  images: IImage[];
}
