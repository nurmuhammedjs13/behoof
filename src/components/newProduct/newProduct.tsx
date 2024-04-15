import { Link } from "react-router-dom";
import "../../components/newProduct/index.css";
import HeaderButtonHeart from "../../assets/heart.png";
import HeaderButtonChart from "../../assets/chart.png";
import img1 from "../../assets/2272131 1.png";

function NewProduct() {
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
              <li className="newProduct__cards__card-text">
                object(Умные часы)
              </li>
              <li className="newProduct__cards__card-product">
                object(Apple iPhone 13 Pro Max 256 ГБ серый)
              </li>
              <div className="newProduct__cards__card__info">
                <li className="newProduct__cards__card__info-price">1100$</li>
                <div className="newProduct__cards__card__info__icons">
                  <button className="newProduct__cards__card__info__icons-but">
                    <img src={HeaderButtonHeart} alt="" />
                  </button>
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
              <li className="newProduct__cards__card-text">
                object(Умные часы)
              </li>
              <li className="newProduct__cards__card-product">
                object(Apple iPhone 13 Pro Max 256 ГБ серый)
              </li>
              <div className="newProduct__cards__card__info">
                <li className="newProduct__cards__card__info-price">1100$</li>
                <div className="newProduct__cards__card__info__icons">
                  <button className="newProduct__cards__card__info__icons-but">
                    <img src={HeaderButtonHeart} alt="" />
                  </button>
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
              <li className="newProduct__cards__card-text">
                object(Умные часы)
              </li>
              <li className="newProduct__cards__card-product">
                object(Apple iPhone 13 Pro Max 256 ГБ серый)
              </li>
              <div className="newProduct__cards__card__info">
                <li className="newProduct__cards__card__info-price">1100$</li>
                <div className="newProduct__cards__card__info__icons">
                  <button className="newProduct__cards__card__info__icons-but">
                    <img src={HeaderButtonHeart} alt="" />
                  </button>
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
              <li className="newProduct__cards__card-text">
                object(Умные часы)
              </li>
              <li className="newProduct__cards__card-product">
                object(Apple iPhone 13 Pro Max 256 ГБ серый)
              </li>
              <div className="newProduct__cards__card__info">
                <li className="newProduct__cards__card__info-price">1100$</li>
                <div className="newProduct__cards__card__info__icons">
                  <button className="newProduct__cards__card__info__icons-but">
                    <img src={HeaderButtonHeart} alt="" />
                  </button>
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
