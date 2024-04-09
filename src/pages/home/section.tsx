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
              <img src={Apple} alt="" className="card_list" />
              {/* <h3>Смартфоны</h3> */}
              <img src={MacBook} alt="" className="card_list" />
              {/* <h3>Ноутбуки</h3> */}
              <img src={Ipad} alt="" className="card_list" />
              {/* <h3>Планшеты</h3> */}
              <img src={watch} alt="" className="card_list" />
              {/* <h3>Умные часы</h3> */}
              <img src={consoles} alt="" className="card_list" />
              {/* <h3>Игровые приставки</h3> */}
              <img src={headphones} alt="" className="card_list" />
              {/* <h3>Наушники</h3> */}
              <img src={columns} alt="" className="card_list" />
              {/* <h3>Портативные колонки</h3> */}
              <img src={accessories} alt="" className="card_list" />
              {/* <h3>Аксессуары</h3> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section;
