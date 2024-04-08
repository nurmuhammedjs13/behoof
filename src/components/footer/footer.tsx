import React from "react";
import vk from "../../assets/VK.png";
import insta from "../../assets/Inst.png";
import tt from "../../assets/TT.png";
import tg from "../../assets/TG.png";
import yt from "../../assets/YT.png";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="cards">
            <div className="cards__card">
              <div className="cards__logo">
                <a href=""></a>
                <h3 className="cards__logo-text">Behoof</h3>
              </div>
              <div className="cards__info">
                <p className="cards__info-logo">Мы в соц сетях</p>
                <div className="cards__info__icons">
                  <a className="" href="#">
                    {vk}
                  </a>
                  <a className="" href="#">
                    {tt}
                  </a>
                  <a className="" href="#">
                    {insta}
                  </a>
                  <a className="" href="#">
                    {tg}
                  </a>
                  <a className="" href="#">
                    {yt}
                  </a>
                </div>
              </div>
            </div>
            <div className="cards__card1">
              <h3 className="card1-logo">Пользователю</h3>
              <a className="" href="#">
                Связаться с нами
              </a>
              <a className="" href="#">
                Поддерка пользователей
              </a>
              <a className="" href="#">
                FAQ & Руководства
              </a>
              <a className="" href="#">
                Политика конфиденциальности
              </a>
              <a className="" href="#">
                Пользовательское соглашение
              </a>
            </div>
            <div className="cards__card1">
              <h3 className="card1-logo">Популярные категории</h3>
              <link>Смартфоны</link>
              <a className="" href="#">
                Teteras electricas
              </a>
              <a className="" href="#">
                Стиральные машины
              </a>
              <a className="" href="#">
                Телевизоры
              </a>
              <a className="" href="#">
                Ноутбуки
              </a>
            </div>
            <div className="cards__card1">
              <h3 className="card1-logo">Команда Behoof</h3>

              <a className="" href="#">
                О нас
              </a>
              <a className="" href="#">
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
