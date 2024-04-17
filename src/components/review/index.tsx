import Review from "../reviewItem";
import "./style.css";

function ReviewPage() {
  return (
    <div className="reviewpage">
      <div className="container">
        <p className="review__text">Отзывы</p>
        <div className="card">
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
        </div>
        <div className="btnToCenter">
          <button className="seeMore">Показать еще</button>
        </div>
      </div>
    </div>
  );
}

export default ReviewPage;
