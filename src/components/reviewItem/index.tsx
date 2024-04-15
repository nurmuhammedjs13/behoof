import "./style.css";
import star from "../../assets/star.svg";
import reviewImg from "../../assets/Avatar1.png";

function Review() {
    return (
        <div className="review">
            <div className="review__content">
                <>
                    <div className="review__header">
                        <img
                            src={reviewImg}
                            alt=""
                            className="review__header__img"
                        />
                        <div className="review__header__info">
                            <h5 className="review__header__title">
                                Jerome Bell
                            </h5>
                            <div className="review__header__review">
                                <div className="header__review__star">
                                    <img
                                        src={star}
                                        alt=""
                                        className="review__star"
                                    />
                                    <img
                                        src={star}
                                        alt=""
                                        className="review__star"
                                    />
                                    <img
                                        src={star}
                                        alt=""
                                        className="review__star"
                                    />
                                    <img
                                        src={star}
                                        alt=""
                                        className="review__star"
                                    />
                                    <img
                                        src={star}
                                        alt=""
                                        className="review__star"
                                    />
                                    <p className="header__review__date">
                                        12.10.23
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="review__info">
                        <h3 className="review__info__title">
                            Восхитительный мобильный
                        </h3>
                        <p className="review__info__text">
                            Я перешел с Samsung через 7 лет без iPhone, так что
                            это, странно и возвращаюсь, однако я еще не был
                            разочарован, единственное, чего мне может не
                            хватать, это лучшей, камеры, но этого достаточно,
                            вам нужно все выяснить ещеz раз, но, очевидно,
                            рекомендация отсюда 😁 💪🏼
                        </p>
                    </div>
                </>
            </div>
        </div>
    );
}

export default Review;
