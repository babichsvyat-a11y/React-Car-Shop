const Poster = () => {
  return (
    <section className="">
      <div className="bg-[url(/assets/icons/audi.svg)] bg-no-repeat bg-cover h-120 content-center">
        <div className="flex flex-col gap-3 max-w-90  my-10 ml-10">
          <h1 className="font-primary text-[60px] font-black text-primary-text uppercase leading-none">
            <span className=" text-simply-accent">unleash</span> the speed
          </h1>
          <h5 className="font-secondary text-primary-text uppercase tracking-tighter font-light text-[14px]">
            find your dream sports car
          </h5>
          <div>
            <button
              className=" font-secondary text-primary-text uppercase tracking-tighter font-light text-[12px] px-3.5 py-1.5 bg-brand-accent hover:bg-simply-accent-dark border-2 border-brand-accent hover:border-simply-accent rounded-sm"
              type="button"
            >
              view inventory
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Poster;
