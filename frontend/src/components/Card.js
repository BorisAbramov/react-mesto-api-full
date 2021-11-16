import React, { useContext } from 'react';
import { CurrentUserContext } from "../contexts/CurrentUserContext";

const Card = ({ onCardClick, onCardLike, onCardDelete, card }) => {
  const { currentUser } = useContext(CurrentUserContext);
  //console.log(card.likes, currentUser);
  const isLiked = card.likes.some((user) => user === currentUser._id);
  const isOwn = card.owner === currentUser._id;
  //console.log(card.owner);
    const handleClick = () => {
      onCardClick(card);
    };
    
    const cardLikeButtonClassName = `list__like ${
      isLiked ? "list__like_active" : ""
    }`;

    const handleLikeClick = () => {
      onCardLike(card);
    };
    
    const cardDeleteButtonClassName = `list__basket ${
      isOwn ? "" : "list__basket_inactive"
    }`;

    const handleDeleteClick = () => {
      onCardDelete(card);
    };
  
    return (
      <li className="list__element">
        <img
          src={card && card.link}
          alt={card && card.name}
          className="list__image"
          onClick={handleClick}
        />
        <div className="list__group">
        <h2 className="list__name">{card && card.name}</h2>
          <button
           className={cardLikeButtonClassName}
           type="button"
           aria-label="Like"
           onClick={handleLikeClick}
           >
            <p className="list__likes-counter">{card.likes ? card.likes.length : "0"}</p>
          </button>
          <button
            className={cardDeleteButtonClassName}
            type="button"
            aria-label="delete image"
            onClick={handleDeleteClick}
            />
        </div>
      </li>
    );
  };
  
  export default Card;