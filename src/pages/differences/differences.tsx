import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import trash from '../../assets/differences_trash.png'
import './index.css'

function Differences() {
    return (
        <>
            <Header />
            <section className="differences">
                <div className="container">
                    <div className="differences_content">
                        <div className="differences_content_title">
                            <div className="differences_content_title_nav">
                                <h1 className="differences_content_title_nav-previev">
                                    Главная
                                </h1>
                                <h1 className="differences_content_title_nav-current">
                                    / Сравнение
                                </h1>
                            </div>
                            <div className="differences_content_title_text">
                                <h1 className="differences_content_title_text-text">
                                    Сравнение товаров
                                </h1>
                                <button className="differences_content_title_text-button">
                                    <img src={trash} alt="" /> Удалить все
                                    списки
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Differences;
