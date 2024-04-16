import "./DropDown.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { toggleShow } from "../../store/slices/category";

interface Props {
  onSelect: (value: string) => void;
  defaultValue: string;
  data: string[];
}

//asd

const DropDown: React.FC<Props> = () => {
  const toShow = useSelector((state: RootState) => state.categories.show);

  const dispatch = useDispatch();

  function toShows() {
    dispatch(toggleShow());
  }

  return (
    <div className="DropDown-wrap">
      <button className="dropdown-defaultValue" onClick={toShows}>
        {"Категория товаров ↓"}
      </button>

      <div className={toShow ? "dropdown-hidden" : "dropdown-visible"}>
        <button onClick={toShows} className="categories_content">
          <div className="categories_content_info">
            <div className="categories_content_info-title">
              <h1 className="categories_content_info_title-text">
                Каталог товаров
              </h1>
            </div>
            <div className="categories_content_info_buttons">
              <div className="categories_content_info_block1">
                <Link
                  to={"/groupOfProducts"}
                  className="categories_content_info-button top"
                >
                  Смартфоны
                  <h1 className="categories_content_info-button-icon">»</h1>
                </Link>
                <Link to={""} className="categories_content_info-button">
                  Ноутбуки
                  <h1 className="categories_content_info-button-icon">»</h1>
                </Link>
                <Link to={""} className="categories_content_info-button">
                  Планшеты
                  <h1 className="categories_content_info-button-icon">»</h1>
                </Link>
                <Link to={""} className="categories_content_info-button low">
                  Умные часы
                  <h1 className="categories_content_info-button-icon">»</h1>
                </Link>
              </div>
              <div className="categories_content_info_block2">
                {" "}
                <Link to={""} className="categories_content_info-button top">
                  Игровые приставки{" "}
                  <h1 className="categories_content_info-button-icon">»</h1>
                </Link>
                <Link to={""} className="categories_content_info-button">
                  Наушники{" "}
                  <h1 className="categories_content_info-button-icon">»</h1>
                </Link>
                <Link to={""} className="categories_content_info-button">
                  Портативные колонки{" "}
                  <h1 className="categories_content_info-button-icon">»</h1>
                </Link>
                <Link to={""} className="categories_content_info-button low">
                  Мониторы{" "}
                  <h1 className="categories_content_info-button-icon">»</h1>
                </Link>
              </div>
              <div className="categories_content_info_block3">
                {" "}
                <Link to={""} className="categories_content_info-button top">
                  Принтеры и сканеры{" "}
                  <h1 className="categories_content_info-button-icon">»</h1>
                </Link>
                <Link to={""} className="categories_content_info-button">
                  Планшеты и электронные книги{" "}
                  <h1 className="categories_content_info-button-icon">»</h1>
                </Link>
                <Link to={""} className="categories_content_info-button">
                  Корпуса и блоки питания{" "}
                  <h1 className="categories_content_info-button-icon">»</h1>
                </Link>
                <Link to={""} className="categories_content_info-button low">
                  аксессуары{" "}
                  <h1 className="categories_content_info-button-icon">»</h1>
                </Link>
              </div>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default DropDown;
