import { useState } from "react";
import "./groupOfProducts.css";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import { Link } from "react-router-dom";
import Iphone from "../../assets/Apple.png";
import heart from "../../assets/heart.png";
import differences from "../../assets/chart.png";

function GroupOfProducts() {
    const [isChecked1, setIsChecked1] = useState(true);
    const [isChecked2, setIsChecked2] = useState(true);
    const [isChecked3, setIsChecked3] = useState(true);
    const [isChecked4, setIsChecked4] = useState(true);

    return (
        <>
            <Header />
            <section className="groupOfProducts">
                <div className="container">
                    <div className="groupOfProducts_content">
                        <div className="groupOfProducts_content_search">
                            <div className="groupOfProducts_content_search_navs">
                                <Link to={"/"} className="search-nav main">
                                    {" "}
                                    Главная
                                </Link>
                                <Link to={""} className="search-nav">
                                    / Смартфоны
                                </Link>
                            </div>
                            <h1 className="groupOfProducts_content_search-title">
                                Смартфоны
                            </h1>
                            <div className="groupOfProducts_content_search_fillter">
                                <h1 className="groupOfProducts_content_search_fillter-title">
                                    Качественные характеристики
                                </h1>
                                <div className="groupOfProducts_content_search_fillter_price">
                                    <h1 className="groupOfProducts_content_search_fillter_price_text">
                                        Цена
                                    </h1>
                                    <div className="groupOfProducts_content_search_fillter_price_selections">
                                        <h1 className="groupOfProducts_content_search_fillter_price_selections-text">
                                            Диапазон
                                        </h1>
                                        {/* <input type="checkbox" id="myCheckbox" name="myCheckbox"> */}

                                        <div className="groupOfProducts_content_search_fillter_price_selections_block">
                                            <div className="">
                                                <input
                                                    type="checkbox"
                                                    id="customCheckbox1"
                                                    className="custom-checkbox"
                                                    checked={isChecked1}
                                                    onChange={() =>
                                                        setIsChecked1(
                                                            (prev) => !prev
                                                        )
                                                    }
                                                />
                                                <label
                                                    htmlFor="customCheckbox1"
                                                    className="custom-checkbox-label"
                                                >
                                                    ✓
                                                </label>
                                            </div>
                                            <h1 className="groupOfProducts_content_search_fillter_price_selections_block-text">
                                                0 - 10 000 ₽
                                            </h1>
                                        </div>
                                        <div className="groupOfProducts_content_search_fillter_price_selections_block">
                                            <div className="">
                                                <input
                                                    type="checkbox"
                                                    id="customCheckbox2"
                                                    className="custom-checkbox"
                                                    checked={isChecked2}
                                                    onChange={() =>
                                                        setIsChecked2(
                                                            (prev) => !prev
                                                        )
                                                    }
                                                />
                                                <label
                                                    htmlFor="customCheckbox2"
                                                    className="custom-checkbox-label"
                                                >
                                                    ✓
                                                </label>
                                            </div>
                                            <h1 className="groupOfProducts_content_search_fillter_price_selections_block-text">
                                                10 000 - 20 000 ₽{" "}
                                            </h1>
                                        </div>
                                        <div className="groupOfProducts_content_search_fillter_price_selections_block">
                                            <div className="">
                                                <input
                                                    type="checkbox"
                                                    id="customCheckbox3"
                                                    className="custom-checkbox"
                                                    checked={isChecked3}
                                                    onChange={() =>
                                                        setIsChecked3(
                                                            (prev) => !prev
                                                        )
                                                    }
                                                />
                                                <label
                                                    htmlFor="customCheckbox3"
                                                    className="custom-checkbox-label"
                                                >
                                                    ✓
                                                </label>
                                            </div>
                                            <h1 className="groupOfProducts_content_search_fillter_price_selections_block-text">
                                                20 000 - 30 000 ₽{" "}
                                            </h1>
                                        </div>
                                        <div className="groupOfProducts_content_search_fillter_price_selections_block">
                                            <div className="">
                                                <input
                                                    type="checkbox"
                                                    id="customCheckbox4"
                                                    className="custom-checkbox"
                                                    checked={isChecked4}
                                                    onChange={() =>
                                                        setIsChecked4(
                                                            (prev) => !prev
                                                        )
                                                    }
                                                />
                                                <label
                                                    htmlFor="customCheckbox4"
                                                    className="custom-checkbox-label"
                                                >
                                                    ✓
                                                </label>
                                            </div>
                                            <h1 className="groupOfProducts_content_search_fillter_price_selections_block-text">
                                                выше 30 000 ₽{" "}
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="groupOfProducts_content_objects">
                            <div className="groupOfProducts_content_objects_object">
                                <img
                                    src={Iphone}
                                    alt=""
                                    className="groupOfProducts_content_objects_object-img"
                                />{" "}
                                <div className="groupOfProducts_content_objects_object_info">
                                    <div className="groupOfProducts_content_objects_object_info_buttons">
                                        <button className="groupOfProducts_content_objects_object_info_button">
                                            <img src={heart} alt="" />
                                        </button>
                                        <Link
                                            to={"/differences"}
                                            className="groupOfProducts_content_objects_object_info_button"
                                        >
                                            <img src={differences} alt="" />
                                        </Link>
                                    </div>
                                    <div className="groupOfProducts_content_objects_object_info_advantage">
                                        <div className="groupOfProducts_content_objects_object_info_advantage_title">
                                            <h1 className="groupOfProducts_content_objects_object_info_advantage-name">
                                                Apple iPhone 13 Pro Max 256 ГБ
                                                серый
                                            </h1>
                                            <h1 className="groupOfProducts_content_objects_object_info_advantage-price">
                                                78 999 ₽
                                            </h1>
                                        </div>
                                        <div className="groupOfProducts_content_objects_object_info_advantage_info">
                                            <div className="groupOfProducts_content_objects_object_info_advantage_info_block1">
                                                <h1 className="groupOfProducts_content_objects_object_info_advantage_info_block1-text">
                                                    ✓ Dual Sim, 3G, 4G, 5G,
                                                    VoLTE, Wi-Fi, NFC
                                                </h1>
                                                <h1 className="groupOfProducts_content_objects_object_info_advantage_info_block1-text">
                                                    ✓ 6.1 inches, 1170 x 2532 px
                                                    Display with Small Notch
                                                </h1>
                                                <h1 className="groupOfProducts_content_objects_object_info_advantage_info_block1-text">
                                                    ✓ Bionic A15, Hexa Core,
                                                    3.22 GHz Processor
                                                </h1>
                                                <h1 className="groupOfProducts_content_objects_object_info_advantage_info_block1-text">
                                                    ✓ 12 MP + 12 MP Dual Rear &
                                                    12 MP Front Camera
                                                </h1>
                                            </div>
                                            <div className="groupOfProducts_content_objects_object_info_advantage_info_block2">
                                                <h1 className="groupOfProducts_content_objects_object_info_advantage_info_block1-text">
                                                    ✓ 4 GB RAM, 128 GB inbuilt
                                                </h1>
                                                <h1 className="groupOfProducts_content_objects_object_info_advantage_info_block1-text">
                                                    ✕ Memory Card Not Supported
                                                </h1>
                                                <h1 className="groupOfProducts_content_objects_object_info_advantage_info_block1-text">
                                                    ✓ 3240 mAh Battery with Fast
                                                    Charging
                                                </h1>
                                                <h1 className="groupOfProducts_content_objects_object_info_advantage_info_block1-text">
                                                    ✓ iOS v15
                                                </h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="groupOfProducts_content_objects_object_characteristics">
                                    <div className="phone_info_infos ">
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
                                    <button className="groupOfProducts_content_objects_object_characteristics_button">
                                        Перейти к товару
                                    </button>
                                </div>
                            </div>
                            <div className="groupOfProducts_content_objects_object">
                                <img
                                    src={Iphone}
                                    alt=""
                                    className="groupOfProducts_content_objects_object-img"
                                />{" "}
                                <div className="groupOfProducts_content_objects_object_info">
                                    <div className="groupOfProducts_content_objects_object_info_buttons">
                                        <button className="groupOfProducts_content_objects_object_info_button">
                                            <img src={heart} alt="" />
                                        </button>
                                        <Link
                                            to={"/differences"}
                                            className="groupOfProducts_content_objects_object_info_button"
                                        >
                                            <img src={differences} alt="" />
                                        </Link>
                                    </div>
                                    <div className="groupOfProducts_content_objects_object_info_advantage">
                                        <div className="groupOfProducts_content_objects_object_info_advantage_title">
                                            <h1 className="groupOfProducts_content_objects_object_info_advantage-name">
                                                Apple iPhone 13 Pro Max 256 ГБ
                                                серый
                                            </h1>
                                            <h1 className="groupOfProducts_content_objects_object_info_advantage-price">
                                                78 999 ₽
                                            </h1>
                                        </div>
                                        <div className="groupOfProducts_content_objects_object_info_advantage_info">
                                            <div className="groupOfProducts_content_objects_object_info_advantage_info_block1">
                                                <h1 className="groupOfProducts_content_objects_object_info_advantage_info_block1-text">
                                                    ✓ Dual Sim, 3G, 4G, 5G,
                                                    VoLTE, Wi-Fi, NFC
                                                </h1>
                                                <h1 className="groupOfProducts_content_objects_object_info_advantage_info_block1-text">
                                                    ✓ 6.1 inches, 1170 x 2532 px
                                                    Display with Small Notch
                                                </h1>
                                                <h1 className="groupOfProducts_content_objects_object_info_advantage_info_block1-text">
                                                    ✓ Bionic A15, Hexa Core,
                                                    3.22 GHz Processor
                                                </h1>
                                                <h1 className="groupOfProducts_content_objects_object_info_advantage_info_block1-text">
                                                    ✓ 12 MP + 12 MP Dual Rear &
                                                    12 MP Front Camera
                                                </h1>
                                            </div>
                                            <div className="groupOfProducts_content_objects_object_info_advantage_info_block2">
                                                <h1 className="groupOfProducts_content_objects_object_info_advantage_info_block1-text">
                                                    ✓ 4 GB RAM, 128 GB inbuilt
                                                </h1>
                                                <h1 className="groupOfProducts_content_objects_object_info_advantage_info_block1-text">
                                                    ✕ Memory Card Not Supported
                                                </h1>
                                                <h1 className="groupOfProducts_content_objects_object_info_advantage_info_block1-text">
                                                    ✓ 3240 mAh Battery with Fast
                                                    Charging
                                                </h1>
                                                <h1 className="groupOfProducts_content_objects_object_info_advantage_info_block1-text">
                                                    ✓ iOS v15
                                                </h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="groupOfProducts_content_objects_object_characteristics">
                                    <div className="phone_info_infos ">
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
                                    <button className="groupOfProducts_content_objects_object_characteristics_button">
                                        Перейти к товару
                                    </button>
                                </div>
                            </div>
                            <div className="groupOfProducts_content_objects_object">
                                <img
                                    src={Iphone}
                                    alt=""
                                    className="groupOfProducts_content_objects_object-img"
                                />{" "}
                                <div className="groupOfProducts_content_objects_object_info">
                                    <div className="groupOfProducts_content_objects_object_info_buttons">
                                        <button className="groupOfProducts_content_objects_object_info_button">
                                            <img src={heart} alt="" />
                                        </button>
                                        <Link
                                            to={"/differences"}
                                            className="groupOfProducts_content_objects_object_info_button"
                                        >
                                            <img src={differences} alt="" />
                                        </Link>
                                    </div>
                                    <div className="groupOfProducts_content_objects_object_info_advantage">
                                        <div className="groupOfProducts_content_objects_object_info_advantage_title">
                                            <h1 className="groupOfProducts_content_objects_object_info_advantage-name">
                                                Apple iPhone 13 Pro Max 256 ГБ
                                                серый
                                            </h1>
                                            <h1 className="groupOfProducts_content_objects_object_info_advantage-price">
                                                78 999 ₽
                                            </h1>
                                        </div>
                                        <div className="groupOfProducts_content_objects_object_info_advantage_info">
                                            <div className="groupOfProducts_content_objects_object_info_advantage_info_block1">
                                                <h1 className="groupOfProducts_content_objects_object_info_advantage_info_block1-text">
                                                    ✓ Dual Sim, 3G, 4G, 5G,
                                                    VoLTE, Wi-Fi, NFC
                                                </h1>
                                                <h1 className="groupOfProducts_content_objects_object_info_advantage_info_block1-text">
                                                    ✓ 6.1 inches, 1170 x 2532 px
                                                    Display with Small Notch
                                                </h1>
                                                <h1 className="groupOfProducts_content_objects_object_info_advantage_info_block1-text">
                                                    ✓ Bionic A15, Hexa Core,
                                                    3.22 GHz Processor
                                                </h1>
                                                <h1 className="groupOfProducts_content_objects_object_info_advantage_info_block1-text">
                                                    ✓ 12 MP + 12 MP Dual Rear &
                                                    12 MP Front Camera
                                                </h1>
                                            </div>
                                            <div className="groupOfProducts_content_objects_object_info_advantage_info_block2">
                                                <h1 className="groupOfProducts_content_objects_object_info_advantage_info_block1-text">
                                                    ✓ 4 GB RAM, 128 GB inbuilt
                                                </h1>
                                                <h1 className="groupOfProducts_content_objects_object_info_advantage_info_block1-text">
                                                    ✕ Memory Card Not Supported
                                                </h1>
                                                <h1 className="groupOfProducts_content_objects_object_info_advantage_info_block1-text">
                                                    ✓ 3240 mAh Battery with Fast
                                                    Charging
                                                </h1>
                                                <h1 className="groupOfProducts_content_objects_object_info_advantage_info_block1-text">
                                                    ✓ iOS v15
                                                </h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="groupOfProducts_content_objects_object_characteristics">
                                    <div className="phone_info_infos ">
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
                                    <button className="groupOfProducts_content_objects_object_characteristics_button">
                                        Перейти к товару
                                    </button>
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

export default GroupOfProducts;
