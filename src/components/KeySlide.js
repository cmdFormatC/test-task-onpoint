import React from "react";
import keyFoodIcon from "../images/keyFoodIcon.png";
import keyDayIcon from "../images/keyDayIconpng.png";
import keyBubble1 from "../images/keyBubble1.svg";
import keyBubble2 from "../images/keyBubble2.svg";
import keyBubble3 from "../images/keyBubble3.svg";
import keyBubble4 from "../images/keyBubble4.svg";
import keyBubble5 from "../images/keyBubble5.svg";
import keyBubble6 from "../images/keyBubble6.svg";
import keyBubble7 from "../images/keyBubble7.svg";
import keyBubble8 from "../images/keyBubble8.svg";
import keyBottle from "../images/keyBottle.png";
import PopupWithExcellence from "./PopupWithExcellence";

export default function KeySlide() {
  const [isOpen, setIsOpen] = React.useState(false);
  const handlePopupOpen = () => {
    setIsOpen(true);
  };
  const handlePopupClose = () => {
    setIsOpen(false);
  };
  return (
    <div className="key-slide">
      <div className="key-slide__container">
        <h3 className="key-slide__subtitle subtitle">ключевое сообщение</h3>
        <h2 className="key-slide__title title">
          brend
          <span className="key-slide__accent">xy</span>
        </h2>
        <div className="key-slide__content">
          <div className="key-slide__food-container">
            <img className="key-slide__food-img" src={keyFoodIcon} alt="Еда" />
            <p className="key-slide__food-text">
              Ehicula ipsum a arcu cursus vitae. Eu non diam phasellus
              vestibulum lorem sed risus ultricies
            </p>
          </div>
          <div className="key-slide__day-container">
            <img className="key-slide__day-img" src={keyDayIcon} alt="Еда" />
            <p className="key-slide__day-text">A arcu cursus vitae</p>
          </div>
          <button onClick={handlePopupOpen} className="key-slide__button">
            <span className="key-slide__button-img"></span>
            <span className="key-slide__button-text">Подробнее</span>
          </button>
        </div>
      </div>
      <img className="key-slide__bubble-1" src={keyBubble1} alt="Пузырь" />
      <img className="key-slide__bubble-2" src={keyBubble2} alt="Пузырь" />
      <img className="key-slide__bubble-3" src={keyBubble3} alt="Пузырь" />
      <img className="key-slide__bubble-4" src={keyBubble4} alt="Пузырь" />
      <img className="key-slide__bubble-5" src={keyBubble5} alt="Пузырь" />
      <img className="key-slide__bubble-6" src={keyBubble6} alt="Пузырь" />
      <img className="key-slide__bubble-7" src={keyBubble7} alt="Пузырь" />
      <img className="key-slide__bubble-8" src={keyBubble8} alt="Пузырь" />
      <img className="key-slide__bottle" src={keyBottle} alt="Бутылка" />
      <PopupWithExcellence isOpen={isOpen} onClose={handlePopupClose} />
    </div>
  );
}
