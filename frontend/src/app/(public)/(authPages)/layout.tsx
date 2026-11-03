"use client";

import { PAGES } from "@/config/pages-class.config";
import { useMe } from "@/hooks/apiHooks/useAuth";

import { useRouter } from "next/navigation";
import { useEffect, type PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren<unknown>) {
  const router = useRouter();
  const { data: user, isLoading, error } = useMe();

  useEffect(() => {
    if (!isLoading && (error || !user)) {
      router.push(PAGES.LOGIN);
    }
  }, [user, isLoading, error, router]);

  if (isLoading) {
    return (
      <main className="flex flex-col gap-20 p-[10%] bg-light-simp-bg dark:bg-primary-background">
        <div className=" text-center font-primary text-xl dark:text-primary-text">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            viewBox="0 0 24 24"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <g
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            >
              <path stroke-dasharray="18" d="M12 3c4.97 0 9 4.03 9 9">
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  dur="0.3s"
                  values="18;0"
                />
                <animateTransform
                  attributeName="transform"
                  dur="1.5s"
                  repeatCount="indefinite"
                  type="rotate"
                  values="0 12 12;360 12 12"
                />
              </path>
              <path
                stroke-dasharray="60"
                d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9Z"
                opacity=".3"
              >
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  dur="1.2s"
                  values="60;0"
                />
              </path>
            </g>
          </svg>
          <p> Verificated...</p>
        </div>
      </main>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="dark:bg-primary-background bg-light-bg min-h-screen ">
      {children}
    </div>
  );
}
