import React from "react";

export default function Header(props) {
  const handleHomeButtonClick = () => {
    props.goToSlide(0);
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
