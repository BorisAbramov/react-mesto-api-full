import React, { useEffect, useState } from 'react';
import '../index.css';
import api from '../utils/api'
import Main from './Main';
import ImagePopup from './ImagePopup';
import EditAvatarPopup from './EditAvatarPopup';
import EditProfilePopup from './EditProfilePopup';
import AddPlacePopup from './AddPlacePopup';
import PopupWithSubmit from "./PopupWithSubmit";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import ProtectedRoute from "./ProtectedRoute";
import InfoToolTip from "./InfoToolTip";
import * as auth from "../utils/auth";





function App() {
  
  const [cards, setCards] = useState([]);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isPopupWithSubmitOpen, setIsPopupWithSubmitOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [deletedCardData, setDeletedCardData] = useState({});
  const [isInfoToolTipOpen, setIsInfoToolTipOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [authUserData, setAuthUserData] = useState({});
  const [userEmail, setUserEmail] = useState({});
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const history = useHistory();
  const ESC_KEYCODE = 27;

  

  useEffect(() => {
    api
      .getInitialCards()
      .then((res) => {
        setCards(res);
        //console.log(res);
      })
      .catch((err) => {
        console.log(
          `Непредвиденная ошибка при загрузке карточек: ${err.status} ${err.statusText}`
        );
      });
  }, []);

  useEffect(() => {
    api
      .getUserInfo()
      .then((userData) => {
        setCurrentUser(userData);
      })
      .catch((err) => {
        console.log(
          `Непредвиденная ошибка при загрузке данных пользователя: ${err.status} ${err.statusText}`
        );
      });
  }, []);

  const handleAddCardSubmit = (newCard) => {
    setIsSubmitted(true);

    api
      .addCard(newCard)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        setIsAddPlacePopupOpen(false);
        setTimeout(() => setIsSubmitted(false), 1000);
      })
      .catch((err) => {
        console.log(
          `Непредвиденная ошибка при загрузки карточки пользователя: ${err.status} ${err.statusText}`
        );
      });
  };

  const handleCardLike = (card) => {
    const isLiked = card.likes.some((user) => user._id === currentUser._id);

    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((items) =>
          items.map((item) => (item._id === card._id ? newCard : item))
        );
      })
      .catch((err) => {
        console.log(
          `Ошибка при установке лайка: ${err.status} ${err.statusText}`
        );
      });
  };

  const handleCardDelete = (card) => {
    setIsSubmitted(true);

    api
      .deleteCard(card._id)
      .then(() => {
        setCards(cards.filter((item) => item._id !== card._id));
        setIsPopupWithSubmitOpen(false);
        setTimeout(() => setIsSubmitted(false), 1000);
      })
      .catch((err) => {
        console.log(
          `Ошибка при удалении карточки: ${err.status} ${err.statusText}`
        );
      });
  };

  const handleAvatarUpdate = (data) => {
    setIsSubmitted(true);

    api
      .updateAvatar(data)
      .then((data) => {
        setCurrentUser(Object.assign(currentUser, { avatar: data.avatar }));
        setIsEditAvatarPopupOpen(false);
        setTimeout(() => setIsSubmitted(false), 1000);
      })
      .catch((err) => {
        console.log(
          `Непредвиденная ошибка при загрузки изображения аватара: ${err.status} ${err.statusText}`
        );
      });
  };

  const handleUserUpdate = (data) => {
    setIsSubmitted(true);

    api
      .updateUserData(data)
      .then((data) => {
        setCurrentUser(data);
        setIsEditProfilePopupOpen(false);
        setTimeout(() => setIsSubmitted(false), 1000);
      })
      .catch((err) => {
        console.log(
          `Непредвиденная ошибка при передаче на сервер данных пользователя: ${err.status} ${err.statusText}`
        );
      });
  };



  const handleRegister = (email, password, confirmPassword) => {
    if (password === confirmPassword) {
      setIsSubmitted(true);

      auth
        .register(password, email)
        .then((res) => {
          if (res) {
            setAuthUserData({
              ...authUserData,
              message: "Вы успешно зарегистрировались!",
            });
            setIsInfoToolTipOpen(true);
            setIsSignedUp(true);
            setIsShowPassword(false);
            history.push("/sign-in");
          } else {
            setAuthUserData({
              ...authUserData,
              message: "Что-то пошло не так! Попробуйте еще раз.",
            });
            setIsInfoToolTipOpen(true);
            setIsSignedUp(false);
            setIsShowPassword(false);
            setIsSubmitted(false);
          }
        })
        .catch((err) => {
          const errorMessage = String(err);
          console.log(
            `Ошибка регистрации пользователя: ${errorMessage.split(":")[1]}`
          );

          setAuthUserData({
            ...authUserData,
            message: `${errorMessage.split(":")[1]}!`,
          });
          setIsInfoToolTipOpen(true);
          setIsSignedUp(false);
          setTimeout(() => setIsSubmitted(false), 3000);
        });
    } else {
      setAuthUserData({
        ...authUserData,
        password: "",
        confirmPassword: "",
        message: "Пароли не совпадают! Попробуйте еще раз",
      });
      setIsSignedUp(false);
      setIsShowPassword(false);
      setIsInfoToolTipOpen(true);
    }

    setTimeout(() => setIsSubmitted(false), 2000);
  };


  const handleLogin = (password, email) => {
    setIsSubmitted(true);

    auth
      .login(password, email)
      .then((data) => {
        if (data.token) {
          setAuthUserData({
            ...authUserData,
            email: "",
            password: "",
          });
          setIsLoggedIn(true);
          setUserEmail(email);
          setIsShowPassword(false);
          history.push("/main");
          setTimeout(() => setIsSubmitted(false), 3000);
        }
      })
      .catch((err) => {
        console.log(`Ошибка авторизации пользователя: ${err.status}`);
        setAuthUserData({
          ...authUserData,
          message: `Ошибка авторизации пользователя: Неверный логин или пароль! Попробуйте еще раз.`,
        });
        setIsLoggedIn(false);
        setIsInfoToolTipOpen(true);
        setIsSubmitted(false);
        setIsShowPassword(false);
        setUserEmail({});
      });
    setTimeout(() => setIsSubmitted(false), 2000);
  };

  useEffect(() => {
    handleTokenCheck();
  }, [history]);

  const handleTokenCheck = () => {
    const token = localStorage.getItem("jwt");

    if (token) {
      auth
        .getContent(token)
        .then((res) => {
          const { data } = res;
          setUserEmail(data.email);
          setIsLoggedIn(true);
          history.push("/main");
        })
        .catch((err) => {
          console.log(`Ошибка при проверке токена:${err}`)
          history.push("/sign-in")
          setAuthUserData({
            ...authUserData,
            message: `Ошибка авторизации пользователя. Пожалуйста, войдите под своей учетной записью`,
          });
          setIsInfoToolTipOpen(true);
        });
    }
  };

  const signOut = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("jwt");
    setUserEmail({});
    history.push("/sign-in");
  };

  const closeAllPopups = (evt) => {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImagePopupOpen(false);
    setIsInfoToolTipOpen(false);
  };

  const handleClickClosePopup = (e) => {
    if (
      e.target.classList.contains("popup") ||
      e.target.classList.contains("popup__close")
    ) {
      closeAllPopups();
    }
  };

  const handleEscClose = (e) => {
    if (e.keyCode === ESC_KEYCODE) {
      closeAllPopups();
    }
  };

  const handleCardClick = (value) => {
    setIsImagePopupOpen(true);
    setSelectedCard(value);
  };

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const handlePopupWithForm = (data) => {
    setIsPopupWithSubmitOpen(true);
    setDeletedCardData(data);
  };


  useEffect(() => {
    if (
      isEditProfilePopupOpen ||
      isAddPlacePopupOpen ||
      isEditAvatarPopupOpen ||
      isImagePopupOpen ||
      isPopupWithSubmitOpen
    ) {
      document.addEventListener("keydown", handleEscClose);
    }

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [
    isEditProfilePopupOpen,
    isAddPlacePopupOpen,
    isEditAvatarPopupOpen,
    isImagePopupOpen,
    isPopupWithSubmitOpen,
  ]);





  return (
  <CurrentUserContext.Provider 
    value={{
     currentUser,
     authUserData,
     isLoggedIn,
     setIsShowPassword,
     isShowPassword,
     isSignedUp,
     isBurgerMenuOpen,
     setIsBurgerMenuOpen,
    }}
    >
    <div className="page">
    <Switch>
      <ProtectedRoute
        path="/main"
        component={Main}
        onEditProfile={handleEditProfileClick}
        onEditAvatar={handleEditAvatarClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
        cards={cards}
        onLikeClick={handleCardLike}
        onDeleteClick={handlePopupWithForm}
        signOut={signOut}
        to={"/sign-in"}
        userEmail={userEmail}
      />
      <Route path="/sign-in">
        <Login handleLogin={handleLogin} isSubmitted={isSubmitted} />
      </Route>
      <Route path="/sign-up">
        <Register
          handleRegister={handleRegister}
          isSubmitted={isSubmitted}
        />  
      </Route>
      <Route path="/">
        {isLoggedIn ? (
          <Redirect to="/main" />
        ) : (
          <Redirect to="/signin" />
        )}
      </Route>
    </Switch>
        
    <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={handleClickClosePopup}
          onUpdateAvatar={handleAvatarUpdate}
          isSubmitted={isSubmitted}
        />

    <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={handleClickClosePopup}
          onUpdateUser={handleUserUpdate}
          isSubmitted={isSubmitted}
        />

    <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={handleClickClosePopup}
          onAddPlace={handleAddCardSubmit}
          isSubmitted={isSubmitted}
        />    

    <ImagePopup
          isOpen={isImagePopupOpen}
          data={selectedCard}
          onClose={handleClickClosePopup}
        />
    <PopupWithSubmit
          isOpen={isPopupWithSubmitOpen}
          onClose={handleClickClosePopup}
          isSubmitted={isSubmitted}
          deleteCard={handleCardDelete}
          data={deletedCardData}
        />
    <InfoToolTip
          isOpen={isInfoToolTipOpen}
          onClose={handleClickClosePopup}
          name={"infoToolTip"}
        />

    </div>
  </CurrentUserContext.Provider>
  );
}

export default App;
