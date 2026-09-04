import { useTheme } from "@/shared/hooks/useTheme";

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="border border-transparent dark:border-b-border-gray fixed z-20 dark:bg-primary-background w-full h-12 bg-light-bg">
      <div className="flex flex-row px-[5%] justify-between h-full">
        <div className="content-center">
          <a
            className="font-primary text-2xl sm:text-4xl font-black italic text-brand-accent"
            href="/"
          >
            Fire
            <span className="dark:text-primary-text text-primary-text">
              Wheel
            </span>
          </a>
        </div>
        <div className="flex flex-row gap-2 ">
          <nav className="flex">
            <ul className="flex flex-row gap-2 dark:text-primary-text text-light-accent font-semibold text-sm font-secondary">
              <li className="flex block-full">
                <a className="block content-center" href="#">
                  <button
                    className="block-full px-4 hover:bg-border-gray/20 uppercase hover:text-brand-accent-dark transition delay-100 duration-200 easy-in cursor-pointer"
                    type="button"
                  >
                    catalog
                  </button>
                </a>
              </li>
              <li className="flex block-full">
                <a className="block content-center" href="#">
                  <button
                    className="block-full px-4 hover:bg-border-gray/20 uppercase hover:text-brand-accent-dark transition delay-100 duration-200 easy-in cursor-pointer"
                    type="button"
                  >
                    cart
                  </button>
                </a>
              </li>
            </ul>
          </nav>
          <button
            className="block hover:bg-border-gray/20 transition delay-100 duration-200 easy-in cursor-pointer px-4"
            onClick={toggleTheme}
          >
            <img
              src="src\shared\assets\icons\dark_theme.svg"
              className="min-h-8 min-w-8 dark:hidden block"
              alt="dark theme img"
              width={32}
              height={32}
            />
            <img
              src="src\shared\assets\icons\light_theme.svg"
              className="min-h-8 min-w-8 hidden dark:block"
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
