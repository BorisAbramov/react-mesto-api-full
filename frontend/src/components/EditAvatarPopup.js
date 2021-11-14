import React, { useRef } from "react";
import PopupWithForm from "./PopupWithForm";

const EditAvatarPopup = ({ isOpen, onClose, onUpdateAvatar, isSubmitted }) => {
  const userAvatarRef = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSubmitted) {
      return;
    }

    onUpdateAvatar({
      avatar: userAvatarRef.current.value,
    });

    userAvatarRef.current.value = "";
  };

  

  return (
    <PopupWithForm
      name={"user-avatar"}
      title={"Обновить аватар"}
      button={!isSubmitted ? "Сохранить" : "Сохранение"}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      idSubmitted={isSubmitted}
    >
      <label className="popup__field" htmlFor="avatar-link-input">
        <input
          ref={userAvatarRef}
          type="url"
          className="popup__input"
          id="avatar-link-input"
          name="avatarLinkInput"
          placeholder="Ссылка на изображение (обязательно)"
          required
        />
        <span className="form__input-error" id="avatar-link-input-error" />
      </label>
    </PopupWithForm>
  );
};

export default EditAvatarPopup;