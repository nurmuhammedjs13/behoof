import "./hero.css";
import Apple from "../../assets/Apple.png";
import MacBook from "../../assets/MacBook.png";
import Ipad from "../../assets/Ipad.png";
import watch from "../../assets/watch.png";
import consoles from "../../assets/consoles.png";
import headphones from "../../assets/headphones.png";
import columns from "../../assets/columns.png";
import accessories from "../../assets/accessories.png";

import { BsHeart } from "react-icons/bs";
import { VscGraph } from "react-icons/vsc";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
function Hero() {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero__content">
                    <h2 className="hero__logo-text">Лучший выбор</h2>
                    <div className="Cards">
                        <div className="Card">
                            <div>
                                <img src={Apple} alt="" />
                            </div>
                            <h3 className="card_text">Смартфоны</h3>
                        </div>
                        <div className="Card">
                            <div>
                                <img src={MacBook} alt="" />
                            </div>
                            <h3 className="card_text">Ноутбуки</h3>
                        </div>
                        <div className="Card">
                            <div>
                                <img src={Ipad} alt="" />
                            </div>
                            <h3 className="card_text">Планшеты</h3>
                        </div>
                        <div className="Card">
                            <div>
                                <img src={watch} alt="" />
                            </div>
                            <h3 className="card_text">Умные часы</h3>
                        </div>
                        <div className="Card">
                            <div>
                                <img src={consoles} alt="" />
                            </div>
                            <h3 className="card_text">Игровые приставки</h3>
                        </div>
                        <div className="Card">
                            <div>
                                <img src={headphones} alt="" />
                            </div>
                            <h3 className="card_text">Наушники</h3>
                        </div>
                        <div className="Card">
                            <div>
                                <img src={columns} alt="" />
                            </div>
                            <h3 className="card_text">Портативные колонки</h3>
                        </div>
                        <div className="Card">
                            <div>
                                <img src={accessories} alt="" />
                            </div>
                            <h3 className="card_text">Аксессуары</h3>
                        </div>
                    </div>
                </div>
                <div className="phones_section">
                    <div className="phone_navbar">
                        <div className="nav_items">
                            <p>Дизайн</p>
                            <span className="nav_items_icons">
                                <IoMdClose />
                            </span>
                            <p>Портативность</p>
                            <span className="nav_items_icons">
                                <IoMdClose />
                            </span>
                        </div>
                        <div className="nav_item">
                            <p>Камера</p>
                            <p>Ответ</p>
                            <p>Дисплей</p>
                            <p>Батарея</p>
                        </div>
                    </div>
                    <div className="phone_infos">
                        <div className="phone_info">
                            <div className="phone_info_top">
                                <div>
                                    <span>Портативные колонки </span>
                                    <h2>
                                        Apple iPhone 13 Pro Max 256 ГБ серый
                                    </h2>
                                </div>
                                <div className="phone_info_icons">
                                    <span>
                                        <BsHeart />
                                    </span>
                                    <span>
                                        <VscGraph />
                                    </span>
                                </div>
                            </div>
                            <div className="phone_info_bottom">
                                <div className="phone_info_img">
                                    <img src={Apple} alt="" />
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
                            </div>
                        </div>
                        <div className="phone_info">
                            <div className="phone_info_top">
                                <div>
                                    <span>Портативные колонки </span>
                                    <h2>
                                        Apple iPhone 13 Pro Max 256 ГБ серый
                                    </h2>
                                </div>
                                <div className="phone_info_icons">
                                    <span>
                                        <BsHeart />
                                    </span>
                                    <span>
                                        <VscGraph />
                                    </span>
                                </div>
                            </div>
                            <div className="phone_info_bottom">
                                <div className="phone_info_img">
                                    <img src={Apple} alt="" />
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
                            </div>
                        </div>
                        <div className="phone_info">
                            <div className="phone_info_top">
                                <div>
                                    <span>Портативные колонки </span>
                                    <h2>
                                        Apple iPhone 13 Pro Max 256 ГБ серый
                                    </h2>
                                </div>
                                <div className="phone_info_icons">
                                    <span>
                                        <BsHeart />
                                    </span>
                                    <span>
                                        <VscGraph />
                                    </span>
                                </div>
                            </div>
                            <div className="phone_info_bottom">
                                <div className="phone_info_img">
                                    <img src={Apple} alt="" />
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
                            </div>
                        </div>
                        <div className="phone_info">
                            <div className="phone_info_top">
                                <div>
                                    <span>Портативные колонки </span>
                                    <h2>
                                        Apple iPhone 13 Pro Max 256 ГБ серый
                                    </h2>
                                </div>
                                <div className="phone_info_icons">
                                    <span>
                                        <BsHeart />
                                    </span>
                                    <span>
                                        <VscGraph />
                                    </span>
                                </div>
                            </div>
                            <div className="phone_info_bottom">
                                <div className="phone_info_img">
                                    <img src={Apple} alt="" />
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
                            </div>
                        </div>
                        <button className="left_arrow arrow">
                            <FaChevronLeft />
                        </button>
                        <button className="right_arrow arrow">
                            <FaChevronRight />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
