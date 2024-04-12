import React, { useState } from "react";
import "./groupOfProducts.css";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import { Link } from "react-router-dom";

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
                                <div className="groupOfProducts_content_search_fillter_battery"></div>
                                <div className="groupOfProducts_content_search_fillter_camera"></div>
                            </div>
                        </div>
                        <div className="groupOfProducts_content_objects"></div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default GroupOfProducts;
