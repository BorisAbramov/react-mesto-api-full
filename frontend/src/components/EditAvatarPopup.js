import React, { useEffect } from "react";
import PopupWithForm from "./PopupWithForm";
import useFormValidator from "../hooks/useFormValidator";

const EditAvatarPopup = ({ isOpen, onClose, onUpdateAvatar, isSubmitted }) => {
  const currentFormValidator = useFormValidator();

  useEffect(() => {
    currentFormValidator.resetForm();
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: currentFormValidator.values.link,
    });
  }
  

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
          type="url"
          className="popup__input"
          id="avatar-link-input"
          name="link"
          placeholder="Ссылка на изображение (обязательно)"
          required
        />
        <span className="form__input-error" id="avatar-link-input-error" />
      </label>
    </PopupWithForm>
  );
};

export default EditAvatarPopup;