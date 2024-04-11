import "./index.css";
import Apple from "../../assets/Apple.png";
import MacBook from "../../assets/MacBook.png";
import Ipad from "../../assets/Ipad.png";
import watch from "../../assets/watch.png";
import consoles from "../../assets/consoles.png";
import headphones from "../../assets/headphones.png";
import columns from "../../assets/columns.png";
import accessories from "../../assets/accessories.png";

function Section() {
  return (
    <section className="section">
      <div className="container">
        <div className="section__content">
          <a href="#" className="section__logo-text">
            Лучший выбор
          </a>
          <div className="Cards">
            <div className="Card">
              <img src={Apple} alt="" />
              <h3 className="card_list">Смартфоны</h3>
              <img src={MacBook} alt="" />
              <h3 className="card_list">Ноутбуки</h3>
              <img src={Ipad} alt="" />
              <h3 className="card_list">Планшеты</h3>
              <img src={watch} alt="" />
              <h3 className="card_list">Умные часы</h3>
              <img src={consoles} alt="" />
              <h3 className="card_list">Игровые приставки</h3>
              <img src={headphones} alt="" />
              <h3 className="card_list">Наушники</h3>
              <img src={columns} alt="" />
              <h3 className="card_list">Портативные колонки</h3>
              <img src={accessories} alt="" />
              <h3 className="card_list">Аксессуары</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section;
