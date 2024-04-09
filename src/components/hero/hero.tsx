import besh from "../../assets/Number.png";
import otuz from "../../assets/number1.png";
import uchjuz from "../../assets/Number2.png";
import segiz from "../../assets/Number3.png";
import Apple from "../../assets/_Group_.png";
import google from "../../assets/logo.png";
import iphone from "../../assets/iPhone.png";
import miniIp from "../../assets/MiniiPhone.png";
import "../../components/hero/index.css";

function Hero() {
  return (
    <>
      <div className="hero">
        <div className="container">
          <h1 className="hero-logo">
            Наша цель - создать фантастический <br /> сервис для всех
            потребителей
          </h1>
          <div className="hero__cards">
            <div className="hero__cards__card">
              <img src={besh} alt="" />
              <p className="hero__card-text">
                Lorem ipsum dolor sit amet consectetur. <br /> Rhoncus risus
                nunc a pharetra viverra enim <br /> nunc.
              </p>
            </div>
            <div className="hero__cards__card">
              <img src={otuz} alt="" />
              <p className="hero__card-text">
                Gravida vel convallis id aliquet volutpat <br /> nullam
                dignissim. Amet parturient <br /> elementum lectus rhoncus at.
              </p>
            </div>
            <div className="hero__cards__card">
              <img src={uchjuz} alt="" />
              <p className="hero__card-text">
                Sed varius ut venenatis id amet et <br /> consectetur
                pellentesque. Vitae urna ornare <br /> vel suspendisse
                tincidunt.
              </p>
            </div>
            <div className="hero__cards__card">
              <img src={segiz} alt="" />
              <p className="hero__card-text">
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
                <h3 className="warrior__card-tekst">от ежедневных покупок</h3>
                <div className="warrior__card__icons">
                  <div className="warrior__card__icons__icon">
                    <img src={google} alt="" />
                    <a className="warrior__card__icons__icon-text" href="">
                      Доступно в <br /> google Play
                    </a>
                  </div>
                  <div className="warrior__card__icons__icon">
                    <img src={Apple} alt="" />
                    <a className="warrior__card__icons__icon-text" href="">
                      Загрузите в <br /> App Store
                    </a>
                  </div>
                </div>
              </div>
              <div className="warrior__card">
                <img className="warrior-img" src={iphone} alt="" />
                <img className="warrior-img1" src={miniIp} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
