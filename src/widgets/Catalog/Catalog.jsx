import totalAuto from "@/db";

const Catalog = () => {
  // const searchCar = ;
  return (
    <main className="text-primary-text font-secondary">
      <h1 className="font-primary text-6xl font-black text-primary-text uppercase leading-none pt-10 text-center">
        The Vault
      </h1>
      <section className="text-primary-text flex flex-row sm:justify-between justify-center px-[10%] py-10 flex-wrap gap-x-4 gap-y-4 items-center">
        <div className="">
          <p className="font-secondary text-primary-text uppercase tracking-tighter font-semibold text-lg">
            the roster :{" "}
            <span className="text-brand-accent"> {totalAuto.length} </span>
          </p>
        </div>
        <div className="xl:w-[50%] lg:w-[40%] md:w-[35%]">
          <form className="w-full">
            <label
              for="search"
              className="block mb-2.5 text-sm font-medium sr-only "
            >
              lock it in
            </label>
            <div className="relative w-full">
              <input
                type="search"
                id="search"
                className=" [&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-decoration]:appearance-none outline-none block w-full p-3 ps-9 border-2 border-secondary-text text-base rounded-4xl hover:border-brand-accent focus:border-brand-accent-dark focus:scale-101 transition delay-100 duration-200 easy-in"
                placeholder="Lock it in"
                required
              />
              <button
                className="absolute top-0 right-0 text-base py-3 px-5 border-2 border-transparent hover:bg-brand-accent/10 rounded-r-4xl transition delay-100 duration-200 easy-in"
                type="button"
              >
                Search
              </button>
            </div>
          </form>
        </div>
        <div className="">
          <button
            className="font-secondary text-second-text text-lg w-max text-primary-text uppercase tracking-tighter font-semibold text-normal px-8 py-2 bg-brand-accent hover:bg-brand-accent-dark hover:scale-105 rounded-md transition delay-100 duration-200 easy-in cursor-pointer"
            type="button"
          >
            fine-tune your search
          </button>
        </div>
      </section>
      <section>
        <ul className="grid xl:grid-cols-4 lg:gap-x-[5%] gap-x-[10%] gap-y-8 px-[10%] lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 pb-10">
          {totalAuto.map((auto, i) => {
            return (
              <li className="bg-secondary-background flex flex-col h-150 md:h-87.5 sm:h-150 md:brightness-60 md:hover:brightness-100 md:hover:scale-105 transition delay-100 duration-200 easy-in">
                <div className="py-2 px-3 flex flex-col justify-between bg-[url(@/shared/assets/img/top_car1.svg)] bg-no-repeat bg-cover bg-bottom flex-2">
                  <div
                    className={
                      i % 2
                        ? "after:bg-simply-accent after:block after:w-[25%] after:h-1"
                        : "after:block after:w-[25%] after:h-1 after:bg-brand-accent"
                    }
                  >
                    <h3 className="uppercase text-2xl font-semibold">
                      {auto.name}
                    </h3>
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
                <div>
                  <button
                    className="w-full font-secondary text-primary-text uppercase tracking-tighter font-normal text-[12px] px-3.5 py-2 bg-brand-accent hover:bg-brand-accent-dark transition delay-100 duration-200 easy-in cursor-pointer"
                    type="button"
                  >
                    details
                  </button>
                </div>
              </li>
            );
          })}
          <li className="bg-secondary-background flex flex-col h-150 md:h-87.5 sm:h-150 md:brightness-60 md:hover:brightness-100 md:hover:scale-105 transition delay-100 duration-200 easy-in">
            <div className="py-2 px-3 flex flex-col justify-between bg-[url(@/shared/assets/img/top_car1.svg)] bg-no-repeat bg-cover bg-bottom flex-2">
              <div className="after:block after:bg-brand-accent after:w-[25%] after:h-1">
                <h3 className="uppercase text-2xl font-semibold">amg c 63 s</h3>
              </div>
              <div className="grid grid-cols-2 gap-2 px-[10%] backdrop-brightness-50">
                <div className="flex flex-col">
                  <h4 className="uppercase text-2xl font-semibold text-center">
                    510<span className="text-base font-normal"> hp</span>
                  </h4>
                </div>
                <div className="flex flex-col items-center">
                  <h4 className="uppercase text-2xl font-semibold">
                    3.9<span className="text-lg font-normal"> s</span>
                  </h4>
                  <p className="text-xs font-extralight text-secondary-text">
                    0-100 km/h
                  </p>
                </div>
              </div>
            </div>
            <div>
              <button
                className="w-full font-secondary text-primary-text uppercase tracking-tighter font-normal text-[12px] px-3.5 py-2 bg-brand-accent hover:bg-brand-accent-dark transition delay-100 duration-200 easy-in cursor-pointer"
                type="button"
              >
                details
              </button>
            </div>
          </li>
          <li className="bg-secondary-background flex flex-col h-150 md:h-87.5 sm:h-150 md:brightness-60 md:hover:brightness-100 md:hover:scale-105 transition delay-100 duration-200 easy-in">
            <div className="py-2 px-3 flex flex-col justify-between bg-[url(@/shared/assets/img/top_car2.svg)] bg-no-repeat bg-cover bg-bottom flex-2">
              <div className="after:block after:bg-simply-accent after:w-[25%] after:h-1">
                <h3 className="uppercase text-2xl font-semibold">
                  srt demon 170
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-2 px-[10%] backdrop-brightness-50">
                <div className="flex flex-col">
                  <h4 className="uppercase text-2xl font-semibold text-center">
                    1025<span className="text-base font-normal"> hp</span>
                  </h4>
                </div>
                <div className="flex flex-col items-center">
                  <h4 className="uppercase text-2xl font-semibold">
                    1.7<span className="text-lg font-normal"> s</span>
                  </h4>
                  <p className="text-xs font-extralight text-secondary-text">
                    0-100 km/h
                  </p>
                </div>
              </div>
            </div>
            <div>
              <button
                className="w-full font-secondary text-primary-text uppercase tracking-tighter font-normal text-[12px] px-3.5 py-2 bg-brand-accent hover:bg-brand-accent-dark transition delay-100 duration-200 easy-in cursor-pointer"
                type="button"
              >
                details
              </button>
            </div>
          </li>
          <li className="bg-secondary-background flex flex-col h-150 md:h-87.5 sm:h-150 md:brightness-60 md:hover:brightness-100 md:hover:scale-105 transition delay-100 duration-200 easy-in">
            <div className="py-2 px-3 flex flex-col justify-between bg-[url(@/shared/assets/img/top_car3.svg)] bg-no-repeat bg-cover bg-bottom flex-2">
              <div className="after:block after:bg-brand-accent after:w-[25%] after:h-1">
                <h3 className="uppercase text-2xl font-semibold">
                  r8 v10 type 4s
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-2 px-[10%] backdrop-brightness-50">
                <div className="flex flex-col">
                  <h4 className="uppercase text-2xl font-semibold text-center">
                    620<span className="text-base font-normal"> hp</span>
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
                className="w-full font-secondary text-primary-text uppercase tracking-tighter font-normal text-[12px] px-3.5 py-2 bg-brand-accent hover:bg-brand-accent-dark transition delay-100 duration-200 easy-in cursor-pointer"
                type="button"
              >
                details
              </button>
            </div>
          </li>
          <li className="bg-secondary-background flex flex-col h-150 md:h-87.5 sm:h-150 md:brightness-60 md:hover:brightness-100 md:hover:scale-105 transition delay-100 duration-200 easy-in">
            <div className="py-2 px-3 flex flex-col justify-between bg-[url(@/shared/assets/img/top_car4.svg)] bg-no-repeat bg-cover bg-bottom flex-2">
              <div className="after:block after:bg-simply-accent after:w-[25%] after:h-1">
                <h3 className="uppercase text-2xl font-semibold">
                  chiron super sport
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-2 px-[10%] backdrop-brightness-50">
                <div className="flex flex-col">
                  <h4 className="uppercase text-2xl font-semibold text-center">
                    1600<span className="text-base font-normal"> hp</span>
                  </h4>
                </div>
                <div className="flex flex-col items-center">
                  <h4 className="uppercase text-2xl font-semibold">
                    2.4<span className="text-lg font-normal"> s</span>
                  </h4>
                  <p className="text-xs font-extralight text-secondary-text">
                    0-100 km/h
                  </p>
                </div>
              </div>
            </div>
            <div>
              <button
                className="w-full font-secondary text-primary-text uppercase tracking-tighter font-normal text-[12px] px-3.5 py-2 bg-brand-accent hover:bg-brand-accent-dark transition delay-100 duration-200 easy-in cursor-pointer"
                type="button"
              >
                details
              </button>
            </div>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default Catalog;
