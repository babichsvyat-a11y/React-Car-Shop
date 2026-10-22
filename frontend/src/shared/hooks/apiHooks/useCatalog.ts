import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { catalogApi } from "@/app/api/catalogApi";
import type { ICar } from "@/shared/interface/catalog/car.interface";

export const useCatalog = () => {
  return useQuery({
    queryKey: ["cars"],
    queryFn: () => catalogApi.getAllCars(),
  });
};

export const useCar = (id: string) => {
  return useQuery({
    queryKey: ["cars", id],
    queryFn: () => catalogApi.getOneCar(id),
    enabled: !!id,
  });
};

export const useCreateCar = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (newCar: Omit<ICar, "id">) => catalogApi.createCar(newCar),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cars"] });
    },
  });
};

export const useUpdateCar = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (updatedCar: ICar) => catalogApi.updateCar(updatedCar),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["cars"] });
      queryClient.invalidateQueries({ queryKey: ["cars", data.id] });
    },
  });
};

export const useDeleteCar = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => catalogApi.deleteCar(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cars"] });
    },
  });
};
