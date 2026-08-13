import Header from "./header";

const Shop = () => {
  return (
    <div className="shop">
      <Header />
      <main>
        <section className="hero">
          <div className="hero__container container">
            <div className="hero__textbox">
              <h1 className="hero__title text__uppercase">
                <span className="text__accent--simply">unleash</span> the speed
              </h1>
              <h5 className="hero__text text__uppercase">
                find your dream sports car
              </h5>
              <button className="button__brand" type="button">
                view inventory
              </button>
            </div>
          </div>
        </section>
        <section className="top">
          <div className="top__container container">
            <h2 className="top__title">our top models</h2>
            <ul className="top__list list">
              <li className="card list__item">
                <div className="card__container">
                  <div className="card__title-box">
                    <h3 className="card__title text__uppercase">venom gt</h3>
                  </div>
                  <div className="card__info">
                    <div className="card__info--power">
                      <h4 className="card__info--power-text text__uppercase">
                        720<span className="text__small">hp</span>
                      </h4>
                    </div>
                    <div className="card__info--acsel">
                      <h4 className="card__info--acsel-time text__uppercase">
                        3.1<span className="text__small">s</span>
                      </h4>
                      <p className="card__info--acsel-text">0-100 km/h</p>
                    </div>
                  </div>
                </div>
                <button className="button__brand text__uppercase" type="button">
                  details
                </button>
              </li>
              <li className="card list__item">
                <div className="card__container">
                  <div className="card__title-box">
                    <h3 className="card__title text__uppercase">venom gt</h3>
                  </div>
                  <div className="card__info">
                    <div className="card__info--power">
                      <h4 className="card__info--power-text text__uppercase">
                        720<span className="text__small">hp</span>
                      </h4>
                    </div>
                    <div className="card__info--acsel">
                      <h4 className="card__info--acsel-time text__uppercase">
                        3.1<span className="text__small">s</span>
                      </h4>
                      <p className="card__info--acsel-text">0-100 km/h</p>
                    </div>
                  </div>
                </div>
                <button className="button__brand text__uppercase" type="button">
                  details
                </button>
              </li>
              <li className="card list__item">
                <div className="card__container">
                  <div className="card__title-box">
                    <h3 className="card__title text__uppercase">venom gt</h3>
                  </div>
                  <div className="card__info">
                    <div className="card__info--power">
                      <h4 className="card__info--power-text text__uppercase">
                        720<span className="text__small">hp</span>
                      </h4>
                    </div>
                    <div className="card__info--acsel">
                      <h4 className="card__info--acsel-time text__uppercase">
                        3.1<span className="text__small">s</span>
                      </h4>
                      <p className="card__info--acsel-text">0-100 km/h</p>
                    </div>
                  </div>
                </div>
                <button className="button__brand text__uppercase" type="button">
                  details
                </button>
              </li>
              <li className="card list__item">
                <div className="card__container">
                  <div className="card__title-box">
                    <h3 className="card__title text__uppercase">venom gt</h3>
                  </div>
                  <div className="card__info">
                    <div className="card__info--power">
                      <h4 className="card__info--power-text text__uppercase">
                        720<span className="text__small">hp</span>
                      </h4>
                    </div>
                    <div className="card__info--acsel">
                      <h4 className="card__info--acsel-time text__uppercase">
                        3.1<span className="text__small">s</span>
                      </h4>
                      <p className="card__info--acsel-text">0-100 km/h</p>
                    </div>
                  </div>
                </div>
                <button className="button__brand text__uppercase" type="button">
                  details
                </button>
              </li>
            </ul>
          </div>
        </section>
        <section className="info">
          <div className="info__container container">
            <ul className="info__list list">
              <li className="info-box list__item">
                <div className="info-box__container">
                  <img
                    className="info-box__img"
                    src="#"
                    alt="image"
                    width={40}
                    height={40}
                  />
                </div>
                <div className="info-box__texter">
                  <h4 className="info-box__title text__uppercase">
                    financing options
                  </h4>
                  <p className="info-box__text">Flexible Playment Plans</p>
                </div>
              </li>
              <li className="info-box list__item">
                <div className="info-box__container">
                  <img
                    className="info-box__img"
                    src="#"
                    alt="image"
                    width={40}
                    height={40}
                  />
                </div>
                <div className="info-box__texter">
                  <h4 className="info-box__title text__uppercase">
                    trade-in program
                  </h4>
                  <p className="info-box__text">Get the Best Value</p>
                </div>
              </li>
              <li className="info-box list__item">
                <div className="info-box__container">
                  <img
                    className="info-box__img"
                    src="#"
                    alt="image"
                    width={40}
                    height={40}
                  />
                </div>
                <div className="info-box__texter">
                  <h4 className="info-box__title text__uppercase">
                    customer reviewes
                  </h4>
                  <p className="info-box__text">5-Star Rated Service</p>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <section className="offers">
          <div className="offers__container container">
            <h2 className="offers__title text__uppercase">latest offers</h2>
            <div className="offers__img-box">
              <button className="button__brand text__uppercase" type="button">
                view offers
              </button>
            </div>
          </div>
        </section>
      </main>
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
    </div>
  );
};

export default Shop;
