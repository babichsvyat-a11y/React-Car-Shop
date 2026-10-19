import { ICar } from "./Car.interface";
import { IImage } from "./image.interface";

export interface IColor {
  id: Number;
  name: String;
  hex: String;
  cars: ICar[];
  images: IImage[];
}
