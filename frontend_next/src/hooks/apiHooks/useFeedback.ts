import { useMutation, useQuery } from "@tanstack/react-query";
import { feedbackApi } from "@/services/feedbackApi";
import type { ICallback } from "@/shared/types/feedback/callback.interface";
import type { INotifycationRequest } from "@/shared/types/feedback/notification.interface";

export const useRequestCallback = () => {
  return useMutation({
    mutationFn: (data: ICallback) => feedbackApi.requestCallback(data),
  });
};

export const useSendNotification = () => {
  return useMutation({
    mutationFn: (data: INotifycationRequest) =>
      feedbackApi.sendNotification(data),
  });
};

export const useCallbacks = () => {
  return useQuery({
    queryKey: ["admin", "callbacks"],
    queryFn: () => feedbackApi.getAllCallbacks(),
    staleTime: 1000 * 60 * 2,
  });
};
