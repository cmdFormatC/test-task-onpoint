import React from "react";
import "./Header.style.css";

export default function Header({ goToSlide }) {
  const handleHomeButtonClick = () => {
    goToSlide(0);
  };
  return (
    <header className="header">
      <nav className="header__navbar">
        <button
          onClick={handleHomeButtonClick}
          className="header__home-button"
          type="button"
        />
        <div className="header__delimiter" />
        <p className="header__paragraph">project</p>
      </nav>
    </header>
  );
}
