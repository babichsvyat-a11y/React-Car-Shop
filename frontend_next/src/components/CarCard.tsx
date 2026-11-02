import { PAGES } from "@/config/pages-class.config";
import type { ICar } from "@/shared/types/catalog/car.interface";
import Image from "next/image";
import Link from "next/link";

export default function CarCard(auto: ICar) {
  const styleMark = {
    lap: "after:bg-simply-accent after:block after:w-[25%] after:h-1 z-10",
    drag: "after:block after:w-[25%] after:h-1 after:bg-brand-accent z-10",
    rally: "after:block after:w-[25%] after:h-1 after:bg-green-500n z-10",
  };
  return (
    <li
      key={auto.id}
      className="aspect-3/4 md:min-w-83.75 min-w-55 text-primary-text dark:bg-secondary-background bg-secondary-text flex flex-col  md:brightness-80 transition delay-100 duration-200 easy-in"
    >
      <div className="py-2 px-3 flex flex-col justify-between flex-2 relative w-full">
        <Image
          className="absolute top-0 left-0 aspect-3/4 w-full object-cover"
          src={auto.brand}
          alt="auto image"
        />
        <div
          className={
            auto.style === "lap"
              ? styleMark.lap
              : auto.style === "drag"
                ? styleMark.drag
                : styleMark.rally
          }
        >
          <h3 className="uppercase text-2xl font-semibold">{auto.model}</h3>
        </div>
        <div className="grid grid-cols-2 gap-2 px-[10%] backdrop-brightness-50 z-10">
          <div className="flex flex-col">
            <h4 className="uppercase text-2xl font-semibold text-center">
              {auto.total_hp}
              <span className="text-base font-normal"> hp</span>
            </h4>
          </div>
          <div className="flex flex-col items-center">
            <h4 className="uppercase text-2xl font-semibold">
              {auto.acceleration}
              <span className="text-lg font-normal"> s</span>
            </h4>
            <p className="text-xs font-extralight text-secondary-text">
              0-100 km/h
            </p>
          </div>
        </div>
      </div>

      <button
        className="z-10 w-full font-secondary text-primary-text uppercase tracking-tighter font-medium text-[12px] px-3.5 py-2 dark:bg-brand-accent dark:group-hover:bg-brand-accent-dark bg-light-simp-accent group-hover:bg-light-accent transition delay-100 duration-200 easy-in cursor-pointer"
        type="button"
      >
        <Link href={PAGES.ITEM(auto.id)}>details</Link>
      </button>
    </li>
  );
}
