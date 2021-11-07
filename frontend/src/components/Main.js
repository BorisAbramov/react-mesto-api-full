import React, { useContext } from 'react';
import Card from './Card';
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import Header from "./Header";
import Footer from "./Footer";

function Main({
  onAddPlace,
  onCardClick,
  onEditAvatar,
  onEditProfile,
  cards,
  onLikeClick,
  onDeleteClick,
  signOut,
  userEmail,
}) {
  const { currentUser } = useContext(CurrentUserContext);

    return (
    <>
      <Header
      userEmail={userEmail}
      buttonText={"Выйти"}
      endPoint={"/sign-in"}
      signOut={signOut}
    /> 
    <main className="content">
      <section className="profile">
        <button
         type="button"
         aria-label="profile__avatar"
         className="profile__avatar"
         style={{ backgroundImage: `url(${currentUser.avatar})` }}
         onClick={onEditAvatar}
        />
        <div className="profile-info">
          <h1 className="profile-info__name" id="name">{currentUser.name}</h1>
          <button className="profile-info__edit" type="button" aria-label="Edit" onClick={onEditProfile}/>
          <p className="profile-info__text" id="job">{currentUser.about}</p>
        </div>
        <button type="button" className="profile__add" aria-label="add profile" onClick={onAddPlace}/>
      </section>
      <section className="elements">
        <ul className="list">
        {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              onCardClick={onCardClick}
              onCardLike={onLikeClick}
              onCardDelete={onDeleteClick}
            />
          ))}
        </ul>
      </section>
    </main>
    <Footer />
  </>
    )
}

export default Main;