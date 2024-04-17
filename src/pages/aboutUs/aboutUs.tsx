import { Link } from "react-router-dom";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import "../../pages/aboutUs/aboutUs.css";

function AboutUs() {
  return (
    <>
      <Header />
      <div className="aboutUs">
        <div className="container">
          <div className="aboutUs__content">
            <Link to={"/"} className="aboutUs__content-logo">
              Главная
            </Link>
            <hr className="aboutUs__content-hr" />
            <h1 className="aboutUs__content-text">О компании</h1>
          </div>
          <div className="aboutUs__cards">
            <h1 className="aboutUs__cards-logo">
              Компания «Behoof» была основана в 2000 году.
            </h1>
            <p className="aboutUs__cards-text">
              Более, чем за 20 лет своей непрерывной деятельности компания
              «Behoof» завоевала лидирующие позиции на рынке Кыргызстана и стала
              ведущим ритейлером сотовых телефонов.
            </p>
            <p className="aboutUs__cards-text">
              На сегодняшний день в салонах компании представлена продукция
              таких ведущих брендов, как Samsung, Apple, Xiaomi, Realme.
            </p>
            <p className="aboutUs__cards-text">
              Диапазон продаваемых сотовых телефонов весьма разнообразен и
              широк: от самой простой модели бюджетной линейки до смартфонов и
              планшетов.
            </p>
            <p className="aboutUs__cards-text">
              В апреле 2008 года компания «Behoof» стала официальным
              дистрибьютором компании SAMSUNG.
            </p>
            <p className="aboutUs__cards-text">
              Благодаря этому сотрудничеству наши покупатели могут приобрести
              качественный товар с официальным гарантийным обслуживанием,
              непосредственно от компании изготовителя, в Авторизованном
              сервисном центре.
            </p>
            <p className="aboutUs__cards-text">
              Товар этих брендов также поддерживается официальной гарантией от
              заводов изготовителей.
            </p>
            <p className="aboutUs__cards-text">
              Для максимального удовлетворения потребностей покупателей, наша
              компания занимается продажей сопутствующих товаров и аксессуаров
            </p>
            <a className="aboutUs__cards-tekst" href={"/groupOfProducts"}>
              к сотовым телефонам:
            </a>
            <p className="aboutUs__cards-text">
              гаджеты, bluetooth-гарнитуры, батареи, флеш-карты, зарядные
              устройства, чехлы и многое другое. Ассортимент постоянно
              обновляется с учетом тенденций моды и предпочтений потребителей.
            </p>
            <p className="aboutUs__cards-text">
              Вся техника, представленная на наших витринах, соответствует
              современным стандартам качества и обеспечена гарантией.
            </p>
            <p className="aboutUs__cards-text">
              Для своих покупателей компания «Мой телефон» регулярно проводит
              интересные акции с возможностью получить скидку, подарок или
              выиграть ценный приз.
            </p>
            <p className="aboutUs__cards-text">
              Наше сотрудничество с банками позволяет нашим покупателям
              приобрести товар в кредит и рассрочку на удобных и выгодных
              условиях для клиентов.
            </p>
            <h1 className="aboutUs__cards-logo">Оптовая продажа</h1>
            <p className="aboutUs__cards-text">
              Компания «Мой телефон» представляет широкий ассортимент телефонов,
              смартфонов, планшетов. Являясь прямыми поставщиками, мы поможем
              Вам обойти посредническую цену и сделаем Вам, выгодное предложение
              на все позиции.
            </p>
            <p className="aboutUs__cards-text">
              Имея многолетний опыт работы в сфере торговли, сотрудники нашей
              компании максимально учитывают интересы и пожелания клиентов.
            </p>
            <h1 className="aboutUs__cards-logo">
              Сегодня компания «Behoof» это:
            </h1>
            <li className="aboutUs__cards-li">большой ассортимент</li>
            <li className="aboutUs__cards-li">
              гибкие цены (возможность дополнительных скидок)
            </li>
            <li className="aboutUs__cards-li">
              постоянные поступления на склад и расширение ассортимента
            </li>
            <li className="aboutUs__cards-li">
              индивидуальный подход к каждому клиенту
            </li>
            <li className="aboutUs__cards-li">
              гарантия высокого качества всех товаров
            </li>
            <hr className="aboutUs__content-hr" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AboutUs;
