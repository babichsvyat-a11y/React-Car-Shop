const Header = () => {
  return (
    <header className="border border-b-border-gray fixed z-20 bg-primary-background w-full">
      <div className="flex flex-row px-[5%] justify-between">
        <div className="">
          <a
            className="font-primary text-[32px] font-black italic text-brand-accent"
            href="/"
          >
            Fire<span className="text-primary-text">Wheel</span>
          </a>
        </div>
        <nav className="flex">
          <ul className="flex flex-row gap-[10%] text-primary-text font-semibold text-sm font-secondary">
            <li className="flex block-full">
              <a className="block content-center" href="#">
                <button
                  className="block-full px-4 hover:bg-border-gray uppercase hover:text-brand-accent-dark transition delay-100 duration-200 easy-in cursor-pointer"
                  type="button"
                >
                  catalog
                </button>
              </a>
            </li>
            <li className="flex block-full">
              <a className="block content-center" href="#">
                <button
                  className="block-full px-4 hover:bg-border-gray uppercase hover:text-brand-accent-dark transition delay-100 duration-200 easy-in cursor-pointer"
                  type="button"
                >
                  cart
                </button>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
