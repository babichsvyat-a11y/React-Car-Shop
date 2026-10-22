export interface INotifycationRequest {
  email: string | null;
  phone: string | null;
  channel: "SMS" | "EMAIL";
  payload: string;
}
