import React from "react";
import { Link } from "react-router-dom";

const InitialPageWithForm = ({
  name,
  title,
  onSubmit,
  children,
  button,
  isSubmitted,
  userSignUp,
}) => {
  return (
      <div className="login">
        <h2 className="login__title">{title}</h2>
        <form
          className="login__form"
          id={`${name}`}
          name={`${name}`}
          autoComplete="off"
          onSubmit={onSubmit}
        >
          {children}
          <button
            arial-lable="Подтвердите действие пользователя"
            type="submit"
            className={`login__submit ${
              isSubmitted ? "login__submit_inactive" : ""
            }`}
            disabled={isSubmitted}
          >
            {button}
          </button>

          {userSignUp && (
            <div className="login__footer">
              <p className="login__subtitle">Уже зарегистрированы?&nbsp;
              <Link className="login__subtitle login__link" to="/sign-in">
                {userSignUp}
              </Link>
              </p>
            </div>
          )}
        </form>
      </div>
  );
};

export default InitialPageWithForm;