"use client";

import { useRegister } from "@/hooks/apiHooks/useAuth";
import {
  createRegisterSchema,
  RegisterFormSchema,
} from "@/shared/schems/register.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function RegisterForm() {
  const { mutate, isPending } = useRegister();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RegisterFormSchema>({
    resolver: zodResolver(createRegisterSchema),
    defaultValues: {
      email: "",
      phone: "",
      password: "",
      first_name: "",
      last_name: "",
    },
  });

  const onSubmit = (data: RegisterFormSchema) => {
    const mutationPayload = {
      ...data,
      first_name: data.first_name?.trim() || null,
    };
    mutate(mutationPayload, {
      onSuccess: () => {
        reset();
      },
    });
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      id="registerForm"
      className="flex flex-col gap-4"
    >
      <h3 className="uppercase text-xl font-semibold text-center">Register</h3>
      <p className="text-sm text-center dark:text-secondary-text text-light-accent/30 font-medium">
        Take you contact info!
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

      <label className="hidden" htmlFor="phone"></label>
      <input
        className="bg-white border-simply-accent-light border-3 rounded-xl text-secondary-text font-secondary text-base font-semibold pl-4 focus:scale-105 focus:border-brand-accent-light"
        id="phone"
        placeholder="Your phone(+380...)"
        {...register("phone")}
      />
      {errors.phone && (
        <span className="text-red-500 text-sm">{errors.phone.message}</span>
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

      <label className="hidden" htmlFor="first_name"></label>
      <input
        className="bg-white border-simply-accent-light border-3 rounded-xl text-secondary-text font-secondary text-base font-semibold pl-4 focus:scale-105 focus:border-brand-accent-light"
        id="first_name"
        placeholder="Your first name"
        {...register("first_name")}
      />
      {errors.first_name && (
        <span className="text-red-500 text-sm">
          {errors.first_name.message}
        </span>
      )}

      <label className="hidden" htmlFor="last_name"></label>
      <input
        className="bg-white border-simply-accent-light border-3 rounded-xl text-secondary-text font-secondary text-base font-semibold pl-4 focus:scale-105 focus:border-brand-accent-light"
        id="last_name"
        placeholder="Your last name"
        {...register("last_name")}
      />
      {errors.last_name && (
        <span className="text-red-500 text-sm">{errors.last_name.message}</span>
      )}

      <button
        className="font-secondary text-primary-text uppercase tracking-tighter font-semibold text-[12px] px-3.5 py-2 dark:bg-brand-accent dark:hover:bg-brand-accent-dark bg-light-simp-accent hover:bg-light-accent hover:scale-105 transition delay-100 duration-200 easy-in cursor-pointer rounded-md"
        type="submit"
        disabled={isPending}
      >
        {isPending ? "Sending.." : "Register!"}
      </button>
    </form>
  );
}
