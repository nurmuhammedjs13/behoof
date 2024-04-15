import home from "../../assets/phonePanelhome.png";
import search from "../../assets/phonePanelsearch.png";
import Favorites from "../../assets/heart.png";
import Differences from "../../assets/chart.png";
import Profile from "../../assets/frame.png";
import "./phonePanel.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { toggleShow } from "../../store/slices/category";

function PhonePanel() {
    const toShow = useSelector((state: RootState) => state.categories.show);

    const dispatch = useDispatch();

    function toShows() {
        dispatch(toggleShow());
    }
    return (
        <>
            <section className="phonePanel">
                <div className="phonePanel_content">
                    <Link to={"/"} className="phonePanel_content_button">
                        <img src={home} className="pjonepanel_icon" alt="" />
                        Главная
                    </Link>
                    <button
                        onClick={toShows}
                        className="phonePanel_content_button"
                    >
                        <img src={search} className="pjonepanel_icon" alt="" />
                        Каталог
                    </button>
                    <Link
                        to={"/favorites"}
                        className="phonePanel_content_button"
                    >
                        <img
                            src={Favorites}
                            className="pjonepanel_icon"
                            alt=""
                        />
                        Избранное
                    </Link>
                    <Link
                        to={"/differences"}
                        className="phonePanel_content_button"
                    >
                        <img
                            src={Differences}
                            className="pjonepanel_icon"
                            alt=""
                        />
                        Сравнения
                    </Link>
                    <Link to={"/profile"} className="phonePanel_content_button">
                        <img src={Profile} className="pjonepanel_icon" alt="" />
                        Профиль
                    </Link>
                </div>
            </section>
        </>
    );
}

export default PhonePanel;
