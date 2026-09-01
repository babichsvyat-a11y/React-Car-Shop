import CarCard from "./CarCard";
import totalAuto from "./db";

export default function CarList() {
  return (
    <ul className="grid xl:grid-cols-4 gap-[2vw] px-[10%] lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 pb-10">
      {totalAuto.map((auto) => (
        <CarCard key={auto.id} {...auto} />
      ))}
    </ul>
  );
}
