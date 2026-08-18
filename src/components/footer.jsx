const Footer = () => {
  return (
    <footer className=" text-primary-text font-medium text-sm font-secondary border-t-brand-accent border-t-4">
      <div className="flex flex-row justify-between px-[10%] py-10">
        <div className="flex flex-col gap-5">
          <div className="">
            <a
              className="font-primary text-[32px] font-black italic text-brand-accent"
              href="/"
            >
              Fire<span className="text-primary-text">Wheel</span>
            </a>
          </div>
          <p className="italic font-light text-secondary-text">
            "Code is like DNA, but spun from our thoughts, desires and dreams"
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <nav className="">
            <ul className="flex flex-col gap-2 text-sm">
              <li className="">
                <a className="" href="https://github.com/babichsvyat-a11y">
                  <button
                    className="hover:text-brand-accent-dark transition delay-100 duration-200 easy-in cursor-pointer"
                    type="button"
                  >
                    GitHub
                  </button>
                </a>
              </li>
              <li className="">
                <a
                  className=""
                  href="https://www.linkedin.com/in/svyatoslav-babych-72a3a83a0/"
                >
                  <button
                    className="hover:text-brand-accent-dark transition delay-100 duration-200 easy-in cursor-pointer"
                    type="button"
                  >
                    LinkedIn
                  </button>
                </a>
              </li>
              <li className="">
                <a className="" href="https://www.instagram.com/da.baby4_/">
                  <button
                    className="hover:text-brand-accent-dark transition delay-100 duration-200 easy-in cursor-pointer"
                    type="button"
                  >
                    Instagram
                  </button>
                </a>
              </li>
            </ul>
          </nav>

          <p class="text-secondary-text text-sm">
            &copy; 2026 RunDNA. All rights reserved. Private Policy
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
