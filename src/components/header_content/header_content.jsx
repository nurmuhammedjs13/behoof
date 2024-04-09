import "./index.css";

import React from "react";

function Header_content() {
    return (
        <>
            <div className="header_info">
                <div className="header_info_left_block">
                    <div className="header_info_left_block-content">
                        <h1 className="header_info__left_block-text">
                            1.8 млн товаров в 2272 магазинах найди, сравни,
                            выберай!
                        </h1>
                    </div>
                    <button className="header_info_left_block-button">
                        Перейти к категориям →
                    </button>
                </div>
                <div className="header_info_right_block">
                    <div className="header_info__right_block-content">
                        <h1 className="header_info__right_block-text">
                            Топ-10 смартфонов 2023 года
                        </h1>
                    </div>
                    <button className="header_info_right_block-button">
                        Смотреть →
                    </button>
                </div>
            </div>
        </>
    );
}

export default Header_content;
