export interface INotifyResponse {
  id: string;
  email: string | null;
  phone: string | null;
  chanel: "SMS" | "EMAIL";
  status: "SENT" | "FAILED";
  payload: string;
  created_at: string;
}

export interface ICallbackResponse {
  id: string;
  name: string;
  phone: string;
  comment: string | null;
  status: "PENDING" | "IN_PROGRESS" | "RESOLVED";
  created_at: string;
  updated_at: string;
}
