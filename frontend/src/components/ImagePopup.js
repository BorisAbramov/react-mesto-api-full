import React from "react";

const ImagePopup = ({ isOpen, onClose, data }) => {
  return (
    <div className={`popup popup_type_image ${ isOpen ? "popup_is-opened" : "" }`}>
      <div className="popup__content popup__content_image" id="picture-popup" onClick={onClose}>
        <button className="popup__close" type="button" aria-label="close popupImage" onClick={onClose}></button>
        <img
          src={data && data.link}
          alt={data && data.name}
          className="popup__imgPic"
        />
        <h3 className="popup__imgText">{data && data.name}</h3>
      </div>
    </div>
  );
};

export default ImagePopup;



