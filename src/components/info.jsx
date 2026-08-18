const Info = () => {
  return (
    <section className="">
      <h2 className="px-[10%] py-10 uppercase text-3xl font-semibold text-center text-primary-text font-secondary">
        our advantages
      </h2>
      <ul className="font-secondary text-primary-text flex flex-row gap-2 flex-wrap justify-center">
        <li className="flex flex-row gap-2 p-5 bg-secondary-background">
          <div className="flex flex-row">
            <img
              className=""
              src="./assets/icons/plans.svg"
              alt="image"
              width={40}
              height={40}
            />
          </div>
          <div className="">
            <h4 className="uppercase text-xl font-semibold">
              financing options
            </h4>
            <p className="text-sm font-normal text-secondary-text">
              Flexible Playment Plans
            </p>
          </div>
        </li>
        <li className="flex flex-row gap-2 p-5 bg-secondary-background">
          <div className="flex flex-row">
            <img
              className=""
              src="./assets/icons/intrade.svg"
              alt="image"
              width={40}
              height={40}
            />
          </div>
          <div className="">
            <h4 className="uppercase text-xl font-semibold">
              trade-in program
            </h4>
            <p className="text-sm font-normal text-secondary-text">
              Get the Best Value
            </p>
          </div>
        </li>
        <li className="flex flex-row gap-2 p-5 bg-secondary-background">
          <div className="flex flex-row">
            <img
              className=""
              src="./assets/icons/coment.svg"
              alt="image"
              width={40}
              height={40}
            />
          </div>
          <div className="">
            <h4 className="uppercase text-xl font-semibold">
              customer reviewes
            </h4>
            <p className="text-sm font-normal text-secondary-text">
              5-Star Rated Service
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Info;
