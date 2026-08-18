const PosterSection = () => {
  return (
    <section className="">
      <div className="bg-[url(@/shared/assets/gif/main.gif)] bg-no-repeat bg-cover bg-center border-y-4 border-brand-accent">
        <div className="flex flex-col gap-3 max-w-110  py-[10%] ml-[10%] ">
          <h1 className="font-primary text-8xl font-black text-primary-text uppercase leading-none">
            <span className=" text-simply-accent">unleash</span> the speed
          </h1>
          <h5 className="font-secondary text-primary-text uppercase tracking-tighter font-semibold text-xl">
            find your dream sports car
          </h5>
          <div className="">
            <a href="#contactForm">
              <button
                className="w-max font-secondary text-primary-text uppercase tracking-tighter font-semibold text-normal px-8 py-2 bg-brand-accent hover:bg-brand-accent-dark hover:scale-110 rounded-md transition delay-100 duration-200 easy-in cursor-pointer"
                type="button"
              >
                test drive !
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PosterSection;
