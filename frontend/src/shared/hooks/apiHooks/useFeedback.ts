import { useMutation, useQuery } from "@tanstack/react-query";
import { feedbackApi } from "@/app/api/feedbackApi";
import type { ICallback } from "@/shared/interface/feedback/callback.interface";
import type { INotifycationRequest } from "@/shared/interface/feedback/notification.interface";

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
