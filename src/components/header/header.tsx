import React from "react";
import headerLogo from "../../assets/header-logo.png";
import "./header.css";
import HeaderButtonHeart from "../../assets/heart.png";
import HeaderButtonChart from "../../assets/chart.png";
import HeaderButtonFrame from "../../assets/frame.png";
import { Link } from "react-router-dom";


function Header() {
    return (
        <>
            <section className="header">
                <div className="container">
                    <div className="header_content">
                        <div className="header_content_info">
                            <div className="header_logo_content">
                                <div className="header-logo">
                                    <img
                                        src={headerLogo}
                                        alt=""
                                        className="header-logo-img"
                                    />
                                    <h1 className="header_logo-text">Behoof</h1>
                                </div>
                                <h1 className="header-logo-info">
                                    Лучшие цены в интернет-магазинах
                                </h1>
                            </div>
                            <div className="header_center_info_search_content">
                                <div className="header_center_info_search_catalog">
                                    Каталог товаров ↓
                                </div>
                                <input
                                    placeholder="Поиск товаров"
                                    type="text"
                                    className="header_center_info_search_content-input"
                                />
                            </div>
                            <div className="header_nav">
                                <button className="header_nav-button">
                                    <img src={HeaderButtonHeart} alt="" />
                                </button>
                                <button className="header_nav-button">
                                    <img src={HeaderButtonChart} alt="" />
                                </button>
                                <Link to={} className="header_nav-button">
                                    <img src={HeaderButtonFrame} alt="" />
                                </Link>
                            </div>
                        </div>
                        <div className="header_info">
                            <div className="header_info_left_block"></div>
                            <div className="header_info_right_block"></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Header;
