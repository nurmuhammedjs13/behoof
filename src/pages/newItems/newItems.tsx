import { Link } from "react-router-dom";
import "../../pages/newItems/newItems.css";
import HeaderButtonChart from "../../assets/chart.png";
import img1 from "../../assets/2272131 1.png";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";

function NewItems() {
  return (
    <>
      <Header />
      <div className="newItems">
        <div className="container">
          <div className="newItems__cards">
            <h1 className="newItems-logo">Новые добавлённые товары</h1>
            <ul className="newItems__cards__card">
              <li className="newItems__cards__card-img">
                <img src={img1} alt="" />
              </li>
              <div className="newItems__cards__card__infos">
                <li className="newItems__cards__card__infos-text">
                  Умные часы
                </li>
                <li className="newItems__cards__card__infos-product">
                  Apple iPhone 13 Pro Max 256 ГБ серый
                </li>
                <div className="newItems__cards__card__infos__info">
                  <li className="newItems__cards__card__infos__info-price">
                    1100$
                  </li>
                  <div className="newItems__cards__card__infos__info__icons">
                    <input
                      className="icons-checkbox"
                      type="checkbox"
                      id="iconsCheckbox1"
                    />
                    <label
                      htmlFor="iconsCheckbox1"
                      className="icons-checkbox-label"
                    >
                      ♡
                    </label>

                    <Link
                      to={"/differences"}
                      className="newItems__cards__card__infos__info__icons-img"
                    >
                      <img src={HeaderButtonChart} alt="" />
                    </Link>
                  </div>
                </div>
              </div>
            </ul>
            <ul className="newItems__cards__card">
              <li className="newItems__cards__card-img">
                <img src={img1} alt="" />
              </li>
              <div className="newItems__cards__card__infos">
                <li className="newItems__cards__card__infos-text">
                  Умные часы
                </li>
                <li className="newItems__cards__card__infos-product">
                  Apple iPhone 13 Pro Max 256 ГБ серый
                </li>
                <div className="newItems__cards__card__infos__info">
                  <li className="newItems__cards__card__infos__info-price">
                    1100$
                  </li>
                  <div className="newItems__cards__card__infos__info__icons">
                    <input
                      className="icons-checkbox"
                      type="checkbox"
                      id="iconsCheckbox2"
                    />
                    <label
                      htmlFor="iconsCheckbox2"
                      className="icons-checkbox-label"
                    >
                      ♡
                    </label>

                    <Link
                      to={"/differences"}
                      className="newItems__cards__card__infos__info__icons-img"
                    >
                      <img src={HeaderButtonChart} alt="" />
                    </Link>
                  </div>
                </div>
              </div>
            </ul>
            <ul className="newItems__cards__card">
              <li className="newItems__cards__card-img">
                <img src={img1} alt="" />
              </li>
              <div className="newItems__cards__card__infos">
                <li className="newItems__cards__card__infos-text">
                  Умные часы
                </li>
                <li className="newItems__cards__card__infos-product">
                  Apple iPhone 13 Pro Max 256 ГБ серый
                </li>
                <div className="newItems__cards__card__infos__info">
                  <li className="newItems__cards__card__infos__info-price">
                    1100$
                  </li>
                  <div className="newItems__cards__card__infos__info__icons">
                    <input
                      className="icons-checkbox"
                      type="checkbox"
                      id="iconsCheckbox3"
                    />
                    <label
                      htmlFor="iconsCheckbox3"
                      className="icons-checkbox-label"
                    >
                      ♡
                    </label>

                    <Link
                      to={"/differences"}
                      className="newItems__cards__card__infos__info__icons-img"
                    >
                      <img src={HeaderButtonChart} alt="" />
                    </Link>
                  </div>
                </div>
              </div>
            </ul>
            <ul className="newItems__cards__card">
              <li className="newItems__cards__card-img">
                <img src={img1} alt="" />
              </li>
              <div className="newItems__cards__card__infos">
                <li className="newItems__cards__card__infos-text">
                  Умные часы
                </li>
                <li className="newItems__cards__card__infos-product">
                  Apple iPhone 13 Pro Max 256 ГБ серый
                </li>
                <div className="newItems__cards__card__infos__info">
                  <li className="newItems__cards__card__infos__info-price">
                    1100$
                  </li>
                  <div className="newItems__cards__card__infos__info__icons">
                    <input
                      className="icons-checkbox"
                      type="checkbox"
                      id="iconsCheckbox4"
                    />
                    <label
                      htmlFor="iconsCheckbox4"
                      className="icons-checkbox-label"
                    >
                      ♡
                    </label>

                    <Link
                      to={"/differences"}
                      className="newItems__cards__card__infos__info__icons-img"
                    >
                      <img src={HeaderButtonChart} alt="" />
                    </Link>
                  </div>
                </div>
              </div>
            </ul>
            <ul className="newItems__cards__card">
              <li className="newItems__cards__card-img">
                <img src={img1} alt="" />
              </li>
              <div className="newItems__cards__card__infos">
                <li className="newItems__cards__card__infos-text">
                  Умные часы
                </li>
                <li className="newItems__cards__card__infos-product">
                  Apple iPhone 13 Pro Max 256 ГБ серый
                </li>
                <div className="newItems__cards__card__infos__info">
                  <li className="newItems__cards__card__infos__info-price">
                    1100$
                  </li>
                  <div className="newItems__cards__card__infos__info__icons">
                    <input
                      className="icons-checkbox"
                      type="checkbox"
                      id="iconsCheckbox5"
                    />
                    <label
                      htmlFor="iconsCheckbox5"
                      className="icons-checkbox-label"
                    >
                      ♡
                    </label>

                    <Link
                      to={"/differences"}
                      className="newItems__cards__card__infos__info__icons-img"
                    >
                      <img src={HeaderButtonChart} alt="" />
                    </Link>
                  </div>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default NewItems;
