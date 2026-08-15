const Header = () => {
  return (
    <header className="border border-b-border-gray">
      <div className="flex flex-row px-16 justify-between">
        <div className="">
          <a
            className="font-primary text-[32px] font-black italic text-brand-accent"
            href="/"
          >
            Fire<span className="text-primary-text">Wheel</span>
          </a>
        </div>
        <nav className="flex">
          <ul className="flex flex-row gap-8 text-primary-text font-medium text-sm font-secondary">
            <li className="flex block-full">
              <a className="block content-center" href="#">
                <button
                  className="block-full px-4 hover:bg-border-gray"
                  type="button"
                >
                  Features
                </button>
              </a>
            </li>
            <li className="flex block-full">
              <a className="block content-center" href="#">
                <button
                  className="block-full px-4 hover:bg-border-gray"
                  type="button"
                >
                  Cart
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
