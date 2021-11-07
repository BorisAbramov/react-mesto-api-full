import React, { useState } from "react";
import Header from "./Header";
import InitialPageWithForm from "./InitialPageWithForm";

const Login = ({ handleLogin, isSubmitted }) => {
  
  const [userData, setUserData] = useState({ email: "", password: "" });

  
  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserData({
      ...userData,
      [name]: value,
    });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userData.email || !userData.password) {
      return;
    }

    handleLogin(userData.password, userData.email);
  };

  return (
    <>
      <Header
        buttonText={"Регистрация"}
        endPoint={"/sign-up"}
      />

      <InitialPageWithForm
        name={"user-sign-in"}
        title={"Войти"}
        button={!isSubmitted ? "Войти" : "Выполняется вход"}
        onSubmit={handleSubmit}
        isSubmitted={isSubmitted}
      >
        <input
          className="login__input"
          type="email"
          value={userData.email}
          id="email"
          placeholder="Email"
          name="email"
          required={true}
          onChange={handleChange}
        />
        <input
          className="login__input"
          type="password"
          value={userData.password}
          id="password"
          placeholder="Пароль"
          name="password"
          required={true}
          onChange={handleChange}
        />
      </InitialPageWithForm>
    </>
  );
};

export default Login;