const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__box--left">
          <div className="logo">
            <a className="logo__link link" href="/">
              Fire <span className="text__accent--brand">Wheel</span>
            </a>
          </div>
          <p className="footer__text">
            Code is like DNA, but spun from our thoughts, desires and dreams
          </p>
        </div>
        <div className="footer__box--right">
          <nav className="footer__nav nav">
            <ul className="nav__list list">
              <li className="nav__item list__item">
                <a className="nav__link link " href="#">
                  <button className="nav__button button__nav" type="button">
                    GitHub
                  </button>
                </a>
              </li>
              <li className="nav__item list__item">
                <a className="nav__link link " href="#">
                  <button className="nav__button button__nav" type="button">
                    LinkedIn
                  </button>
                </a>
              </li>
              <li className="nav__item list__item">
                <a className="nav__link link " href="#">
                  <button className="nav__button button__nav" type="button">
                    Instagram
                  </button>
                </a>
              </li>
            </ul>
          </nav>

          <p class="footer__confidition">
            &copy; 2026 RunDNA. All rights reserved. Private Policy
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
