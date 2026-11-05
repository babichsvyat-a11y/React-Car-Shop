import AuthContent from "@/components/AuthContent";
import { Suspense } from "react";

export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-light-simp-bg dark:bg-primary-background">
          <span className="loading loading-spinner loading-lg text-brand-accent"></span>
        </div>
      }
    >
      <AuthContent />
    </Suspense>
  );
}
