"use client";

import { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

export default function AuthContent() {
  const [isRegisterOpen, setIsRegisterOpen] = useState<boolean>(false);

  function toggleRegister() {
    setIsRegisterOpen((prev) => !prev);
  }

  return (
    <main className="flex-auto pt-22 bg-light-simp-bg dark:bg-primary-background px-[10%] flex flex-col gap-10">
      <h1 className="font-primary m-auto text-4xl font-black dark:text-primary-text text-light-accent uppercase leading-none text-left transition delay-100 duration-200 easy-in">
        Authorization
      </h1>
      <div className="flex flex-row gap-10 mb-[20%] px-[5%] py-10 md:mx-[30%] mx-[10%] dark:bg-secondary-background bg-light-bg dark:shadow-none inset-shadow-lg justify-center flex-wrap">
        {!isRegisterOpen ? (
          <div className="flex flex-col">
            <LoginForm />
            <div className="flex flex-row">
              <p>Don't have an account?</p>
              <button
                onClick={toggleRegister}
                className="pl-2 transition delay-100 duration-200 easy-in cursor-pointer text-brand-accent hover:text-brand-accent-dark"
                type="button"
                id="registerBtn"
              >
                Register now!
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col">
            <RegisterForm />
            <div className="flex flex-row">
              <p>Already have an account?</p>
              <button
                onClick={toggleRegister}
                className="pl-2 transition delay-100 duration-200 easy-in cursor-pointer text-brand-accent hover:text-brand-accent-dark"
                type="button"
                id="loginBtn"
              >
                Login now!
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
