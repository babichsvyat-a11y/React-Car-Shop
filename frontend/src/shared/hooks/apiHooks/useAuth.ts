import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { authApi } from "@/app/api/authApi";

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
      password,
      first_name,
      last_name,
    }: {
      email: string;
      password: string;
      first_name: string | null;
      last_name: string;
    }) => authApi.register(email, password, first_name, last_name),
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
  });
};

export const useLogout = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => authApi.logout(),
    onSuccess: () => {
      localStorage.removeItem("access_token");
      queryClient.removeQueries({ queryKey: ["auth"] });
    },
  });
};
