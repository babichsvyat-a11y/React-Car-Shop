import {
  useMutation,
  useQuery,
  useQueryClient,
  UseQueryResult,
} from "@tanstack/react-query";
import { authApi } from "@/services/authApi";
import { IUser } from "@/shared/types/auth/user.interface";

const clearAuthTokens = () => {
  localStorage.removeItem("access_token");
  document.cookie = "access_token=; path=/; max-age=0; SameSite=Lax";
};

const setAuthTokens = (token: string) => {
  localStorage.setItem("access_token", token);
  document.cookie = `access_token=${token}; path=/; max-age=604800; SameSite=Lax`;
};

export const useMe = () => {
  return useQuery<IUser, Error>({
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
      setAuthTokens(data.access_token);
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
      setAuthTokens(data.access_token);
      queryClient.setQueryData(["auth", "me"], data.user);
    },
  });
};

export const useRefreshToken = () => {
  return useMutation({
    mutationFn: () => authApi.refreshToken(),
    onSuccess: (data) => {
      setAuthTokens(data.access_token);
    },
    onError: () => {
      clearAuthTokens();
    },
  });
};

export const useLogout = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => authApi.logout(),
    onSuccess: async () => {
      clearAuthTokens();
      await queryClient.resetQueries({ queryKey: ["auth"], exact: false });
    },
  });
};
