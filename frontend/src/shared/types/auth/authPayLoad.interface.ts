import type { IUser } from "./user.interface";

export interface IAuthPayLoad {
  access_token: string;
  user: IUser;
}
