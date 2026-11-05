"use client";

import { useLogin } from "@/hooks/apiHooks/useAuth";
import {
  createLoginSchema,
  LoginFormSchema,
} from "@/shared/schems/login.schema";
import IApiErrorShape from "@/shared/types/ApiEror.interface";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";

export default function LoginForm() {
  const { mutate, isPending } = useLogin();
  const router = useRouter();
  const searchParams = useSearchParams();
  const fromPath = searchParams.get("from");
  const safeRedirect =
    fromPath && fromPath.startsWith("/") && !fromPath.startsWith("//")
      ? fromPath
      : "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = useForm<LoginFormSchema>({
    resolver: zodResolver(createLoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: LoginFormSchema) => {
    mutate(data, {
      onSuccess: () => {
        reset();
        console.log(1);
        router.replace(safeRedirect);

        router.refresh();
      },
      onError: (err: unknown) => {
        const errorObj = err as IApiErrorShape;

        const errorMessage =
          errorObj.response?.data?.errors?.[0]?.message ||
          errorObj.response?.data?.message ||
          errorObj.message ||
          "";

        const lowerMessage = errorMessage.toLowerCase();

        if (lowerMessage.includes("password")) {
          setError("password", {
            type: "server",
            message: "Incorrect password",
          });
        } else if (
          lowerMessage.includes("user") ||
          lowerMessage.includes("found") ||
          lowerMessage.includes("email")
        ) {
          setError("email", {
            type: "server",
            message: "User not found",
          });
        } else {
          setError("root.serverError", {
            type: "server",
            message: errorMessage || "Something went wrong. Please try again.",
          });
        }
      },
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      id="loginForm"
      className="flex flex-col gap-4"
    >
      <h2 className="text-2xl dark:text-primary-text text-light-accent uppercase font-semibold text-center">
        Login
      </h2>
      <p className="text-sm text-center dark:text-secondary-text text-light-accent/30 font-medium">
        Welcome back! Please enter your details.
      </p>
      <label className="hidden" htmlFor="email"></label>
      <input
        className="bg-white border-simply-accent-light border-3 rounded-xl text-secondary-text font-secondary text-base font-semibold pl-4 focus:scale-105 focus:border-brand-accent-light"
        id="email"
        placeholder="Your email"
        {...register("email")}
      />
      {errors.email && (
        <span className="text-red-500 text-sm">{errors.email.message}</span>
      )}

      <label className="hidden" htmlFor="password"></label>
      <input
        className="bg-white border-simply-accent-light border-3 rounded-xl text-secondary-text font-secondary text-base font-semibold pl-4 focus:scale-105 focus:border-brand-accent-light"
        id="password"
        type="password"
        placeholder="Take a password"
        {...register("password")}
      />
      {errors.password && (
        <span className="text-red-500 text-sm">{errors.password.message}</span>
      )}

      {errors.root?.serverError && (
        <span className="text-red-500 text-sm text-center font-semibold">
          {errors.root.serverError.message}
        </span>
      )}

      <button
        className="font-secondary text-primary-text uppercase tracking-tighter font-semibold text-[12px] px-3.5 py-2 dark:bg-brand-accent dark:hover:bg-brand-accent-dark bg-light-simp-accent hover:bg-light-accent hover:scale-105 transition delay-100 duration-200 easy-in cursor-pointer rounded-md"
        type="submit"
        disabled={isPending}
      >
        {isPending ? "Sending.." : "Login!"}
      </button>
    </form>
  );
}
