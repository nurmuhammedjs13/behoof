import React from "react";
import Apple from "../../assets/Apple.png"
import Macbook from "../../assets/Macbook.png"
import Ipad from "../../assets/Ipad.png"
import watch from "../../assets/Watch.png"
import prefix from "../../assets/Prefix.png"
import headphones from "../../assets/headphones.png"
import columns from "../../assets/columns.png"
import accessories from "../../assets/accessories.png"

function Section() {
    return (
        <section className="section">
            <div className="container">
                <div className="section__content">
                    <a href="#" className="section__logo-text">
                        Лучший выбор
                    </a>
                    <div className="Cards">
                        <img src={Apple} alt="" className="card_1" />
                        <h3 className="card_text">Смартфоны</h3>
                        <img src={Macbook} alt="" className="card_2" />
                        <h3 className="card_text">Ноутбуки</h3>
                        <img src={Ipad} alt="" className="card_3" />
                        <h3 className="card_text">Планшеты</h3>
                        <img src={watch} alt="" className="card-4" />
                        <h3 className="card_text">Умные часы</h3>
                        <img src={prefix} alt="" className="card_5" />
                        <h3 className="card_text">Игровые приставки</h3>
                        <img src={headphones} alt="" className="card_6" />
                        <h3 className="card_text">Наушники</h3>
                        <img src={columns} alt="" className="card_7" />
                        <h3 className="card_text">Портативные колонки</h3>
                        <img src={accessories} alt="" className="card_8" />
                        <h3 className="card_text">Аксесуары</h3>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Section;
