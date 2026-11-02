import { type ICar } from "./car.interface";
import { type IImage } from "./image.interface";

export interface IColor {
  id: Number;
  name: String;
  hex: String;
  cars: ICar[];
  images: IImage[];
}
