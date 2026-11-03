import type { ICallback } from "@/shared/types/feedback/callback.interface";
import type { ICallbackResponse } from "@/shared/types/feedback/response.interface";
import { privateApi, publicApi } from "@/services/axiosInstance";
import type { INotifycationRequest } from "@/shared/types/feedback/notification.interface";

export class FeedbackApiService {
  async requestCallback(data: ICallback): Promise<ICallbackResponse> {
    const response = await publicApi.post<ICallbackResponse>(
      "api/v1/feedback/callback",
      data,
    );
    return response.data;
  }

  async sendNotification(
    data: INotifycationRequest,
  ): Promise<{ jobId: string }> {
    const response = await privateApi.post<{
      jobId: string;
    }>("/api/v1/feedback/notify", data);
    return response.data;
  }

  async getAllCallbacks(): Promise<ICallbackResponse[]> {
    const response = await privateApi.get<ICallbackResponse[]>(
      "/api/v1/feedback/callbacks",
    );
    return response.data;
  }
}

export const feedbackApi = new FeedbackApiService();
