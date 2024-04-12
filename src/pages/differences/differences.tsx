import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import trash from "../../assets/differences_trash.png";
import "./index.css";
import { Link } from "react-router-dom";

function Differences() {
  return (
    <>
      <Header />
      <section className="differences">
        <div className="container">
          <div className="differences_content">
            <div className="differences_content_title">
              <div className="differences_content_title_nav">
                <Link
                  to={"/"}
                  className="differences_content_title_nav-previev"
                >
                  Главная
                </Link>
                <Link
                  to={"/differences"}
                  className="differences_content_title_nav-current"
                >
                  / Сравнение
                </Link>
              </div>
              <div className="differences_content_title_text">
                <h1 className="differences_content_title_text-text">
                  Сравнение товаров
                </h1>
                <button className="differences_content_title_text-button">
                  <img src={trash} alt="" /> Удалить все списки
                </button>
              </div>
            </div>
          </div>

          <li>Object жазылат</li>

          <div className="differences__cards">
            <h3 className="differences__cards-logo">Сравнение товаров</h3>
            <div className="differences__cards__card">
              <h3 className="differences__cards__card-logo">Рейтинг</h3>
              <div className="differences__cards__card__title">
                <li className="differences__cards__card__title-obj">a</li>
                <li className="differences__cards__card__title-obj">d</li>
                <li className="differences__cards__card__title-obj">f</li>
                <li className="differences__cards__card__title-obj">c</li>
              </div>
            </div>
            <div className="differences__cards__card">
              <h3 className="differences__cards__card-logo">Модель</h3>
              <div className="differences__cards__card__title">
                <li className="differences__cards__card__title-obj">a</li>
                <li className="differences__cards__card__title-obj">d</li>
                <li className="differences__cards__card__title-obj">f</li>
                <li className="differences__cards__card__title-obj">c</li>
              </div>
            </div>
            <div className="differences__cards__card">
              <h3 className="differences__cards__card-logo">Год релиза</h3>
              <div className="differences__cards__card__title">
                <li className="differences__cards__card__title-obj">a</li>
                <li className="differences__cards__card__title-obj">d</li>
                <li className="differences__cards__card__title-obj">f</li>
                <li className="differences__cards__card__title-obj">c</li>
              </div>
            </div>
            <div className="differences__cards__card">
              <h3 className="differences__cards__card-logo">Количество ядер</h3>
              <div className="differences__cards__card__title">
                <li className="differences__cards__card__title-obj">a</li>
                <li className="differences__cards__card__title-obj">d</li>
                <li className="differences__cards__card__title-obj">f</li>
                <li className="differences__cards__card__title-obj">c</li>
              </div>
            </div>
            <div className="differences__cards__card">
              <h3 className="differences__cards__card-logo">
                Поддержка сетей 4G (LTE)
              </h3>
              <div className="differences__cards__card__title">
                <li className="differences__cards__card__title-obj">a</li>
                <li className="differences__cards__card__title-obj">d</li>
                <li className="differences__cards__card__title-obj">f</li>
                <li className="differences__cards__card__title-obj">c</li>
              </div>
            </div>
            <div className="differences__cards__card">
              <h3 className="differences__cards__card-logo">
                Объем встроенной памяти
              </h3>
              <div className="differences__cards__card__title">
                <li className="differences__cards__card__title-obj">a</li>
                <li className="differences__cards__card__title-obj">d</li>
                <li className="differences__cards__card__title-obj">f</li>
                <li className="differences__cards__card__title-obj">c</li>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Differences;
