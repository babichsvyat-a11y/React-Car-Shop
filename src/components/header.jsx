const Header = () => {
  return (
    <header className="header">
      <div className="header__container container">
        <div className="logo">
          <a className="logo__link link" href="/">
            Fire <span className="text__accent--brand">Wheel</span>
          </a>
        </div>
        <nav className="header__nav nav">
          <ul className="nav__list list">
            <li className="nav__item list__item">
              <a className="nav__link link" href="#">
                <button className="nav__button button__nav" type="button">
                  Inventory
                </button>
              </a>
            </li>
            <li className="nav__item list__item">
              <a className="nav__link link" href="#">
                <button className="nav__button button__nav" type="button">
                  Admin
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
