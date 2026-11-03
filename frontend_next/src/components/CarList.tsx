import { useDebounce } from "@/hooks/useDebounce";
import CarCard from "@/components/CarCard";
import { ICar } from "@/shared/types/catalog/car.interface";
import errorImg from "@/assets/icons/error.svg";
import Image from "next/image";

interface Props {
  cars: ICar[];
}

const CarList = ({ cars }: Props) => {
  const debouncedSearch = useDebounce(cars, 600);

  return debouncedSearch.length === 0 ? (
    <div className="flex-col my-[10%]">
      <Image className="block mx-auto pb-5" src={errorImg} alt="error image" />
      <p className="text-center font-secondary text-primary-text uppercase tracking-tighter font-semibold text-lg">
        your car not found
      </p>
    </div>
  ) : (
    <ul className="grid xl:grid-cols-4 gap-[2vw] px-[10%] lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 pb-10">
      {debouncedSearch.map((auto) => (
        <CarCard key={auto.id} {...auto} />
      ))}
    </ul>
  );
};

export default CarList;
