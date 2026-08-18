const Top = () => {
  return (
    <section className="text-primary-text font-secondary">
      <h2 className="px-[10%] py-10 uppercase text-3xl font-semibold text-center">
        our top models
      </h2>
      <ul className="grid xl:grid-cols-4 lg:gap-x-[5%] gap-x-[10%] md:gap-y-[5%] gap-y-8 px-[10%] lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        <li className="bg-secondary-background flex flex-col h-150 md:h-87.5 sm:h-150">
          <div className="py-2 px-3 flex flex-col justify-between bg-[url(/assets/icons/top_car1.svg)] bg-no-repeat bg-cover bg-bottom flex-2">
            <div className="after:block after:bg-brand-accent after:w-[25%] after:h-1">
              <h3 className="uppercase text-2xl font-semibold">venom gt</h3>
            </div>
            <div className="grid grid-cols-2 gap-2 px-[10%]">
              <div className="flex flex-col">
                <h4 className="uppercase text-2xl font-semibold text-center">
                  720<span className="text-base font-normal"> hp</span>
                </h4>
              </div>
              <div className="flex flex-col items-center">
                <h4 className="uppercase text-2xl font-semibold">
                  3.1<span className="text-lg font-normal"> s</span>
                </h4>
                <p className="text-xs font-extralight text-secondary-text">
                  0-100 km/h
                </p>
              </div>
            </div>
          </div>
          <div>
            <button
              className="w-full font-secondary text-primary-text uppercase tracking-tighter font-normal text-[12px] px-3.5 py-2 bg-brand-accent hover:bg-brand-accent-dark"
              type="button"
            >
              details
            </button>
          </div>
        </li>
        <li className="bg-secondary-background flex flex-col h-150 md:h-87.5 sm:h-150">
          <div className="py-2 px-3 flex flex-col justify-between bg-[url(/assets/icons/top_car2.svg)] bg-no-repeat bg-cover bg-bottom flex-2">
            <div className="after:block after:bg-simply-accent after:w-[25%] after:h-1">
              <h3 className="uppercase text-2xl font-semibold">venom gt</h3>
            </div>
            <div className="grid grid-cols-2 gap-2 px-[10%]">
              <div className="flex flex-col">
                <h4 className="uppercase text-2xl font-semibold text-center">
                  720<span className="text-base font-normal"> hp</span>
                </h4>
              </div>
              <div className="flex flex-col items-center">
                <h4 className="uppercase text-2xl font-semibold">
                  3.1<span className="text-lg font-normal"> s</span>
                </h4>
                <p className="text-xs font-extralight text-secondary-text">
                  0-100 km/h
                </p>
              </div>
            </div>
          </div>
          <div>
            <button
              className="w-full font-secondary text-primary-text uppercase tracking-tighter font-normal text-[12px] px-3.5 py-2 bg-brand-accent hover:bg-brand-accent-dark"
              type="button"
            >
              details
            </button>
          </div>
        </li>
        <li className="bg-secondary-background flex flex-col h-150 md:h-87.5 sm:h-150">
          <div className="py-2 px-3 flex flex-col justify-between bg-[url(/assets/icons/top_car3.svg)] bg-no-repeat bg-cover bg-bottom flex-2">
            <div className="after:block after:bg-brand-accent after:w-[25%] after:h-1">
              <h3 className="uppercase text-2xl font-semibold">venom gt</h3>
            </div>
            <div className="grid grid-cols-2 gap-2 px-[10%]">
              <div className="flex flex-col">
                <h4 className="uppercase text-2xl font-semibold text-center">
                  720<span className="text-base font-normal"> hp</span>
                </h4>
              </div>
              <div className="flex flex-col items-center">
                <h4 className="uppercase text-2xl font-semibold">
                  3.1<span className="text-lg font-normal"> s</span>
                </h4>
                <p className="text-xs font-extralight text-secondary-text">
                  0-100 km/h
                </p>
              </div>
            </div>
          </div>
          <div>
            <button
              className="w-full font-secondary text-primary-text uppercase tracking-tighter font-normal text-[12px] px-3.5 py-2 bg-brand-accent hover:bg-brand-accent-dark"
              type="button"
            >
              details
            </button>
          </div>
        </li>
        <li className="bg-secondary-background flex flex-col h-150 md:h-87.5 sm:h-150">
          <div className="py-2 px-3 flex flex-col justify-between bg-[url(/assets/icons/top_car4.svg)] bg-no-repeat bg-cover bg-bottom flex-2">
            <div className="after:block after:bg-simply-accent after:w-[25%] after:h-1">
              <h3 className="uppercase text-2xl font-semibold">venom gt</h3>
            </div>
            <div className="grid grid-cols-2 gap-2 px-[10%]">
              <div className="flex flex-col">
                <h4 className="uppercase text-2xl font-semibold text-center">
                  720<span className="text-base font-normal"> hp</span>
                </h4>
              </div>
              <div className="flex flex-col items-center">
                <h4 className="uppercase text-2xl font-semibold">
                  3.1<span className="text-lg font-normal"> s</span>
                </h4>
                <p className="text-xs font-extralight text-secondary-text">
                  0-100 km/h
                </p>
              </div>
            </div>
          </div>
          <div>
            <button
              className="w-full font-secondary text-primary-text uppercase tracking-tighter font-normal text-[12px] px-3.5 py-2 bg-brand-accent hover:bg-brand-accent-dark"
              type="button"
            >
              details
            </button>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Top;
