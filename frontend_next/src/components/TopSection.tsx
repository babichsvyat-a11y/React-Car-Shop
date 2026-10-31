"use client";

import { useCatalog } from "@/hooks/apiHooks/useCatalog";
import CarCard from "./CarCard";
import CarCardSkeleton from "./CarCardSkeleton";
import Image from "next/image";
import errorImg from "@/assets/icons/error.svg";

const TopSection = () => {
  const { data: cars = [], isLoading, error } = useCatalog();

  return (
    <section className="dark:text-primary-text text-light-accent font-secondary">
      <h2 className="px-[10%] py-10 uppercase text-3xl font-semibold text-center">
        our top models
      </h2>
      {isLoading ? (
        <ul className="grid xl:grid-cols-4 gap-[2vw] px-[10%] lg:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 pb-10">
          {Array.from({ length: 4 }).map((card, index) => (
            <CarCardSkeleton key={index} />
          ))}
        </ul>
      ) : error ? (
        <div className="p-10 text-center font-primary text-xl dark:text-primary-text">
          <p> Top section data error</p>
          <Image
            className="block mx-auto pb-5"
            src={errorImg}
            alt="error image"
          />
        </div>
      ) : (
        <ul className="grid xl:grid-cols-4 gap-[2vw] px-[10%] lg:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 pb-10">
          {cars
            .toSorted((a, b) => b.rating - a.rating)
            .filter((auto, i) => i <= 3)
            .map((auto, index) => (
              <CarCard key={auto.id} {...auto} />
            ))}
        </ul>
      )}
    </section>
  );
};

export default TopSection;
