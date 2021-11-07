import React, { useContext } from 'react';
import headerLogo from '../images/header-logo.svg';
import { NavLink } from "react-router-dom";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

const Header = ({buttonText, userEmail, endPoint, signOut}) => {
    const { isBurgerMenuOpen, setIsBurgerMenuOpen } =
    useContext(CurrentUserContext);

    //функция для открытия меню бургера
    const handleMenuBurger = () => {
      if (!isBurgerMenuOpen) {
        setIsBurgerMenuOpen(true);
        console.log(isBurgerMenuOpen);
      } else {
        setIsBurgerMenuOpen(false);
        console.log(isBurgerMenuOpen);
      }
    };



    return (
        <header className="header">
            <NavLink to="/main" className="logo">
                <img src={headerLogo} alt="Логотип" className="header__logo" />
            </NavLink>
            <div
        className={`header__burger ${isBurgerMenuOpen ? "active" : ""}`}
        onClick={handleMenuBurger}
      >
        <span
          className={`header__burger_span ${isBurgerMenuOpen ? "active" : ""}`}
        />
      </div>
      <div className={`header__menu ${isBurgerMenuOpen ? "active" : ""}`}>
        {userEmail && (
          <p className={`header__item ${isBurgerMenuOpen ? "active" : ""}`}>
            {userEmail}
          </p>
        )}
        <p className={`header__item ${isBurgerMenuOpen ? "active" : ""}`}>
          <NavLink className="header__link" to={endPoint} onClick={signOut}>
            {buttonText}
          </NavLink>
        </p>
      </div>
        </header>  
    )
}

export default Header;