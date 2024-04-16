import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import { Link } from "react-router-dom";
import "../../pages/pageNot/pageNot.css";

function PageNot() {
  return (
    <>
      <Header />
      <div className="page">
        <img src="" alt="" />
        <div className="container">
          <div className="page__cards">
            <h1 className="page__cards-logo">Упс...</h1>
            <h3 className="page__cards-tekst">Страница не найдена</h3>
            <p className="page__cards-text">
              Тут что то упало и это не страшно! <br /> Но мы все сохранили
            </p>
            <Link to={"/"} className="page__cards-but">
              Перейти на главную
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PageNot;
