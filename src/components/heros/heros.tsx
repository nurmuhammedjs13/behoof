import besh from "../../assets/Number.png";
import otuz from "../../assets/number1.png";
import uchjuz from "../../assets/Number2.png";
import segiz from "../../assets/Number3.png";
import "../../components/heros/index.css";
import google from "../../assets/logo.png";
import group from "../../assets/_Group_.png";
import iphone from "../../assets/iPhone.png";

function Heros() {
  return (
    <>
      <div className="heros">
        <div className="container">
          <h3 className="heros-logo">
            Наша цель - создать фантастический <br /> сервис для всех
            потребителей
          </h3>
          <div className="heros__cards">
            <div className="heros__cards__card">
              <img src={besh} alt="" />
              <p className="heros__cards__card-text">
                Lorem ipsum dolor sit amet consectetur. <br /> Rhoncus risus
                nunc a pharetra viverra enim <br /> nunc.{" "}
              </p>
            </div>
            <div className="heros__cards__card">
              <img src={otuz} alt="" />
              <p className="heros__cards__card-text">
                Gravida vel convallis id aliquet volutpat <br /> nullam
                dignissim. Amet parturient <br /> elementum lectus rhoncus at.
              </p>
            </div>
            <div className="heros__cards__card">
              <img src={uchjuz} alt="" />
              <p className="heros__cards__card-text">
                Sed varius ut venenatis id amet et <br /> consectetur
                pellentesque. Vitae urna ornare <br /> vel suspendisse
                tincidunt.
              </p>
            </div>
            <div className="heros__cards__card">
              <img src={segiz} alt="" />
              <p className="heros__cards__card-text">
                Id enim ornare lacus duis. Ac fermentum <br /> auctor cras
                adipiscing feugiat quis convallis <br /> velit.
              </p>
            </div>
          </div>
          <div className="warrior">
            <div className="warrior__cards">
              <div className="warrior__cards__card">
                <h3 className="warrior__card-text">Экономьте</h3>
                <h3 className="warrior__card-tekst">свое время и получайте</h3>
                <h3 className="warrior__card-text">максимум</h3>
                <h3 className="warrior__card-text">от ежедневных покупок</h3>
                <div className="warrior__card__icons">
                  <div className="warrior__card__icons__icon">
                    <img className="warrior-imgg" src={google} alt="" />
                    <a href="" className="warrior__card__icons__icon-text">
                      Доступно в <br />
                      Google Play
                    </a>
                  </div>
                  <div className="warrior__card__icons__icon">
                    <img className="warrior-imgg" src={group} alt="" />
                    <a href="" className="warrior__card__icons__icon-text">
                      Загрузите <br />
                      App Store
                    </a>
                  </div>
                </div>
              </div>
              <div className="warrior__cards__card">
                <img className="warrior-img" src={iphone} alt="" />
                <img className="warrior-img1" src={iphone} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Heros;
