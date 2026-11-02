import type { ICar } from "@/shared/interface/catalog/car.interface";
import { privateApi, publicApi } from "@/app/api/axiosInstance";
import type { AxiosInstance } from "axios";

export class CatalogApiService {
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  async getAllCars(): Promise<ICar[]> {
    const response = await this.client.get<ICar[]>("/api/v1/catalog");
    return response.data;
  }

  async getOneCar(id: string): Promise<ICar> {
    const response = await this.client.get<ICar>(`/api/v1/catalog/${id}`);
    return response.data;
  }

  async createCar(carData: Omit<ICar, "id">): Promise<ICar> {
    const response = await privateApi.post<ICar>("/api/v1/catalog", carData);
    return response.data;
  }

  async updateCar(carData: ICar): Promise<ICar> {
    const response = await privateApi.put<ICar>(
      `/api/v1/catalog/${carData.id}`,
      carData,
    );
    return response.data;
  }

  async deleteCar(id: string): Promise<void> {
    await privateApi.delete(`/api/v1/catalog/${id}`);
  }
}

export const catalogApi = new CatalogApiService(publicApi);
