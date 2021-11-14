import React, { useState } from "react";
import Header from "./Header";
import InitialPageWithForm from "./InitialPageWithForm";

const Register = ({ handleRegister, isSubmitted }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userData.password || !userData.email) {
      return;
    }
    handleRegister(userData.email, userData.password, userData.confirmPassword);
  };

  return (
    <>
      <Header
        mix={"page__header section"}
        buttonText={"Войти"}
        endPoint={"/sign-in"}
      />
      <InitialPageWithForm
        name={"user-sign-up"}
        title={"Регистрация"}
        button={!isSubmitted ? "Зарегистрироваться" : "Идет регистрация"}
        onSubmit={handleSubmit}
        userSignUp={"Войти"}
        isSubmitted={isSubmitted}
      >
        <input
          className="login__input"
          type="email"
          value={userData.email}
          id="email"
          name="email"
          placeholder="Email"
          colormodifier={"form__login-input"}
          required={true}
          minLength="2"
          onChange={handleChange}
        />
        <input
          className="login__input"
          type="password"
          value={userData.password}
          id="password"
          name="password"
          placeholder="Пароль"
          colormodifier={"form__login-input"}
          required={true}
          onChange={handleChange}
        />
        <input
          className="login__input"
          type="password"
          value={userData.confirmPassword}
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Подтвердите пароль"
          colormodifier={"form__login-input"}
          required={true}
          onChange={handleChange}
        />
      </InitialPageWithForm>
    </>
  );
};

export default Register;