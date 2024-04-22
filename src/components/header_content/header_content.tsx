import { useDispatch } from "react-redux";
import "./header_content.css";
import { toggleShow } from "../../store/slices/category";

function Header_content() {
  // const toShow = useSelector((state: RootState) => state.categories.show);

  const dispatch = useDispatch();

  function toShows() {
    dispatch(toggleShow());
    console.log("work");
  }

  return (
    <>
      <section className="header_content">
        <div className="container">
          <div className="header_info">
            <div className="header_info_left_block">
              <div className="header_info_left_block-content">
                <h1 className="header_info__left_block-text">
                  <h1 className="orange_header_text">1.8</h1> млн товаров в
                  <h1 className="orange_header_text">2272</h1> магазинах
                </h1>
                <h1 className="header_info__left_block-text">
                  найди, сравни, выберай!
                </h1>
              </div>
              <button
                onClick={toShows}
                className="header_info_left_block-button"
              >
                Перейти к категориям →
              </button>
            </div>
            <div className="header_info_right_block">
              <div className="header_info__right_block-content">
                <h1 className="header_info__right_block-text">
                  <div className="div_for_orange">
                    <h1 className="orange_header_text">Топ-10</h1>
                    смартфонов
                  </div>
                  2023 года
                </h1>
              </div>
              <a href={"/pageNot"} className="header_info_right_block-button">
                Смотреть →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header_content;
