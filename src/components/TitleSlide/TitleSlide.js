import React from "react";
import microStickImg from "../../images/microStick.svg";
import titleLargePinkSemen from "../../images/titleLargePinkSemen.svg";
import titleSmallSemen from "../../images/titleSmallSemen.svg";
import titleBacterium1 from "../../images/titleBacterium1.svg";
import titleBacterium2 from "../../images/titleBacterium2.svg";
import titleBacterium3 from "../../images/titleBacterium3.svg";
import titleBacterium4 from "../../images/titleBacterium4.svg";
import titleBacterium5 from "../../images/titleBacterium5.svg";
import titleBacterium6 from "../../images/titleBacterium6.svg";
import "./TitleSlide.style.css";

export default function TitleSlide(props) {
  const handleNextButtonClick = () => {
    props.goToSlideNuber(1);
  };
  return (
    <div className="title-slide">
      <div className="title-slide__content">
        <p className="title-slide__greetings">Привет,</p>
        <h1 className="title-slide__title">
          Это<span className="title-slide__title-accent">не</span>
          <br />
          коммерческое задание
        </h1>
        <button onClick={handleNextButtonClick} className="title-slide__button">
          <span className="title-slide__button-img"></span>
          <span className="title-slide__button-text">Что дальше?</span>
        </button>
      </div>
      <img className="title-slide__microbe" src={microStickImg} alt="Микроб" />
      <img
        className="title-slide__large-semen"
        src={titleLargePinkSemen}
        alt="Сперма"
      />
      <img
        className="title-slide__small-semen"
        src={titleSmallSemen}
        alt="Сперма"
      />
      <img
        className="title-slide__bacterium-1"
        src={titleBacterium1}
        alt="Бактерия"
      />
      <img
        className="title-slide__bacterium-2"
        src={titleBacterium2}
        alt="Бактерия"
      />
      <img
        className="title-slide__bacterium-3"
        src={titleBacterium3}
        alt="Бактерия"
      />
      <img
        className="title-slide__bacterium-4"
        src={titleBacterium4}
        alt="Бактерия"
      />
      <img
        className="title-slide__bacterium-5"
        src={titleBacterium5}
        alt="Бактерия"
      />
      <img
        className="title-slide__bacterium-6"
        src={titleBacterium6}
        alt="Бактерия"
      />
    </div>
  );
}
