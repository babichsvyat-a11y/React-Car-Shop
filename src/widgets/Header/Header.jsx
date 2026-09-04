import { useTheme } from "@/shared/hooks/useTheme";

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="border border-b-border-gray fixed z-20 dark:bg-primary-background w-full h-12 bg-primary-text">
      <div className="flex flex-row px-[5%] justify-between h-full">
        <div className="content-center">
          <a
            className="font-primary text-2xl sm:text-4xl font-black italic text-brand-accent"
            href="/"
          >
            Fire<span className="text-primary-text">Wheel</span>
          </a>
        </div>
        <div className="flex flex-row gap-2 ">
          <nav className="flex">
            <ul className="flex flex-row gap-2 text-primary-text font-semibold text-sm font-secondary">
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
          <button className="block" onClick={toggleTheme}>
            <img
              src="src\shared\assets\icons\dark_theme.svg"
              className="min-h-8 min-w-8 hidden dark:block"
              alt="dark theme img"
              width={32}
              height={32}
            />
            <img
              src="src\shared\assets\icons\light_theme.svg"
              className="min-h-8 min-w-8 dark:hidden block"
              alt="dark theme img"
              width={32}
              height={32}
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
