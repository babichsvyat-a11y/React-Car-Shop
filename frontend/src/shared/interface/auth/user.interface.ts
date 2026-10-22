export interface IUser {
  id: string;
  email: string;
  first_name: string | null;
  last_name: string;
  role: "USER" | "ADMIN";
}
