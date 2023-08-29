import React, { useState } from "react";

export default function PopupWithExcellence(props) {
  const [currentPage, setCurrentPage] = useState(0);
  const advantages = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    "Faucibus pulvinar elementum integer enim",
    "Faucibus pulvinar elementum integer enim",
    "Mi bibendum neque egestas congue quisque egestas diam",
    "Venenatis lectus magna fringilla urna",
    "Venenatis lectus magna fringilla urna",
  ];

  const totalNumberOfPages = Math.ceil(advantages.length / 3);
  const displayedAdvantages = advantages.slice(
    currentPage * 3,
    currentPage * 3 + 3
  );

  const handleNextClick = () => {
    if (currentPage < totalNumberOfPages - 1) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevClick = () => {
    if (currentPage > 0) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };
  return (
    <div className={`popup ${props.isOpen ? "popup_open" : ""}`}>
      <div className="popup__container">
        <button
          type="button"
          onClick={props.onClose}
          className="popup__close-button"
        />
        <h3 className="popup__subtitle">преимущества</h3>
        <h2 className="popup__title">
          brend
          <span className="key-slide__accent">xy</span>
        </h2>
        <ul className="popup__advantages">
          {displayedAdvantages.map((advantage, index) => (
            <li className="popup__advantag" key={index}>
              <span className="popup__advantag-number">
                0{index + 1 + currentPage * 3}
              </span>
              <p className="popup__advantag-description">{advantage}</p>
            </li>
          ))}
        </ul>
        <div className="popup__nav">
          <button
            className="popup__button popup__button_left"
            onClick={handlePrevClick}
          ></button>
          {Array.from({ length: totalNumberOfPages }).map((_, index) => (
            <span
              key={index}
              className={`popup__nav-indicator ${
                currentPage === index ? "popup__nav-indicator_activ" : ""
              }`}
            ></span>
          ))}
          <button
            className="popup__button popup__button_right"
            onClick={handleNextClick}
          ></button>
        </div>
      </div>
    </div>
  );
}
