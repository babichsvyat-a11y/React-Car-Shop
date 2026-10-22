import type {
  IPaymentRequest,
  IPaymentResponse,
} from "@/shared/interface/payment/payment.interface";
import { privateApi } from "@/app/api/axiosInstance";
import type { AxiosInstance } from "axios";

export class PaymentApiService {
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  async createPayment(
    paymentData: IPaymentRequest,
    idempotencyKey: string,
  ): Promise<IPaymentResponse> {
    const response = await this.client.post<IPaymentResponse>(
      "api/v1/payment",
      paymentData,
      {
        headers: { "idempotency-key": idempotencyKey },
      },
    );
    return response.data;
  }

  async getStatus(paymentId: string): Promise<IPaymentResponse> {
    const response = await this.client.get<IPaymentResponse>(
      `/api/v1/payment/${paymentId}`,
    );
    return response.data;
  }
}

export const paymentApi = new PaymentApiService(privateApi);
