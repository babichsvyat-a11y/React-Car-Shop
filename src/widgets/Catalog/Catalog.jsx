import totalAuto from "@/db";
import { useState } from "react";

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
    <main className="text-primary-text font-secondary bg-[url(@/shared/assets/img/mountain.svg)] bg-fixed bg-no-repeat bg-cover relative">
      <div className="backdrop-blur-xs">
        <h1 className="font-primary text-6xl font-black text-primary-text uppercase leading-none pt-22 text-center">
          The Vault
        </h1>
        <section className="text-primary-text flex flex-row lg:justify-between justify-center px-[10%] py-10 flex-wrap gap-x-4 gap-y-4 items-center sticky top-5 z-10">
          <div className="">
            <p className="font-secondary text-primary-text uppercase tracking-tighter font-semibold text-lg hidden md:block">
              the roster :{" "}
              <span className="text-brand-accent"> {totalAuto.length} </span>
            </p>
          </div>
          <div className="xl:w-[50%] lg:w-[45%] md:w-[60%] w-[70%]">
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
                      {filterAuto
                        .filter(
                          (auto, brand) =>
                            findAuto((a) => a.brand === auto.brand) === brand,
                        )
                        .map((auto) => {
                          return `<option>${auto.brand}</option>`;
                        })}
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
                      {filterAuto.map((auto) => {
                        return <option>{auto.powertrain.type}</option>;
                      })}
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
          <ul className="grid xl:grid-cols-4 gap-[2vw] px-[10%] lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 pb-10">
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
                  <h3 className="uppercase text-2xl font-semibold">
                    amg c 63 s
                  </h3>
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
      </div>
    </main>
  );
};

export default Catalog;
