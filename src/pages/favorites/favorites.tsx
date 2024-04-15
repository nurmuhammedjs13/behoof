import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import trash from "../../assets/differences_trash.png";
import hearticon from "../../assets/heart.png";
import Iphoneicon from "../../assets/Apple.png";

function Favorites() {
  return (
    <>
      <Header />
      <section className="favorites">
        <div className="container">
          <div className="favorites_content">
            <div className="differences_obj_products">
              <button className="differences_obj_product">
                <div className="differences_obj_product_img">
                  <img src={Iphoneicon} alt="" />
                  <button className="differences_obj_product_img-trash_button">
                    <img src={trash} alt="" />
                  </button>
                </div>
                <div className="differences_obj_product_info">
                  <div className="differences_obj_product_info_hero">
                    <h1 className="differences_obj_product_info_hero-title">
                      Смартфоны
                    </h1>
                    <h1 className="differences_obj_product_info_hero-product">
                      Apple iPhone 13 Pro Max 256 ГБ серый{" "}
                    </h1>
                  </div>
                  <div className="differences_obj_product_info_price">
                    <div className="differences_obj_product_info_price_block">
                      <h1 className="differences_obj_product_info_price_block-text">
                        Цена
                      </h1>
                      <h1 className="differences_obj_product_info_price_block-count">
                        {" "}
                        114 099 ₽
                      </h1>
                    </div>
                    <button className="differences_obj_product_info_price_button">
                      <img src={hearticon} alt="" />
                    </button>
                  </div>
                </div>
              </button>
              <button className="differences_obj_product">
                <div className="differences_obj_product_img">
                  <img src={Iphoneicon} alt="" />
                  <button className="differences_obj_product_img-trash_button">
                    <img src={trash} alt="" />
                  </button>
                </div>
                <div className="differences_obj_product_info">
                  <div className="differences_obj_product_info_hero">
                    <h1 className="differences_obj_product_info_hero-title">
                      Смартфоны
                    </h1>
                    <h1 className="differences_obj_product_info_hero-product">
                      Apple iPhone 13 Pro Max 256 ГБ серый{" "}
                    </h1>
                  </div>
                  <div className="differences_obj_product_info_price">
                    <div className="differences_obj_product_info_price_block">
                      <h1 className="differences_obj_product_info_price_block-text">
                        Цена
                      </h1>
                      <h1 className="differences_obj_product_info_price_block-count">
                        {" "}
                        114 099 ₽
                      </h1>
                    </div>
                    <button className="differences_obj_product_info_price_button">
                      <img src={hearticon} alt="" />
                    </button>
                  </div>
                </div>
              </button>
              <button className="differences_obj_product">
                <div className="differences_obj_product_img">
                  <img src={Iphoneicon} alt="" />
                  <button className="differences_obj_product_img-trash_button">
                    <img src={trash} alt="" />
                  </button>
                </div>
                <div className="differences_obj_product_info">
                  <div className="differences_obj_product_info_hero">
                    <h1 className="differences_obj_product_info_hero-title">
                      Смартфоны
                    </h1>
                    <h1 className="differences_obj_product_info_hero-product">
                      Apple iPhone 13 Pro Max 256 ГБ серый{" "}
                    </h1>
                  </div>
                  <div className="differences_obj_product_info_price">
                    <div className="differences_obj_product_info_price_block">
                      <h1 className="differences_obj_product_info_price_block-text">
                        Цена
                      </h1>
                      <h1 className="differences_obj_product_info_price_block-count">
                        {" "}
                        114 099 ₽
                      </h1>
                    </div>
                    <button className="differences_obj_product_info_price_button">
                      <img src={hearticon} alt="" />
                    </button>
                  </div>
                </div>
              </button>
              <button className="differences_obj_product">
                <div className="differences_obj_product_img">
                  <img src={Iphoneicon} alt="" />
                  <button className="differences_obj_product_img-trash_button">
                    <img src={trash} alt="" />
                  </button>
                </div>
                <div className="differences_obj_product_info">
                  <div className="differences_obj_product_info_hero">
                    <h1 className="differences_obj_product_info_hero-title">
                      Смартфоны
                    </h1>
                    <h1 className="differences_obj_product_info_hero-product">
                      Apple iPhone 13 Pro Max 256 ГБ серый{" "}
                    </h1>
                  </div>
                  <div className="differences_obj_product_info_price">
                    <div className="differences_obj_product_info_price_block">
                      <h1 className="differences_obj_product_info_price_block-text">
                        Цена
                      </h1>
                      <h1 className="differences_obj_product_info_price_block-count">
                        {" "}
                        114 099 ₽
                      </h1>
                    </div>
                    <button className="differences_obj_product_info_price_button">
                      <img src={hearticon} alt="" />
                    </button>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Favorites;
