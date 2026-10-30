import { useMutation, useQuery } from "@tanstack/react-query";
import type { IPaymentRequest } from "@/shared/interface/payment/payment.interface";
import { paymentApi } from "@/app/api/paymentApi";

export const useCreatePayment = () => {
  return useMutation({
    mutationFn: (paymentData: IPaymentRequest) => {
      const idempotencyKey = crypto.randomUUID();
      return paymentApi.createPayment(paymentData, idempotencyKey);
    },
  });
};

export const usePaymentStatus = (paymentId: string) => {
  return useQuery({
    queryKey: ["payment", paymentId],
    queryFn: () => paymentApi.getStatus(paymentId),
    enabled: !!paymentId,
    refetchInterval: (query) => {
      const data = query.state.data;
      return data?.status === "PENDING" ? 3000 : false;
    },
  });
};
