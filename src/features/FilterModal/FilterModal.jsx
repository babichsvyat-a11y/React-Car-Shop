import { useState } from "react";
import totalAuto from "@/db";
import BrandLogo from "@/enteties/BrandLogo";

const FilterModal = () => {
  const [classFilter, setFilterClass] = useState("hidden");
  const [classFilterBtn, setFilterClassBtn] = useState("hidden");
  const [classFilterGroup, setFilterClassGroup] = useState("hidden");
  const [filterAuto, setFilterAuto] = useState(totalAuto);

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
      setFilterAuto(filterAuto.filter((auto) => auto.style === "lap"));
    } else if (type === "drag") {
      setFilterAuto(filterAuto.filter((auto) => auto.style === "drag"));
    } else if (type === "rally") {
      setFilterAuto(filterAuto.filter((auto) => auto.style === "rally"));
    }
    setFilterClassGroup("");
    setFilterClassBtn("hidden");
  }
  return (
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

          <div className="flex flex-wrap flex-row"></div>
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
  );
};

export default FilterModal;

// <ul>
//   {filterAuto.map((auto) => (
//     <BrandLogo key={auto.id} {...auto} />
//   ))}
// </ul>
