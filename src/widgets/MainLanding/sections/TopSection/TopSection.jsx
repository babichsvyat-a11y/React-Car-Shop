import CarCard from "@/enteties/CarCard";
import totalAuto from "@/db";

const TopSection = () => {
  return (
    <section className="text-primary-text font-secondary">
      <h2 className="px-[10%] py-10 uppercase text-3xl font-semibold text-center">
        our top models
      </h2>
      <ul className="grid xl:grid-cols-4 lg:gap-x-[5%] gap-x-[10%] md:gap-y-[5%] gap-y-8 px-[10%] lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {totalAuto
          .filter((auto, i) => i <= 3)
          .map((auto) => (
            <CarCard key={auto.id} {...auto} />
          ))}
      </ul>
    </section>
  );
};

export default TopSection;
