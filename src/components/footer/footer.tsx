import vk from "../../assets/VK.png";
import insta from "../../assets/Inst.png";
import tt from "../../assets/TT.png";
import tg from "../../assets/TG.png";
import yt from "../../assets/YT.png";
import logo from "../../assets/logos.png";
import "../../components/footer/index.css";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="footer__cards">
            <div className="footer__cards__card">
              <img src={logo} alt="" />
              <div className="footer__cards__info">
                <p className="footer__cards__info-logo">Мы в соц сетях</p>
                <div className="footer__cards__info__icons">
                  <img src={vk} alt="#" />
                  <img src={tt} alt="#" />
                  <img src={insta} alt="#" />
                  <img src={tg} alt="#" />
                  <img src={yt} alt="#" />
                </div>
              </div>
            </div>
            <div className="footer__cards__card1">
              <h3 className="footer__card1-logo">Пользователю</h3>
              <a className="footer__cards__card1-text" href={"/pageNot"}>
                Связаться с нами
              </a>
              <a className="footer__cards__card1-text" href={"/pageNot"}>
                Поддерка пользователей
              </a>
              <a className="footer__cards__card1-text" href={"/pageNot"}>
                FAQ & Руководства
              </a>
              <a className="footer__cards__card1-text" href={"/pageNot"}>
                Политика конфиденциальности
              </a>
              <a className="footer__cards__card1-text" href={"/pageNot"}>
                Пользовательское соглашение
              </a>
            </div>
            <div className="footer__cards__card1">
              <h3 className="footer__card1-logo">Популярные категории</h3>
              <a className="footer__cards__card1-text" href="/groupOfProducts">
                Смартфоны
              </a>
              <a className="footer__cards__card1-text" href={"/pageNot"}>
                Teteras electricas
              </a>
              <a className="footer__cards__card1-text" href={"/pageNot"}>
                Стиральные машины
              </a>
              <a className="footer__cards__card1-text" href={"/pageNot"}>
                Телевизоры
              </a>
              <a className="footer__cards__card1-text" href={"/pageNot"}>
                Ноутбуки
              </a>
            </div>
            <div className="footer__cards__card1">
              <h3 className="footer__card1-logo">Команда Behoof</h3>

              <a className="footer__cards__card1-text" href={"/pageNot"}>
                О нас
              </a>
              <a className="footer__cards__card1-text" href={"/pageNot"}>
                Работа у нас
              </a>
            </div>
          </div>
          <hr className="hrs" />
          <h2 className="footer-tekst">
            Copyright © 2023 Behoof, Inc. Все права защищены
          </h2>
        </div>
      </div>
    </>
  );
}

export default Footer;
