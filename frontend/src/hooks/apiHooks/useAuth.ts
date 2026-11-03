import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { authApi } from "@/services/authApi";

export const useMe = () => {
  return useQuery({
    queryKey: ["auth", "me"],
    queryFn: () => authApi.queryMe(),
    retry: false,
    staleTime: 1000 * 60 * 10,
  });
};

export const useLogin = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      authApi.login(email, password),
    onSuccess: (data) => {
      localStorage.setItem("access_token", data.access_token);
      queryClient.setQueryData(["auth", "me"], data.user);
    },
  });
};

export const useRegister = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      email,
      phone,
      password,
      first_name,
      last_name,
    }: {
      email: string;
      phone: string;
      password: string;
      first_name: string | null;
      last_name: string;
    }) => authApi.register(email, phone, password, first_name, last_name),
    onSuccess: (data) => {
      localStorage.setItem("access_token", data.access_token);
      queryClient.setQueryData(["auth", "me"], data.user);
    },
  });
};

export const useRefreshToken = () => {
  return useMutation({
    mutationFn: () => authApi.refreshToken(),
    onSuccess: (data) => {
      localStorage.setItem("access_token", data.access_token);
    },
    onError: () => {
      localStorage.removeItem("access_token");
    },
  });
};

export const useLogout = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => authApi.logout(),
    onSuccess: async () => {
      await queryClient.cancelQueries({ queryKey: ["auth"] });
      queryClient.removeQueries({ queryKey: ["auth"] });
      queryClient.invalidateQueries({ queryKey: ["auth"] });
    },
  });
};
