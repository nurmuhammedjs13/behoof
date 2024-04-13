import { useDispatch } from "react-redux";
import "./index.css";
import { toggleShow } from "../../store/slices/category";

function Header_content() {
    // const toShow = useSelector((state: RootState) => state.categories.show);

    const dispatch = useDispatch();

    function toShows() {
        dispatch(toggleShow());
    }

    return (
        <>
            <section className="header_content">
                <div className="container">
                    <div className="header_info">
                        <div className="header_info_left_block">
                            <div className="header_info_left_block-content">
                                <h1 className="header_info__left_block-text">
                                    1.8 млн товаров в 2272 магазинах найди,
                                    сравни, выберай!
                                </h1>
                            </div>
                            <button onClick={toShows} className="header_info_left_block-button">
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
                </div>
            </section>
        </>
    );
}

export default Header_content;
