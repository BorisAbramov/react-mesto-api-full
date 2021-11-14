import React from "react";

function PopupWithForm({
  name,
  title,
  isOpen,
  onClose,
  onSubmit,
  children,
  button,
  idSubmitted,
}) {
  return (
    <div className={`popup ${
      isOpen ? "popup_is-opened" : ""
    }`}
    id={`edit-${name}`}
    onClick={onClose}>
            <div className={`popup__content`}>
                <button
                 type="button" 
                 aria-label="close popup" 
                 className="popup__close" 
                 onClick={onClose} 
                />
                <h3 className="popup__title">{title}</h3>
                <form
                 action="#"
                 id={`${name}`}
                 name={`${name}`}
                 className={`popup__form`}
                 onSubmit={onSubmit}
                 >
                  {children}
                    <button 
                    aria-label="submit form"
                    className="popup__submit popup__submit_disabled"
                    type="submit" disabled={idSubmitted}>{button}</button>
                </form>
            </div>
        </div>
  );
}

export default PopupWithForm;