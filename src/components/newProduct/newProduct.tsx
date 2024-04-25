import { Link } from "react-router-dom";
import "../../components/newProduct/index.css";
import HeaderButtonChart from "../../assets/chart.png";
import img1 from "../../assets/2272131 1.png";
import { useState } from "react";

function NewProduct() {
  const [isHeart, setHeart] = useState(true);
  const [isHeart2, setHeart2] = useState(true);
  const [isHeart3, setHeart3] = useState(true);
  const [isHeart4, setHeart4] = useState(true);
  const [isHeart5, setHeart5] = useState(true);

  return (
    <>
      <div className="newProduct">
        <div className="container">
          <div className="newProduct__content">
            <h3 className="newProduct__content-log">Новинки</h3>
            <Link to={"/"} className="newProduct__content-newProduct">
              К новинкам ➜
            </Link>
          </div>
          <div className="newProduct__cards">
            <ul className="newProduct__cards__card">
              <li className="newProduct__cards__card-img">
                <img src={img1} alt="" />
              </li>
              <li className="newProduct__cards__card-text">Умные часы</li>
              <li className="newProduct__cards__card-product">
                Apple iPhone 13 Pro Max 256 ГБ серый
              </li>
              <div className="newProduct__cards__card__info">
                <li className="newProduct__cards__card__info-price">1100$</li>
                <div className="newProduct__cards__card__info__icons">
                  <input
                    className="icons-checkbox"
                    type="checkbox"
                    id="iconsCheckbox1"
                    checked={isHeart}
                    onChange={() => setHeart((prev) => !prev)}
                  />
                  <label
                    htmlFor="iconsCheckbox1"
                    className="icons-checkbox-label"
                  >
                    ♡
                  </label>

                  <Link
                    to={"/differences"}
                    className="newProduct__cards__card__info__icons-img"
                  >
                    <img src={HeaderButtonChart} alt="" />
                  </Link>
                </div>
              </div>
            </ul>
            <ul className="newProduct__cards__card">
              <li className="newProduct__cards__card-img">
                <img src={img1} alt="" />
              </li>
              <li className="newProduct__cards__card-text">Умные часы</li>
              <li className="newProduct__cards__card-product">
                Apple iPhone 13 Pro Max 256 ГБ серый
              </li>
              <div className="newProduct__cards__card__info">
                <li className="newProduct__cards__card__info-price">1100$</li>
                <div className="newProduct__cards__card__info__icons">
                  <input
                    className="icons-checkbox"
                    type="checkbox"
                    id="iconsCheckbox2"
                    checked={isHeart2}
                    onChange={() => setHeart2((prev) => !prev)}
                  />
                  <label
                    htmlFor="iconsCheckbox2"
                    className="icons-checkbox-label"
                  >
                    ♡
                  </label>

                  <Link
                    to={"/differences"}
                    className="newProduct__cards__card__info__icons-img"
                  >
                    <img src={HeaderButtonChart} alt="" />
                  </Link>
                </div>
              </div>
            </ul>
            <ul className="newProduct__cards__card">
              <li className="newProduct__cards__card-img">
                <img src={img1} alt="" />
              </li>
              <li className="newProduct__cards__card-text">Умные часы</li>
              <li className="newProduct__cards__card-product">
                Apple iPhone 13 Pro Max 256 ГБ серый
              </li>
              <div className="newProduct__cards__card__info">
                <li className="newProduct__cards__card__info-price">1100$</li>
                <div className="newProduct__cards__card__info__icons">
                  <input
                    className="icons-checkbox"
                    type="checkbox"
                    id="iconsCheckbox3"
                    checked={isHeart3}
                    onChange={() => setHeart3((prev) => !prev)}
                  />
                  <label
                    htmlFor="iconsCheckbox3"
                    className="icons-checkbox-label"
                  >
                    ♡
                  </label>
                  <Link
                    to={"/differences"}
                    className="newProduct__cards__card__info__icons-img"
                  >
                    <img src={HeaderButtonChart} alt="" />
                  </Link>
                </div>
              </div>
            </ul>
            <ul className="newProduct__cards__card">
              <li className="newProduct__cards__card-img">
                <img src={img1} alt="" />
              </li>
              <li className="newProduct__cards__card-text">Умные часы</li>
              <li className="newProduct__cards__card-product">
                Apple iPhone 13 Pro Max 256 ГБ серый
              </li>
              <div className="newProduct__cards__card__info">
                <li className="newProduct__cards__card__info-price">1100$</li>
                <div className="newProduct__cards__card__info__icons">
                  <input
                    className="icons-checkbox"
                    type="checkbox"
                    id="iconsCheckbox4"
                    checked={isHeart4}
                    onChange={() => setHeart4((prev) => !prev)}
                  />
                  <label
                    htmlFor="iconsCheckbox4"
                    className="icons-checkbox-label"
                  >
                    ♡
                  </label>
                  <Link
                    to={"/differences"}
                    className="newProduct__cards__card__info__icons-img"
                  >
                    <img src={HeaderButtonChart} alt="" />
                  </Link>
                </div>
              </div>
            </ul>
            <ul className="newProduct__cards__card">
              <li className="newProduct__cards__card-img">
                <img src={img1} alt="" />
              </li>
              <li className="newProduct__cards__card-text">Умные часы</li>
              <li className="newProduct__cards__card-product">
                Apple iPhone 13 Pro Max 256 ГБ серый
              </li>
              <div className="newProduct__cards__card__info">
                <li className="newProduct__cards__card__info-price">1100$</li>
                <div className="newProduct__cards__card__info__icons">
                  <input
                    className="icons-checkbox"
                    type="checkbox"
                    id="iconsCheckbox5"
                    checked={isHeart5}
                    onChange={() => setHeart5((prev) => !prev)}
                  />
                  <label
                    htmlFor="iconsCheckbox5"
                    className="icons-checkbox-label"
                  >
                    ♡
                  </label>
                  <Link
                    to={"/differences"}
                    className="newProduct__cards__card__info__icons-img"
                  >
                    <img src={HeaderButtonChart} alt="" />
                  </Link>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewProduct;
