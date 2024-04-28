import Header from "../../components/header/header";
import { Link } from "react-router-dom";
import profile from "../../assets/profile.png";
import profile2 from "../../assets/profile2.png";
import "../../pages/profile/index.css";
import profile3 from "../../assets/profile3.png";
import Footer from "../../components/footer/footer";

// document
//   .getElementById("registrationForm")!
//   .addEventListener("submit", function (event) {
//     event.preventDefault();

//     const usernameInput = document.getElementById(
//       "username"
//     ) as HTMLInputElement;
//     const emailInput = document.getElementById("email") as HTMLInputElement;
//     const passwordInput = document.getElementById(
//       "password"
//     ) as HTMLInputElement;
//     const confirmPasswordInput = document.getElementById(
//       "confirmPassword"
//     ) as HTMLInputElement;

//     const username: string = usernameInput.value;
//     const email: string = emailInput.value;
//     const password: string = passwordInput.value;
//     const confirmPassword: string = confirmPasswordInput.value;

//     if (password !== confirmPassword) {
//       alert("Пароли не совпадают");
//       return;
//     }

//     fetch("/register", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         username: username,
//         email: email,
//         password: password,
//       }),
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Ошибка при регистрации");
//         }
//         return response.json();
//       })
//       // .then(data => {
//       //     alert("Регистрация прошла успешно!");
//       // })
//       .catch((error) => {
//         alert(error.message);
//       });
//   });

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
            <form id="registrationForm" className="profile__cards__card">
              <h3 className="profile__cards__card-logo">Sign up</h3>

              <div className="profile__cards__card__title">
                <p className="profile__cards__card__title-text">Полное имя</p>
                <input
                  type="text"
                  id="username"
                  placeholder="Имя пользователя"
                  required
                  className="profile__cards__card__title-input"
                ></input>
                <hr className="profile__cards__card__title-hr" />
              </div>
              <div className="profile__cards__card__title">
                <p className="profile__cards__card__title-text">
                  Электронная почта
                </p>
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  required
                  className="profile__cards__card__title-input"
                ></input>
                <hr className="profile__cards__card__title-hr" />
              </div>
              <div className="profile__cards__card__title">
                <p className="profile__cards__card__title-text">
                  Введите пароль
                </p>
                <input
                  type="password"
                  id="password"
                  placeholder="Пароль"
                  required
                  className="profile__cards__card__title-input"
                ></input>
                <hr className="profile__cards__card__title-hr" />
              </div>
              <div className="profile__cards__card__title">
                <p className="profile__cards__card__title-text">
                  Подтвердите еще раз
                </p>
                <input
                  type="password"
                  id="confirmPassword"
                  placeholder="Подтвердите пароль"
                  required
                  className="profile__cards__card__title-input"
                ></input>
                <hr className="profile__cards__card__title-hr" />
              </div>
              <p className="profile__cards__card__title-text">
                i agree to the Terms of User
              </p>
              <div className="profile__cards__card__icons">
                <button
                  type="submit"
                  className="profile__cards__card__icons-but"
                >
                  Зарегистрироваться
                </button>
                <button className="profile__cards__card__icons-but2">
                  Войти ➩
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Profile;
