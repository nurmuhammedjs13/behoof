import React, { useState } from "react";
import "./DropDown.css";

interface Props {
  onSelect: (value: string) => void;
  defaultValue: string;
  data: string[];
}

const DropDown: React.FC<Props> = () => {
  // const [currentValue, setCurrentValue] = useState(defaultValue);
  const [show, setShow] = useState(true);

  return (
    <div className="DropDown-wrap">
      <button className="dropdown-defaultValue" onClick={() => setShow(!show)}>
        {"Категория товаров ↓"}
      </button>

      <div className={show ? "dropdown-hidden" : "dropdown-visible"}>
        <div className="categories_content">
          <div className="categories_content_info">
            <h1 className="categories_content_info_title">Каталог товаров</h1>
            <div className="categories_content_info_buttons">
              <div className="categories_content_info_block1">
                <button className="categories_content_info-button top">
                  Смартфоны
                  <h1 className="categories_content_info-button-icon">»</h1>
                </button>
                <button className="categories_content_info-button">
                  Ноутбуки
                  <h1 className="categories_content_info-button-icon">»</h1>
                </button>
                <button className="categories_content_info-button">
                  Планшеты
                  <h1 className="categories_content_info-button-icon">»</h1>
                </button>
                <button className="categories_content_info-button low">
                  Умные часы
                  <h1 className="categories_content_info-button-icon">»</h1>
                </button>
              </div>
              <div className="categories_content_info_block2">
                {" "}
                <button className="categories_content_info-button top">
                  Игровые приставки{" "}
                  <h1 className="categories_content_info-button-icon">»</h1>
                </button>
                <button className="categories_content_info-button">
                  Наушники{" "}
                  <h1 className="categories_content_info-button-icon">»</h1>
                </button>
                <button className="categories_content_info-button">
                  Портативные колонки{" "}
                  <h1 className="categories_content_info-button-icon">»</h1>
                </button>
                <button className="categories_content_info-button low">
                  Мониторы{" "}
                  <h1 className="categories_content_info-button-icon">»</h1>
                </button>
              </div>
              <div className="categories_content_info_block3">
                {" "}
                <button className="categories_content_info-button top">
                  Принтеры и сканеры{" "}
                  <h1 className="categories_content_info-button-icon">»</h1>
                </button>
                <button className="categories_content_info-button">
                  Планшеты и электронные книги{" "}
                  <h1 className="categories_content_info-button-icon">»</h1>
                </button>
                <button className="categories_content_info-button">
                  Корпуса и блоки питания{" "}
                  <h1 className="categories_content_info-button-icon">»</h1>
                </button>
                <button className="categories_content_info-button low">
                  аксессуары{" "}
                  <h1 className="categories_content_info-button-icon">»</h1>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropDown;

// {data.map((el) => (
//     <button onClick={() => onSelectHandler(el)}>{el}</button>
// ))}
