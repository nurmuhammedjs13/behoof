import Header from "../../components/header/header";
import { Link } from "react-router-dom";
import profile from "../../assets/profile.png";
import profile2 from "../../assets/profile2.png";
import "../../pages/profile/index.css";
import profile3 from "../../assets/profile3.png";
import Footer from "../../components/footer/footer";

function Profile() {
  return (
    <>
      <Header />
      <div className="profile">
        <div className="container">
          <Link className="profile-click" to={"/"}>
            ⇐Главная
          </Link>
          <div className="profile__cards">
            <div className="profile__cards__card1">
              <img className="profile-img" src={profile} alt="" />
              <img className="profile-img" src={profile2} alt="" />
              <img className="profile-img3" src={profile3} alt="" />
            </div>
            <div className="profile__cards__card">
              <h3 className="profile__cards__card-logo">Sign up</h3>

              <div className="profile__cards__card__title">
                <p className="profile__cards__card__title-text">Full name</p>
                <input className="profile__cards__card__title-input"></input>
                <hr className="profile__cards__card__title-hr" />
              </div>
              <div className="profile__cards__card__title">
                <p className="profile__cards__card__title-text">Email</p>
                <input className="profile__cards__card__title-input"></input>
                <hr className="profile__cards__card__title-hr" />
              </div>
              <div className="profile__cards__card__title">
                <p className="profile__cards__card__title-text">Username</p>
                <input className="profile__cards__card__title-input"></input>
                <hr className="profile__cards__card__title-hr" />
              </div>
              <div className="profile__cards__card__title">
                <p className="profile__cards__card__title-text">Password</p>
                <input className="profile__cards__card__title-input"></input>
                <hr className="profile__cards__card__title-hr" />
              </div>
              <div className="profile__cards__card__title">
                <p className="profile__cards__card__title-text">
                  Repeat Password
                </p>
                <input className="profile__cards__card__title-input"></input>
                <hr className="profile__cards__card__title-hr" />
              </div>
              <p className="profile__cards__card__title-text">
                i agree to the Terms of User
              </p>
              <div className="profile__cards__card__icons">
                <button className="profile__cards__card__icons-but">
                  Sign up
                </button>
                <button className="profile__cards__card__icons-but2">
                  Sign in ➩
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Profile;
