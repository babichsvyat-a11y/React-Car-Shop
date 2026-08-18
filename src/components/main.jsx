import Poster from "./poster";
import Top from "./top";

const Main = () => {
  return (
    <main>
      <Poster />
      <Top />
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
  );
};

export default Main;
