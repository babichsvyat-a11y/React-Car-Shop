export interface IPaymentRequest {
  user_id: string;
  amount: number;
  comment: string | null;
  currency: string;
  provider: string;
}

export interface IPaymentResponse {
  id: string;
  user_id: string;
  amount: number;
  comment: string | null;
  currency: string;
  status: "PENDING" | "SUCCESS" | "FAILED" | "REFUNDED";
  provider: string;
  provider_tx_id: string | null;
  created_at: string;
  updated_at: string;
}
