import { useState } from "react";
import totalAuto from "@/db";
import CarList from "@/features/CarList";
// import { FilterModal } from "@/features/FilterModal";

const Catalog = () => {
  const [searchAuto, setSearchAuto] = useState("");

  return (
    <main className="text-primary-text font-secondary bg-primary-background bg-fixed bg-no-repeat bg-cover relative min-h-dvh">
      <div className="backdrop-blur-xs">
        <h1 className="font-primary text-6xl font-black text-primary-text uppercase leading-none pt-22 text-center">
          The Vault
        </h1>
        <section className="text-primary-text grid grid-cols-5 lg:grid-cols-4 px-[10%] py-10 gap-8 sticky top-5 z-10">
          <div className="content-center hidden md:block">
            <p className="font-secondary text-primary-text uppercase tracking-tighter font-semibold lg:text-start text-center lg:text-lg text-sm">
              the roster :
              <span className="text-brand-accent lg:text-xl text-base font-bold">
                {" " + totalAuto.length}
              </span>
            </p>
          </div>
          <div className="lg:col-span-2 md:col-span-3 col-span-4">
            <form
              className="w-full"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <label
                htmlFor="search"
                className="block mb-2.5 text-sm font-medium sr-only "
              >
                lock it in
              </label>
              <div className="relative w-full">
                <input
                  type="search"
                  id="search"
                  className=" [&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-decoration]:appearance-none bg-secondary-text/60  outline-none block w-full p-3 ps-9 border-2 border-secondary-text text-base rounded-4xl hover:border-brand-accent focus:border-brand-accent-dark group focus:scale-101 transition delay-100 duration-200 easy-in"
                  placeholder="Lock it in"
                  value={searchAuto}
                  onChange={(e) => {
                    setSearchAuto(e.target.value);
                  }}
                />
                <button
                  className="group-focus:scale-101 transition delay-100 duration-200 easy-in absolute top-0 right-0 text-base py-3 px-5 border-2 border-transparent hover:bg-brand-accent/10 rounded-r-4xl"
                  type="submit"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
          <div className="flex xl:justify-end justify-start">
            <button
              // onClick={goFilterModal}
              className="  xl:px-6 xl:py-2 p-0 rounded-[50%] bg-brand-accent hover:bg-brand-accent-dark hover:scale-105 xl:rounded-md transition delay-100 duration-200 easy-in cursor-pointer"
              type="button"
              id="filterBtn"
            >
              <p className="font-secondary text-second-text text-lg w-max text-primary-text uppercase tracking-tighter font-semibold text-normal hidden xl:block">
                fine-tune your search
              </p>

              <div className="relative w-12 h-12 block xl:hidden">
                <div className="bg-primary-text block w-2 h-0.5 absolute right-5 top-9.25"></div>
                <div className="bg-primary-text block w-2 h-0.5 absolute rotate-90 left-4.25 top-8.25"></div>
                <div className="bg-primary-text block w-2 h-0.5 absolute rotate-90 right-4.25 top-8.25"></div>
                <div className="bg-primary-text block w-2 h-0.5 absolute right-5 top-7.25"></div>
                <div className="bg-primary-text block w-4 h-0.5 absolute rotate-50 left-2.25 top-5.75"></div>
                <div className="bg-primary-text block w-4 h-0.5 absolute rotate-130 right-2.25 top-5.75"></div>
                <div className="bg-primary-text block w-6.5 h-0.5 absolute right-2.75 top-4.25"></div>
                <div className="bg-primary-text block w-2 h-0.5 absolute rotate-90 left-2 top-3.5"></div>
                <div className="bg-primary-text block w-2 h-0.5 absolute rotate-90 right-2 top-3.5"></div>
                <div className="bg-primary-text block w-6.5 h-0.5 absolute right-2.75 top-2.75"></div>
              </div>
            </button>
          </div>
          {/* <FilterModal /> */}
        </section>
        <section className="flex-1">
          <CarList searchAuto={searchAuto} />
        </section>
      </div>
    </main>
  );
};

export default Catalog;
