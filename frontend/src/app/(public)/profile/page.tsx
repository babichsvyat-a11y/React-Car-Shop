"use client";

import { useMe } from "@/hooks/apiHooks/useAuth";

export default function Profile() {
  const { data: user, isLoading: isUserLoading } = useMe();

  return (
    <main className="flex-auto pt-22 bg-light-simp-bg dark:bg-primary-background px-[10%] flex flex-col gap-10">
      {isUserLoading ? (
        <div className="dark:text-primary-text text-light-accent">
          Loading...
        </div>
      ) : (
        <div className="flex flex-col gap-2 ">
          <h1 className="font-primary m-auto text-4xl font-black dark:text-primary-text text-light-accent uppercase leading-none text-left transition delay-100 duration-200 easy-in">
            Your profile
          </h1>
          <p className=" m-auto font-secondary dark:text-brand-accent text-light-accent tracking-tighter font-semibold text-left lg:text-lg text-sm transition delay-100 duration-200 easy-in">
            Dear,{" "}
            {!isUserLoading
              ? user?.first_name
                ? user.first_name + " " + user.last_name
                : user?.last_name
              : 0}{" "}
          </p>
          <div className="table w-max mb-[20%] px-[5%] py-10 md:mx-[30%] mx-[10%] dark:bg-secondary-background bg-light-bg dark:shadow-none inset-shadow-lg">
            <div className="table-row-group">
              <div className="table-row">
                <h3 className="table-cell text-2xl dark:text-primary-text text-light-accent font-semibold text-start">
                  Your last name:
                </h3>
                <p className="table-cell text-2xl dark:text-secondary-text text-light-accent font-semibold text-end">
                  {user?.last_name}
                </p>
              </div>
              <div className="table-row">
                <h3 className="table-cell text-2xl dark:text-primary-text text-light-accent font-semibold text-start">
                  Your first name:
                </h3>
                <p className="table-cell text-2xl dark:text-secondary-text text-light-accent font-semibold text-end">
                  {user?.first_name}
                </p>
              </div>
              <div className="table-row">
                <h3 className="table-cell text-2xl dark:text-primary-text text-light-accent font-semibold text-start">
                  Your email:
                </h3>
                <p className="table-cell text-2xl dark:text-secondary-text text-light-accent font-semibold text-end">
                  {user?.email}
                </p>
              </div>
              <div className="table-row">
                <h3 className="table-cell text-2xl dark:text-primary-text text-light-accent font-semibold text-start">
                  Your phone:
                </h3>
                <p className="table-cell text-2xl dark:text-secondary-text text-light-accent font-semibold text-end">
                  {user?.phone}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
