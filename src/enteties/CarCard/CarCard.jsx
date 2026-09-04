export default function CarCard(auto) {
  return (
    <li
      key={auto.id}
      className="bg-secondary-background flex flex-col h-150 md:h-87.5 sm:h-150 md:brightness-80 group md:hover:brightness-100 md:hover:scale-105 transition delay-100 duration-200 easy-in"
    >
      <div
        className={`py-2 px-3 flex flex-col justify-between bg-no-repeat bg-cover bg-center flex-2`}
        style={{ backgroundImage: `url(${auto.image})` }}
      >
        <div
          className={
            auto.id % 2
              ? "after:bg-simply-accent after:block after:w-[25%] after:h-1"
              : "after:block after:w-[25%] after:h-1 after:bg-brand-accent"
          }
        >
          <h3 className="uppercase text-2xl font-semibold">{auto.name}</h3>
        </div>
        <div className="grid grid-cols-2 gap-2 px-[10%] backdrop-brightness-50">
          <div className="flex flex-col">
            <h4 className="uppercase text-2xl font-semibold text-center">
              {auto.powertrain.power.totalHp}
              <span className="text-base font-normal"> hp</span>
            </h4>
          </div>
          <div className="flex flex-col items-center">
            <h4 className="uppercase text-2xl font-semibold">
              {auto.acceleration0To100}
              <span className="text-lg font-normal"> s</span>
            </h4>
            <p className="text-xs font-extralight text-secondary-text">
              0-100 km/h
            </p>
          </div>
        </div>
      </div>

      <button
        className="w-full font-secondary text-primary-text uppercase tracking-tighter font-normal text-[12px] px-3.5 py-2 bg-brand-accent group-hover:bg-brand-accent-dark transition delay-100 duration-200 easy-in cursor-pointer"
        type="button"
      >
        details
      </button>
    </li>
  );
}
