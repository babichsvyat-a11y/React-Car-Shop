import Info from "./info";
import Poster from "./poster";
import Top from "./top";

const Main = () => {
  return (
    <main>
      <Poster />
      <Top />
      <Info />
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
