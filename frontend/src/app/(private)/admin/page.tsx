"use client";

import { useCatalog } from "@/hooks/apiHooks/useCatalog";
import { useCallbacks } from "@/hooks/apiHooks/useFeedback";
import errorImg from "@/assets/icons/error.svg";
import Image from "next/image";
import Link from "next/link";
import { PAGES } from "@/config/pages-class.config";

export default function Admin() {
  const {
    data: cars = [],
    isLoading: isCarsLoading,
    error: carError,
  } = useCatalog();
  const {
    data: callbacks = [],
    isLoading: isCallbacksLoading,
    error: callbacksError,
  } = useCallbacks();

  if (carError && callbacksError) {
    return (
      <div className="p-10 text-center font-primary text-xl dark:text-primary-text">
        <p> Catalog data error</p>
        <Image
          className="block mx-auto pb-5"
          src={errorImg}
          alt="error image"
        />
      </div>
    );
  }

  return (
    <main className="flex-auto pt-22 bg-primary-background px-[10%] max-h-dvh h-full flex flex-col gap-20 mb-[17%]">
      {isCarsLoading && isCallbacksLoading ? (
        <div className="text-base text-secondary-text font-normal text-center flex flex-row gap-8 mx-auto">
          Data loading...
        </div>
      ) : (
        <div className="flex flex-col gap-20">
          <div className="flex flex-col justify-center gap-4 mt-[25%]">
            <h1 className="font-primary mx-auto text-4xl font-black text-primary-text uppercase leading-none text-left transition delay-100 duration-200 easy-in">
              Your admin panel
            </h1>
            <h2 className="text-base text-secondary-text font-normal text-center">
              Change the some one data page, and manage him
            </h2>
          </div>
          <ul className="text-base text-secondary-text font-normal text-center flex flex-row gap-8 justify-center">
            <li>
              <Link href={PAGES.USERS}>
                <p className="text-shadow-md text-shadow-simply-accent-light font-primary text-6xl font-black text-simply-accent leading-none transition delay-100 duration-200 easy-in">
                  -
                </p>
                <h3>Total users</h3>
              </Link>
            </li>
            <li>
              <Link href={PAGES.PRODUCTS}>
                <p className="text-shadow-md text-shadow-simply-accent-light font-primary text-6xl font-black text-simply-accent leading-none transition delay-100 duration-200 easy-in">
                  {cars.length ? cars.length : "-"}
                </p>
                <h3>Total products</h3>
              </Link>
            </li>
            <li>
              <Link href={PAGES.POST}>
                <p className="text-shadow-md text-shadow-simply-accent-light font-primary text-6xl font-black text-simply-accent leading-none transition delay-100 duration-200 easy-in">
                  {callbacks.length ? callbacks.length : "-"}
                </p>
                <h3>Total callback request</h3>
              </Link>
            </li>
            <li>
              <Link href={PAGES.PAYMENTS}>
                <p className="text-shadow-md text-shadow-simply-accent-light font-primary text-6xl font-black text-simply-accent leading-none transition delay-100 duration-200 easy-in">
                  -
                </p>
                <h3>Total payments succesfull</h3>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </main>
  );
}
