"use client";

import { PAGES } from "@/config/pages-class.config";
import { useCatalog, useCreateCar } from "@/hooks/apiHooks/useCatalog";
import Image from "next/image";
import errorImg from "@/assets/icons/error.svg";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CarFormSchema, createCarSchema } from "@/shared/schems/car.schema";
import { ICar } from "@/shared/types/catalog/car.interface";

export default function Products() {
  const { data: cars = [], isLoading, error } = useCatalog();
  const { mutate: requestCallback, isPending } = useCreateCar();
  const tableHeaders = [
    "ID",
    "Model",
    "Brand",
    "Is available",
    "Style",
    "Rating",
    "Year",
    "Color list",
    "Acceleration 0 to 100",
    "Powertrain type",
    "Power, HP",
    "Power, Kw",
    "Torque, Nm",
    "Transmission",
    "Drive type",
    "Fuel consumption",
    "Hour price",
    "Full price",
    "Created at",
    "Links",
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CarFormSchema>({
    resolver: zodResolver(createCarSchema),
  });

  const onSubmit = (data: CarFormSchema) => {
    requestCallback(data, {
      onSuccess: () => {
        reset();
      },
    });
  };

  if (error) {
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
      <section className="flex flex-col justify-center gap-4">
        <h1 className="font-primarys text-4xl font-black text-primary-text uppercase leading-none text-center transition delay-100 duration-200 easy-in">
          Your products list
        </h1>
      </section>
      {isLoading ? (
        <div className="text-base text-secondary-text font-normal text-center flex flex-row gap-8 mx-auto">
          Data loading...
        </div>
      ) : (
        <section className="overflow-auto border border-gray-500 text-base text-secondary-text font-normal max-h-screen">
          <table className=" min-w-full divide-y divide-gray-400">
            <thead className="  bg-secondary-background text-center font-semibold">
              <tr className="divide-x divide-gray-400">
                {tableHeaders.map((item) => (
                  <th className="px-4 py-2" key={item}>
                    {item}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {cars.map((car) => (
                <tr
                  className="divide-x divide-gray-400 hover:bg-secondary-background text-center"
                  key={car.id}
                >
                  <td className="whitespace-nowrap px-4 py-2">{car.id}</td>
                  <td className="whitespace-nowrap px-4 py-2">{car.model}</td>
                  <td className="whitespace-nowrap px-4 py-2">{car.brand}</td>
                  <td className="whitespace-nowrap px-4 py-2">
                    {car.is_available ? "+" : "-"}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2">{car.style}</td>
                  <td className="whitespace-nowrap px-4 py-2">
                    {car.rating}/5
                  </td>
                  <td className="whitespace-nowrap px-4 py-2">{car.year}</td>
                  <td className="whitespace-nowrap px-4 py-2">
                    {car.colors.map((color) => color.color.name).join(",")}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2">
                    {car.acceleration} s
                  </td>
                  <td className="whitespace-nowrap px-4 py-2">
                    {car.powertrain_type}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2">
                    {car.total_hp} hp
                  </td>
                  <td className="whitespace-nowrap px-4 py-2">
                    {car.total_kw} kW
                  </td>
                  <td className="whitespace-nowrap px-4 py-2">
                    {car.torque_nm} nm
                  </td>
                  <td className="whitespace-nowrap px-4 py-2">
                    {car.transmission}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2">
                    {car.drive_type}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2">
                    {car.fuel_consumption} l/100 km
                  </td>
                  <td className="whitespace-nowrap px-4 py-2">
                    {car.hour_cost} $
                  </td>
                  <td className="whitespace-nowrap px-4 py-2">
                    {car.full_cost} $
                  </td>
                  <td className="whitespace-nowrap px-4 py-2">
                    {car.created_at}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2">
                    <Link href={PAGES.ITEM(car.id)}>LINK</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}
      <section>
        <form
          onSubmit={handleSubmit(onSubmit)}
          id="contactForm"
          className="flex flex-col gap-4"
        >
          <h3 className="uppercase text-xl font-semibold text-center">
            Share your contact info
          </h3>
          <p className="text-sm text-center dark:text-secondary-text text-light-accent/30 font-medium">
            Your car is ready for you !!
          </p>
          <label className="hidden" htmlFor="name"></label>
          <input
            className="bg-white border-simply-accent-light border-3 rounded-xl text-secondary-text font-secondary text-base font-semibold pl-4 focus:scale-105 focus:border-brand-accent-light"
            id="name"
            placeholder="Your name"
            {...register("name")}
          />
          {errors.name && (
            <span className="text-red-500 text-sm">{errors.name.message}</span>
          )}
          <label className="hidden" htmlFor="number"></label>
          <input
            className="bg-white border-simply-accent-light border-3 rounded-xl text-secondary-text font-secondary text-base font-semibold pl-4 focus:scale-105 focus:border-brand-accent-light"
            id="number"
            placeholder="Your number"
            {...register("phone")}
          />
          {errors.phone && (
            <span className="text-red-500 text-sm">{errors.phone.message}</span>
          )}
          <label className="hidden" htmlFor="comment"></label>
          <textarea
            className="bg-white border-simply-accent-light border-3 rounded-xl text-secondary-text font-secondary text-base font-semibold pl-4 focus:scale-105 focus:border-brand-accent-light"
            id="comment"
            placeholder="Your comment"
            {...register("comment")}
          />
          {errors.comment && (
            <span className="text-red-500 text-sm">
              {errors.comment.message}
            </span>
          )}

          <button
            className="font-secondary text-primary-text uppercase tracking-tighter font-semibold text-[12px] px-3.5 py-2 dark:bg-brand-accent dark:hover:bg-brand-accent-dark bg-light-simp-accent hover:bg-light-accent hover:scale-105 transition delay-100 duration-200 easy-in cursor-pointer rounded-md"
            type="submit"
            disabled={isPending}
          >
            {isPending ? "Sending.." : "start your engine, chief !"}
          </button>
        </form>
      </section>
    </main>
  );
}
