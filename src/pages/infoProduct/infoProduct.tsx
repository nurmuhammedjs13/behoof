import "./infoProduct.css";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Apple2 from "../../assets/Apple2.png";
import Apple3 from "../../assets/Apple3.png";
import crown from "../../assets/crown.png";
import reStore from "../../assets/reStore.png";
import diagram from "../../assets/diagram.png";
import chart1 from "../../assets/chart1.png";
import brand1 from "../../assets/brand1.png";
import brand2 from "../../assets/brand2.png";
import chart_green from "../../assets/chart_green.png";
import chart_red from "../../assets/chart_red.png";
import { FaStar } from "react-icons/fa";
import { GrDown } from "react-icons/gr";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";
import { FaAngleRight } from "react-icons/fa6";
import { FaStarHalfStroke } from "react-icons/fa6";
import Comment from "../../components/review/index";
import { Link } from "react-router-dom";
function InfoProduct() {
  return (
    <>
      <Header />
      <section className="hero1">
        <div className="container">
          <div className="hero1__subjest">
            <Link to={"/"} className="hero1__subjest-title">
              Главная /
            </Link>
            <Link to={"/groupOfProducts"} className="hero1__subjest-title">
              Смартфоны /
            </Link>
            <h3 className="hero1__subjest-title2">
              Apple iPhone 13 Pro Max 256 ГБ серый
            </h3>
          </div>
          <div className="hero1__content">
            <div className="hero1__content_block">
              <div className="hero1_content_inside">
                <div className="hero1__img">
                  <img className="hero1__img1" src={Apple2} alt="" />
                </div>

                <div className="hero1__cards">
                  <div className="hero1__card">
                    <img src={Apple3} className="hero1__img2" alt="" />
                  </div>
                  <div className="hero1__card">
                    <img src={Apple3} className="hero1__img2" alt="" />
                  </div>
                  <div className="hero1__card">
                    <img src={Apple3} className="hero1__img2" alt="" />
                  </div>
                </div>
                <div className="hero1__subjest_infos">
                  <h1 className="info_text">
                    Характеристики Apple iPhone 13 Pro Max 256 ГБ серый
                  </h1>
                  <div className="hero1__subjest_info-items">
                    <div className="info_item">
                      Камера <p>48 MPx</p>
                    </div>
                    <div className="info_item">
                      Система <p>iOS</p>
                    </div>
                    <div className="info_item">
                      Диагональ <p>6,1”</p>
                    </div>
                    <div className="info_item">
                      Зарядка <p>Беспроводная</p>
                    </div>
                  </div>
                  <div className="hero1__subjest_info">
                    <div className="hero1__subjest_info-text">
                      Полный список характеристик
                      <span>
                        <GrDown />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="hero1__subjest-text">
                  <h1>Описание</h1>
                  <p>
                    Смартфон Apple iPhone 13 выполнен в компактном корпусе с
                    привлекательной розовой расцветкой и защищенной конструкцией
                    по стандарту IP68. Мощный чип A15 Bionic обеспечивает
                    быструю и стабильную работу при запуске приложений,
                    просмотре видео, веб-серфинге и выполнении других задач. На
                    дисплее 6.1 дюйма OLED выводится четкая и красочная
                    картинка. На тыловой стороне расположена камера с двумя
                    датчиками по 12 Мп, которые при поддержке ряда технологий и
                    функций позволяют создавать реалистичные снимки в различных
                    условиях. На передней стороне имеется камера 12 Мп для селфи
                    и общения. В мобильном устройстве предлагается широкий набор
                    беспроводных интерфейсов и разъем Lightning 8-pin.
                    Аккумулятор гарантирует продолжительное время автономности.
                    Из особенностей отмечаются поддержка быстрой зарядки,
                    беспроводной зарядки и устройств MagSafe с магнитным
                    позиционированием.
                  </p>
                </div>
              </div>
              <div className="hero1_content_inside2">
                <div className="hero1__subtitle">
                  <div className="hero1__title">
                    <h1>Apple iPhone 13 Pro Max 256 ГБ серый</h1>
                  </div>
                  <div className="hero1__points">
                    <div className="hero1__point2">
                      <span>4.4 Оценка экспертов</span>
                    </div>
                    <div className="hero1__point">
                      <div className="hero1__point_inside">
                        4.0
                        <div className="hero1__point_stars">
                          <FaStar className="hero1__point_star" />
                          <FaStar className="hero1__point_star" />
                          <FaStar className="hero1__point_star" />
                          <FaStar className="hero1__point_star" />
                          <FaStar className="hero1__point_star hero1__point_star_empty" />
                        </div>
                        <div className="hero1__point_star hero1__point_star_hidden">
                          <FaStarHalfStroke />
                        </div>
                        447 Отзывов
                      </div>
                    </div>
                  </div>
                  <div className="phone_info_infos">
                    <div className="phone_info_info">
                      <span>Дизайн</span>
                      <div className="phone_info_lines">
                        <div className="phone_info_line"></div>
                        <div className="phone_info_line"></div>
                        <div className="phone_info_line"></div>
                        <div className="phone_info_line"></div>
                        <div className="phone_info_line phone_info_line_empty"></div>
                      </div>
                    </div>
                    <div className="phone_info_info">
                      <span>Батарея</span>
                      <div className="phone_info_lines">
                        <div className="phone_info_line"></div>
                        <div className="phone_info_line"></div>
                        <div className="phone_info_line phone_info_line_empty"></div>
                        <div className="phone_info_line phone_info_line_empty"></div>
                        <div className="phone_info_line phone_info_line_empty"></div>
                      </div>
                    </div>
                    <div className="phone_info_info">
                      <span>Дисплей</span>
                      <div className="phone_info_lines">
                        <div className="phone_info_line"></div>
                        <div className="phone_info_line"></div>
                        <div className="phone_info_line"></div>
                        <div className="phone_info_line"></div>
                        <div className="phone_info_line phone_info_line_empty"></div>
                      </div>
                    </div>
                    <div className="phone_info_info">
                      <span>Камера</span>
                      <div className="phone_info_lines">
                        <div className="phone_info_line"></div>
                        <div className="phone_info_line"></div>
                        <div className="phone_info_line"></div>
                        <div className="phone_info_line"></div>
                        <div className="phone_info_line"></div>
                      </div>
                    </div>
                    <div className="phone_info_info">
                      <span>Ответ</span>
                      <div className="phone_info_lines">
                        <div className="phone_info_line"></div>
                        <div className="phone_info_line"></div>
                        <div className="phone_info_line"></div>
                        <div className="phone_info_line"></div>
                        <div className="phone_info_line"></div>
                      </div>
                    </div>
                    <div className="phone_info_info">
                      <span>Портативность</span>
                      <div className="phone_info_lines">
                        <div className="phone_info_line"></div>
                        <div className="phone_info_line"></div>
                        <div className="phone_info_line"></div>
                        <div className="phone_info_line"></div>
                        <div className="phone_info_line phone_info_line_empty"></div>
                      </div>
                    </div>
                  </div>
                  <div className="info_icon">
                    <div>
                      <img src={crown} alt="" />
                    </div>
                    <p>Самый дешевый</p>
                  </div>
                  <div className="hero1_price_and_img">
                    <div className="hero1_price">78 999 ₽ </div>
                    <div className="hero1_img">
                      <img src={reStore} alt="" />
                    </div>
                  </div>
                  <div className="hero1_status_info">Доставка бесплатная</div>
                  <div className="hero1_price_good">
                    <div className="hero1_price_img">
                      <img src={diagram} alt="" />
                    </div>
                    <div className="hero1_price_good_inside">
                      <div className="hero1_price_good_top">Цена хорошая </div>
                      <div className="hero1_price_good_bottom">
                        Исходя из последних 40 дней, сумма составляет близко к
                        среднему <span>80 000 ₽</span>
                      </div>
                    </div>
                  </div>
                  <div className="hero1_price_filter">
                    <div></div>
                    <TiArrowSortedDown className="absolute_arrow" />
                  </div>
                  <div className="hero1_price_color">
                    <span>Цвет:</span>
                    <div className="hero1_price_color_divs">
                      <div className="hero1_price_color_div">
                        <div className="hero1_price_color_div_inside"></div>
                      </div>
                      <div className="hero1_price_color_div">
                        <div className="hero1_price_color_div_inside"></div>
                      </div>
                      <div className="hero1_price_color_div">
                        <div className="hero1_price_color_div_inside"></div>
                      </div>
                      <div className="hero1_price_color_div hero1_price_color_div_active">
                        <div className="hero1_price_color_div_inside"></div>
                      </div>
                      <div className="hero1_price_color_div">
                        <div className="hero1_price_color_div_inside"></div>
                      </div>
                      <div className="hero1_price_color_div">
                        <div className="hero1_price_color_div_inside"></div>
                      </div>
                      <div className="hero1_price_color_div">
                        <div className="hero1_price_color_div_inside"></div>
                      </div>
                    </div>
                  </div>
                  <div className="hero1_price_color">
                    <span>Память:</span>
                    <div className="hero1_price_storage_divs">
                      <div className="hero1_price_storage_div">128 ГБ</div>
                      <div className="hero1_price_storage_div hero1_price_storage_div_active">
                        256 ГБ
                      </div>
                      <div className="hero1_price_storage_div">512 ГБ</div>
                    </div>
                  </div>
                  <div className="hero1_buttons">
                    <div className="hero1_button">
                      < TbBrandGoogleAnalytics className="hero1_button_icon" />
                      <Link className="hero1_button_nav" to={"/differences"}>
                        Сравнить
                      </Link>
                    </div>
                    <div className="hero1_button">
                      <FaRegHeart className="hero1_button_icon" />
                      <Link
                        to={"/favorites"}
                        className="hero1_button_icon-link"
                      >
                        В избранное
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="hero1_charts">
                  <div className="hero1_chart_top hero1_chart_shadow">
                    <h1 className="hero1_chart_title">История цены</h1>
                    <div className="hero1_chart_img">
                      <img src={chart1} alt="" />
                    </div>
                  </div>
                  <div className="hero1_chart_middle">
                    <div className="hero1_chart_shadow">
                      <div className="hero1_chart_top_texts">
                        <h1 className="hero1_chart_price">83 999 ₽</h1>
                        <div className="hero1_chart_img_brand">
                          <img src={brand1} alt="" />
                        </div>
                      </div>
                      <div className="hero1_chart_top_status hero1_chart_top_status_active">
                        Доставка бесплатная
                      </div>
                      <div className="hero1_chart_img">
                        <img src={chart_green} alt="" />
                      </div>
                      <div className="hero1_chart_link">
                        <Link to={"/"} className="hero1_chart_link-click">
                          Перейти в магазин
                        </Link>
                        <Link to={"/"} className="hero1_chart_link-icons">
                          <FaAngleRight />
                        </Link>
                      </div>
                    </div>
                    <div className="hero1_chart_shadow">
                      <div className="hero1_chart_top_texts">
                        <h1 className="hero1_chart_price">83 999 ₽</h1>
                        <div className="hero1_chart_img_brand">
                          <img src={brand2} alt="" />
                        </div>
                      </div>
                      <div className="hero1_chart_top_status">
                        Доставка включена в стоимость
                      </div>
                      <div className="hero1_chart_img">
                        <img src={chart_red} alt="" />
                      </div>
                      <div className="hero1_chart_link">
                        <Link to={"/"} className="hero1_chart_link-click">
                          Перейти в магазин
                        </Link>
                        <Link to={"/"} className="hero1_chart_link-icons">
                          <FaAngleRight />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="hero1_chart_middle hero1_chart_middle_reverse">
                    <div className="hero1_chart_shadow">
                      <div className="hero1_chart_top_texts">
                        <h1 className="hero1_chart_price">83 999 ₽</h1>
                        <div className="hero1_chart_img_brand">
                          <img src={brand1} alt="" />
                        </div>
                      </div>
                      <div className="hero1_chart_top_status hero1_chart_top_status_active">
                        Доставка бесплатная
                      </div>
                      <div className="hero1_chart_img">
                        <img src={chart_green} alt="" />
                      </div>
                      <div className="hero1_chart_link">
                        <Link to={"/"} className="hero1_chart_link-click">
                          Перейти в магазин
                        </Link>
                        <Link to={"/"} className="hero1_chart_link-icons">
                          <FaAngleRight />
                        </Link>
                      </div>
                    </div>
                    <div className="hero1_chart_shadow">
                      <div className="hero1_chart_top_texts">
                        <h1 className="hero1_chart_price">83 999 ₽</h1>
                        <div className="hero1_chart_img_brand">
                          <img src={brand2} alt="" />
                        </div>
                      </div>
                      <div className="hero1_chart_top_status">
                        Доставка включена в стоимость
                      </div>
                      <div className="hero1_chart_img">
                        <img src={chart_red} alt="" />
                      </div>
                      <div className="hero1_chart_link">
                        <Link to={"/"} className="hero1_chart_link-click">
                          Перейти в магазин
                        </Link>
                        <Link to={"/"} className="hero1_chart_link-icons">
                          <FaAngleRight />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="hero1_chart_middle">
                    <div className="hero1_chart_shadow">
                      <div className="hero1_chart_top_texts">
                        <h1 className="hero1_chart_price">83 999 ₽</h1>
                        <div className="hero1_chart_img_brand">
                          <img src={brand1} alt="" />
                        </div>
                      </div>
                      <div className="hero1_chart_top_status hero1_chart_top_status_active">
                        Доставка бесплатная
                      </div>
                      <div className="hero1_chart_img">
                        <img src={chart_green} alt="" />
                      </div>
                      <div className="hero1_chart_link">
                        <Link to={"/"} className="hero1_chart_link-click">
                          Перейти в магазин
                        </Link>
                        <Link to={"/"} className="hero1_chart_link-icons">
                          <FaAngleRight />
                        </Link>
                      </div>
                    </div>
                    <div className="hero1_chart_shadow">
                      <div className="hero1_chart_top_texts">
                        <h1 className="hero1_chart_price">83 999 ₽</h1>
                        <div className="hero1_chart_img_brand">
                          <img src={brand2} alt="" />
                        </div>
                      </div>
                      <div className="hero1_chart_top_status">
                        Доставка включена в стоимость
                      </div>
                      <div className="hero1_chart_img">
                        <img src={chart_red} alt="" />
                      </div>
                      <div className="hero1_chart_link">
                        <Link to={"/"} className="hero1_chart_link-click">
                          Перейти в магазин
                        </Link>
                        <Link to={"/"} className="hero1_chart_link-icons">
                          <FaAngleRight />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="hero1_chart_middle hero1_chart_middle_reverse">
                    <div className="hero1_chart_shadow">
                      <div className="hero1_chart_top_texts">
                        <h1 className="hero1_chart_price">83 999 ₽</h1>
                        <div className="hero1_chart_img_brand">
                          <img src={brand1} alt="" />
                        </div>
                      </div>
                      <div className="hero1_chart_top_status hero1_chart_top_status_active">
                        Доставка бесплатная
                      </div>
                      <div className="hero1_chart_img">
                        <img src={chart_green} alt="" />
                      </div>
                      <div className="hero1_chart_link">
                        <Link to={"/"} className="hero1_chart_link-click">
                          Перейти в магазин
                        </Link>
                        <Link to={"/"} className="hero1_chart_link-icons">
                          <FaAngleRight />
                        </Link>
                      </div>
                    </div>
                    <div className="hero1_chart_shadow">
                      <div className="hero1_chart_top_texts">
                        <h1 className="hero1_chart_price">83 999 ₽</h1>
                        <div className="hero1_chart_img_brand">
                          <img src={brand2} alt="" />
                        </div>
                      </div>
                      <div className="hero1_chart_top_status">
                        Доставка включена в стоимость
                      </div>
                      <div className="hero1_chart_img">
                        <img src={chart_red} alt="" />
                      </div>
                      <div className="hero1_chart_link">
                        <Link to={"/"} className="hero1_chart_link-click">
                          Перейти в магазин
                        </Link>
                        <Link to={"/"} className="hero1_chart_link-icons">
                          <FaAngleRight />
                        </Link>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Comment />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default InfoProduct;
