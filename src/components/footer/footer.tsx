import React from "react";
import vk from "../../assets/VK.png";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="cards">
            <div className="cards__card">
              <div className="cards__logo">
                <a href=""></a>
                <h3 className="cards__logo-text">Behoof</h3>
              </div>
              <div className="cards__info">
                <p className="cards__info-logo">Мы в соц сетях</p>
                <div className="cards__info__icons">
                  <a href="">{vk}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
