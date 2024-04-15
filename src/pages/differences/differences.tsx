import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import trash from "../../assets/differences_trash.png";
import hearticon from "../../assets/heart.png";
import "./index.css";
import { Link } from "react-router-dom";
import Iphoneicon from "../../assets/Apple.png";

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
            <div className="differences_obj">
              <div className="differences_obj_title">
                <button className="differences_obj_title_products">
                  Смартфоны 4{" "}
                  <button className="differences_obj_title_products-button">
                    ✕
                  </button>
                </button>
                <button className="differences_obj_title_products">
                  Ноутбуки 2{" "}
                  <button className="differences_obj_title_products-button">
                    ✕
                  </button>
                </button>
              </div>
              <div className="differences_obj_products">
                <button className="differences_obj_product">
                  <div className="differences_obj_product_img">
                    <img src={Iphoneicon} alt="" />
                    <button className="differences_obj_product_img-trash_button">
                      <img src={trash} alt="" />
                    </button>
                  </div>
                  <div className="differences_obj_product_info">
                    <div className="differences_obj_product_info_hero">
                      <h1 className="differences_obj_product_info_hero-title">
                        Смартфоны
                      </h1>
                      <h1 className="differences_obj_product_info_hero-product">
                        Apple iPhone 13 Pro Max 256 ГБ серый{" "}
                      </h1>
                    </div>
                    <div className="differences_obj_product_info_price">
                      <div className="differences_obj_product_info_price_block">
                        <h1 className="differences_obj_product_info_price_block-text">
                          Цена
                        </h1>
                        <h1 className="differences_obj_product_info_price_block-count">
                          {" "}
                          114 099 ₽
                        </h1>
                      </div>
                      <button className="differences_obj_product_info_price_button">
                        <img src={hearticon} alt="" />
                      </button>
                    </div>
                  </div>
                </button>
                <button className="differences_obj_product">
                  <div className="differences_obj_product_img">
                    <img src={Iphoneicon} alt="" />
                    <button className="differences_obj_product_img-trash_button">
                      <img src={trash} alt="" />
                    </button>
                  </div>
                  <div className="differences_obj_product_info">
                    <div className="differences_obj_product_info_hero">
                      <h1 className="differences_obj_product_info_hero-title">
                        Смартфоны
                      </h1>
                      <h1 className="differences_obj_product_info_hero-product">
                        Apple iPhone 13 Pro Max 256 ГБ серый{" "}
                      </h1>
                    </div>
                    <div className="differences_obj_product_info_price">
                      <div className="differences_obj_product_info_price_block">
                        <h1 className="differences_obj_product_info_price_block-text">
                          Цена
                        </h1>
                        <h1 className="differences_obj_product_info_price_block-count">
                          {" "}
                          114 099 ₽
                        </h1>
                      </div>
                      <button className="differences_obj_product_info_price_button">
                        <img src={hearticon} alt="" />
                      </button>
                    </div>
                  </div>
                </button>
                <button className="differences_obj_product">
                  <div className="differences_obj_product_img">
                    <img src={Iphoneicon} alt="" />
                    <button className="differences_obj_product_img-trash_button">
                      <img src={trash} alt="" />
                    </button>
                  </div>
                  <div className="differences_obj_product_info">
                    <div className="differences_obj_product_info_hero">
                      <h1 className="differences_obj_product_info_hero-title">
                        Смартфоны
                      </h1>
                      <h1 className="differences_obj_product_info_hero-product">
                        Apple iPhone 13 Pro Max 256 ГБ серый{" "}
                      </h1>
                    </div>
                    <div className="differences_obj_product_info_price">
                      <div className="differences_obj_product_info_price_block">
                        <h1 className="differences_obj_product_info_price_block-text">
                          Цена
                        </h1>
                        <h1 className="differences_obj_product_info_price_block-count">
                          {" "}
                          114 099 ₽
                        </h1>
                      </div>
                      <button className="differences_obj_product_info_price_button">
                        <img src={hearticon} alt="" />
                      </button>
                    </div>
                  </div>
                </button>
                <button className="differences_obj_product">
                  <div className="differences_obj_product_img">
                    <img src={Iphoneicon} alt="" />
                    <button className="differences_obj_product_img-trash_button">
                      <img src={trash} alt="" />
                    </button>
                  </div>
                  <div className="differences_obj_product_info">
                    <div className="differences_obj_product_info_hero">
                      <h1 className="differences_obj_product_info_hero-title">
                        Смартфоны
                      </h1>
                      <h1 className="differences_obj_product_info_hero-product">
                        Apple iPhone 13 Pro Max 256 ГБ серый{" "}
                      </h1>
                    </div>
                    <div className="differences_obj_product_info_price">
                      <div className="differences_obj_product_info_price_block">
                        <h1 className="differences_obj_product_info_price_block-text">
                          Цена
                        </h1>
                        <h1 className="differences_obj_product_info_price_block-count">
                          {" "}
                          114 099 ₽
                        </h1>
                      </div>
                      <button className="differences_obj_product_info_price_button">
                        <img src={hearticon} alt="" />
                      </button>
                    </div>
                  </div>
                </button>
              </div>
            </div>

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
                <h3 className="differences__cards__card-logo">
                  Количество ядер
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
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Differences;
