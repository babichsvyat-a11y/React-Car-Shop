import { useDebounce } from "@/shared/hooks/useDebounce.js";
import CarCard from "@/enteties/CarCard";
import totalAuto from "@/db";

const CarList = ({ searchAuto }) => {
  const debouncedSearch = useDebounce(searchAuto, 600);

  const autoList = totalAuto.filter(
    (auto) =>
      auto.name.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
      auto.brand.toLowerCase().includes(debouncedSearch.toLowerCase()),
  );

  return autoList.length === 0 ? (
    <div className="flex-col my-[10%]">
      <img
        className="block mx-auto pb-5"
        src="src\shared\assets\icons\error.svg"
        alt="error image"
      />
      <p className="text-center font-secondary text-primary-text uppercase tracking-tighter font-semibold text-lg">
        your car not found
      </p>
    </div>
  ) : (
    <ul className="grid xl:grid-cols-4 gap-[2vw] px-[10%] lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 pb-10">
      {(autoList ?? totalAuto).map((auto) => (
        <CarCard key={auto.id} {...auto} />
      ))}
    </ul>
  );
};

export default CarList;
