"use client";

import LoginForm from "@/components/LoginForm";
import RegisterForm from "@/components/RegisterForm";
import { useState } from "react";

export default function LoginPage() {
  const [isRegisterOpen, setIsRegisterOpen] = useState<boolean>(false);

  function toggleRegister() {
    setIsRegisterOpen((prev) => !prev);
  }

  return (
    <main className="flex-auto pt-22 bg-light-simp-bg dark:bg-primary-background px-[10%] flex flex-col gap-10">
      <h1 className="font-primary m-auto text-4xl font-black dark:text-primary-text text-light-accent uppercase leading-none text-left transition delay-100 duration-200 easy-in">
        Autharization
      </h1>
      <div className="flex flex-row gap-10 mb-[20%] px-[5%] py-10 md:mx-[30%] mx-[10%] dark:bg-secondary-background bg-light-bg dark:shadow-none inset-shadow-lg justify-center flex-wrap">
        {!isRegisterOpen ? (
          <div className="flex flex-col">
            <LoginForm />
            <div className="flex flex-row">
              <p>If you not have a accaunt</p>
              <button
                onClick={toggleRegister}
                className="pl-2 transition delay-100 duration-200 easy-in cursor-pointer text-brand-accent hover:text-brand-accent-dark"
                type="button"
                id="registerBtn"
                disabled={isRegisterOpen}
              >
                Take register!
              </button>
            </div>
          </div>
        ) : (
          <RegisterForm />
        )}
      </div>
    </main>
  );
}
