import totalAuto from "@/db";
import { useState } from "react";
import CarList from "@/features/CarList/CarList";

const Catalog = () => {
  const [classFilter, setFilterClass] = useState("hidden");
  const [classFilterBtn, setFilterClassBtn] = useState("hidden");
  const [classFilterGroup, setFilterClassGroup] = useState("hidden");
  const [filterAuto, setFilterAuto] = useState("");

  function errorFilter() {
    return (
      <div>
        <img
          src="src\shared\assets\icons\error.svg"
          alt="error image"
          width={160}
          height={160}
        />
        <h2
          className="font-primary
                text-3xl
                font-black
                text-primary-text
                uppercase
                leading-none
                text-center"
        >
          oops! Looks like we don't have a car like that
        </h2>
      </div>
    );
  }

  function goFilterModal() {
    setFilterClass("");
    setFilterClassBtn("");
    setFilterClassGroup("hidden");
  }

  function backFilterModal() {
    setFilterClass("hidden");
    setFilterClassGroup("hidden");
    setFilterClassBtn("hidden");
  }

  function goFilterStyle(type) {
    if (type === "lap") {
      setFilterAuto(totalAuto.filter((auto) => auto.style === "lap"));
    } else if (type === "drag") {
      setFilterAuto(totalAuto.filter((auto) => auto.style === "drag"));
    } else if (type === "rally") {
      setFilterAuto(totalAuto.filter((auto) => auto.style === "rally"));
    }
    setFilterClassGroup("");
    setFilterClassBtn("hidden");
  }

  // const searchCar = ;
  return (
    <main className="text-primary-text font-secondary bg-primary-background bg-fixed bg-no-repeat bg-cover relative">
      <div className="backdrop-blur-xs">
        <h1 className="font-primary text-6xl font-black text-primary-text uppercase leading-none pt-22 text-center">
          The Vault
        </h1>
        <section className="text-primary-text flex flex-row lg:justify-between justify-center px-[10%] py-10 flex-wrap gap-x-4 gap-y-4 items-center sticky top-5 z-10">
          <div className="">
            <p className="font-secondary text-primary-text uppercase tracking-tighter font-semibold text-lg hidden md:block">
              the roster :{" "}
              <span className="text-brand-accent text-xl font-bold">
                {totalAuto.length}{" "}
              </span>
            </p>
          </div>
          <div className="xl:w-[50%] lg:w-[45%] md:w-[60%] w-[70%]">
            <form className="w-full">
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
                  className=" [&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-decoration]:appearance-none bg-secondary-text/60  outline-none block w-full p-3 ps-9 border-2 border-secondary-text text-base rounded-4xl hover:border-brand-accent focus:border-brand-accent-dark focus:scale-101 transition delay-100 duration-200 easy-in"
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
              onClick={goFilterModal}
              className="mt-2 font-secondary text-second-text text-lg w-max text-primary-text uppercase tracking-tighter font-semibold text-normal md:px-8 md:py-2 p-0 rounded-[50%] bg-brand-accent hover:bg-brand-accent-dark hover:scale-105 md:rounded-md transition delay-100 duration-200 easy-in cursor-pointer"
              type="button"
              id="filterBtn"
            >
              {window.innerWidth > 768 ? (
                "fine-tune your search"
              ) : (
                <div className="relative w-12 h-12">
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
              )}
            </button>
          </div>
          <div
            id="filterModal"
            className={`${classFilter} +" absolute bg-secondary-background right-[10%] top-26 z-10 w-[80%] rounded-2xl shadow-2xl "`}
          >
            <div className=" relative p-6  h-max min-h-[45vh]   flex flex-row gap-6 flex-wrap ">
              <div className={`${classFilterGroup} +" w-full "`}>
                <h2
                  className="font-primary
                text-3xl
                font-black
                text-primary-text
                uppercase
                leading-none
                text-center"
                >
                  what car are you drooling over?
                </h2>
                <form className="flex flex-col md:flex-row">
                  <div className=" flex flex-col">
                    <label
                      className="font-primary
                text-xl
                font-black
                text-brand-accent-dark
                uppercase
                leading-none
                text-center"
                      htmlFor="brand"
                    >
                      brand
                    </label>
                    <select
                      className=" bg-primary-text/10 appearance-none outline-0 focus:outline-brand-accent-dark focus:outline-1 hover:outline-1 px-16 py-2 font-secondary text-sm font-base text-secondary-text uppercase leading-none text-center rounded-2xl cursor-pointer hover:outline-brand-accent-dark"
                      name="brand"
                      id="brand"
                    >
                      {/* {filterAuto
                        .filter(
                          (auto, brand) =>
                            findAuto((a) => a.brand === auto.brand) === brand,
                        )
                        .map((auto) => {
                          return `<option>${auto.brand}</option>`;
                        })} */}
                    </select>
                    <label
                      className="font-primary
                text-xl
                font-black
                text-brand-accent-dark
                uppercase
                leading-none
                text-center"
                      htmlFor="engine"
                    >
                      engine type
                    </label>
                    <select
                      className=" bg-primary-text/10 appearance-none outline-0 focus:outline-brand-accent-dark focus:outline-1 hover:outline-1 px-16 py-2 font-secondary text-sm font-base text-secondary-text uppercase leading-none text-center rounded-2xl cursor-pointer hover:outline-brand-accent-dark"
                      name="engine"
                      id="engine"
                    >
                      {/* {filterAuto.map((auto) => {
                        return <option>{auto.powertrain.type}</option>;
                      })} */}
                    </select>
                  </div>
                </form>
              </div>
              <button
                className={`${classFilterBtn} + "flex flex-col flex-1 min-w-40 hover:bg-secondary-text/20 rounded-2xl transition delay-100 duration-200 easy-in cursor-pointer"`}
                onClick={() => goFilterStyle("lap")}
              >
                <img
                  className="m-auto pb-8"
                  src="src\shared\assets\icons\lap.svg"
                  alt="lap image"
                  width={160}
                  height={160}
                />
                <h2
                  className="font-primary
                text-3xl
                font-black
                text-primary-text
                uppercase
                leading-none
                text-center"
                >
                  Circuit racing car
                </h2>
              </button>
              <button
                className={`${classFilterBtn} + "flex flex-col flex-1 min-w-40 hover:bg-secondary-text/20 rounded-2xl transition delay-100 duration-200 easy-in cursor-pointer"`}
                onClick={() => goFilterStyle("drag")}
              >
                <img
                  className="m-auto pb-8"
                  src="src\shared\assets\icons\drag.svg"
                  alt="lap image"
                  width={160}
                  height={160}
                />
                <h2
                  className="font-primary
                text-3xl
                font-black
                text-primary-text
                uppercase
                leading-none
                text-center"
                >
                  Drag racing car
                </h2>
              </button>
              <button
                className={`${classFilterBtn} + "flex flex-col flex-1 min-w-40 hover:bg-secondary-text/20 rounded-2xl transition delay-100 duration-200 easy-in cursor-pointer"`}
                onClick={() => goFilterStyle("rally")}
              >
                <img
                  className="m-auto pb-8"
                  src="src\shared\assets\icons\rally.svg"
                  alt="lap image"
                  width={160}
                  height={160}
                />
                <h2
                  className="font-primary
                text-3xl
                font-black
                text-primary-text
                uppercase
                leading-none
                text-center"
                >
                  Rally racing car
                </h2>
              </button>
            </div>
            <button
              className="absolute top-3 right-3.25 h-10 w-10 rounded-full hover:bg-secondary-text/20 group transition delay-100 duration-200 easy-in cursor-pointer"
              onClick={backFilterModal}
            >
              <div className="relative">
                <div className="group-hover:bg-secondary-background absolute bg-secondary-text w-1 h-8 -bottom-4 right-4.5 rotate-45 transition delay-100 duration-200 easy-in cursor-pointer"></div>
                <div className="group-hover:bg-secondary-background absolute bg-secondary-text w-1 h-8 -bottom-4 right-4.5 rotate-135 transition delay-100 duration-200 easy-in cursor-pointer"></div>
              </div>
            </button>
          </div>
        </section>
        <section>
          <CarList />
        </section>
      </div>
    </main>
  );
};

export default Catalog;
