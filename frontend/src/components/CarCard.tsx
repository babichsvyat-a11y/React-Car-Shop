import { PAGES } from "@/config/pages-class.config";
import type { ICar } from "@/shared/types/catalog/car.interface";
import Image from "next/image";
import comingImg from "@/assets/img/imageCar.svg";
import Link from "next/link";

const styleMark: Record<string, string> = {
  lap: "lap",
  drag: "drag",
  rally: "rally",
};

export default function CarCard(auto: ICar) {
  const style = auto.style ? styleMark[auto.style] : "";
  const imgSrc = auto.images?.length ? `/${auto.images[0].url}` : comingImg;

  return (
    <li
      key={auto.id}
      className="aspect-3/4 md:min-w-60 min-w-45 text-primary-text dark:bg-secondary-background bg-secondary-text flex flex-col  md:brightness-80 transition delay-100 duration-200 easy-in"
    >
      <div className="flex flex-col justify-between flex-2 relative w-full">
        <Image
          className="absolute top-0 left-0 aspect-3/4 w-full object-cover"
          src={imgSrc}
          alt={auto.model}
          width={380}
          height={680}
          priority
        />
        <div className="pl-3 pt-2 z-10">
          <h3 className="uppercase text-2xl font-semibold">{auto.model}</h3>
          {style && <div className={styleMark[auto.style]}></div>}
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

      <Link href={PAGES.ITEM(auto.id)} className="z-10 ">
        <button
          className="w-full font-secondary text-primary-text uppercase tracking-tighter font-medium text-[12px] px-3.5 py-2 dark:bg-brand-accent dark:hover:bg-brand-accent-dark bg-light-simp-accent hover:bg-light-accent transition delay-100 duration-200 easy-in cursor-pointer"
          type="button"
        >
          details
        </button>
      </Link>
    </li>
  );
}
