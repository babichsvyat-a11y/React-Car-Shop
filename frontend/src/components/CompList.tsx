"use client";
import { ICar } from "@/shared/types/catalog/car.interface";
import { Dispatch, SetStateAction } from "react";
interface ILazyCompListProps {
  compList: ICar[];
  setCompList: Dispatch<SetStateAction<ICar[]>>;
}

export default function CompList({
  compList = [],
  setCompList,
}: ILazyCompListProps) {
  const compKeys = [
    "Model",
    "Brand",
    "Is available",
    "Rating",
    "Year",
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
    "",
  ];
  return (
    <div className="mb-16">
      <h2 className="font-secondary dark:text-primary-text text-light-accent tracking-normal font-black text-left lg:text-3xl text-2xl transition delay-100 duration-200 easy-in">
        Comparsion{" "}
        <span className="dark:text-brand-accent text-light-simp-accent">
          ({compList.length}/3)
        </span>
      </h2>

      <div className="overflow-x-auto border-2 dark:border-primary-text border-secondary-text  h-60">
        <ul className="min-w-200 grid grid-flow-col divide-x-2 dark:divide-primary-text divide-secondary-text ">
          <li>
            <ul className="divide-y-2">
              {compKeys.map((key) => (
                <li
                  className="  font-secondary dark:text-primary-text text-light-accent tracking-tighter font-semibold text-left lg:text-xl text-lg transition delay-100 duration-200 easy-in"
                  key={key}
                >
                  <p className=" dark:text-brand-accent text-light-simp-accent px-4 py-2">
                    {key}
                  </p>
                </li>
              ))}
            </ul>
          </li>
          {compList.map((auto) => (
            <li
              className="divide-y-2 font-secondary dark:text-primary-text text-light-accent tracking-tighter font-semibold text-left lg:text-xl text-lg transition delay-100 duration-200 easy-in"
              key={auto.id}
            >
              <p className="px-4 py-2">{auto.model}</p>
              <p className="px-4 py-2">{auto.brand}</p>
              <p className="px-4 py-2">{auto.is_available ? "Yes" : "No"}</p>
              <p className="px-4 py-2">{auto.rating}</p>
              <p className="px-4 py-2">{auto.year}</p>
              <p className="px-4 py-2">{auto.acceleration}</p>
              <p className="px-4 py-2">{auto.powertrain_type}</p>
              <p className="px-4 py-2">{auto.total_hp}</p>
              <p className="px-4 py-2">{auto.total_kw}</p>
              <p className="px-4 py-2">{auto.torque_nm}</p>
              <p className="px-4 py-2">{auto.transmission}</p>
              <p className="px-4 py-2">{auto.drive_type}</p>
              <p className="px-4 py-2">{auto.fuel_consumption}</p>
              <p className="px-4 py-2">{auto.hour_cost} $</p>
              <p className="px-4 py-2">{auto.full_cost} $</p>
              <button
                className="w-full px-6 py-1 dark:bg-brand-accent dark:hover:bg-brand-accent-dark bg-light-simp-accent hover:bg-light-accent transition delay-100 duration-200 easy-in cursor-pointer font-secondary text-second-text text-md text-primary-text uppercase tracking-tighter font-semibold text-normal"
                type="button"
                onClick={() => {
                  setCompList((prevList: ICar[]) =>
                    prevList.filter((item) => item.id !== auto.id),
                  );
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
