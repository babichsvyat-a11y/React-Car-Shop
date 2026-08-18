const Contact = () => {
  return (
    <section className="text-primary-text font-secondary">
      <h2 className="px-[10%] py-10 uppercase text-3xl font-semibold text-center">
        book a test drive
      </h2>
      <div className="flex flex-row gap-10 px-[5%] py-10 mx-[15%] bg-secondary-background justify-center">
        <div className="flex flex-col gap-4">
          <h3 className="uppercase text-xl font-semibold text-center">
            the best environment for your emotions
          </h3>
          <ul className=" text-xs flex flex-col gap-4">
            <li className="flex flex-row gap-2">
              <img
                className=""
                src="./assets/icons/wheel.svg"
                alt="image"
                width={20}
                height={20}
              />
              The fastest cars on the market available in stock
            </li>
            <li className="flex flex-row gap-2">
              <img
                className=""
                src="./assets/icons/wheel.svg"
                alt="image"
                width={20}
                height={20}
              />
              Circuit, drag, and rally tracks are available for test drives
            </li>
            <li className="flex flex-row gap-2">
              <img
                className=""
                src="./assets/icons/wheel.svg"
                alt="image"
                width={20}
                height={20}
              />
              Solo test drives for experienced drivers
            </li>
          </ul>
        </div>
        <div className="">
          <form className="flex flex-col gap-4" action="" method="get">
            <h3 className="uppercase text-xl font-semibold text-center">
              Share your contact info
            </h3>
            <p className="text-xs text-center">Your car is ready for you !!</p>
            <input
              className="bg-white border-simply-accent-light border-2 rounded-xl text-secondary-text font-secondary text-base pl-2"
              name="user_name"
              placeholder="Your name"
              type="text"
            />
            <input
              className="bg-white border-simply-accent-light border-2 rounded-xl text-secondary-text font-secondary text-base pl-2"
              name=" user_tel"
              placeholder="Your number"
              type="tel"
            />

            <button
              className="font-secondary text-primary-text uppercase tracking-tighter font-semibold text-[12px] px-3.5 py-2 bg-brand-accent hover:bg-brand-accent-dark  rounded-md"
              type="submit"
            >
              start your engine, chief !
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
