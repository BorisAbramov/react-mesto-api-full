import React, { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

const InfoToolTip = ({ isOpen, onClose, name }) => {
  const { authUserData, isSignedUp } = useContext(CurrentUserContext);

  // console.log(authUserData.message)
  return (
    <section
      className={`popup ${
        isOpen ? "popup_is-opened" : ""
      }`}
      id={`edit-${name}`}
      onClick={onClose}
    >
      <div className="popup__content popup__content_size-s">
        <div
          className={`popup__icon ${
            isSignedUp
              ? "popup__icon_status_ok"
              : "popup__icon_status_err"
          }`}
        />
        <h2 className="popup__title">
          {authUserData.message}
        </h2>
        <button
          arial-lable="Закрыть форму без сохранения данных"
          tittle="Закрыть"
          type="button"
          className="popup__close"
          onClick={onClose}
        />
      </div>
    </section>
  );
};

export default InfoToolTip;