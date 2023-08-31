import React, { useState, useEffect } from "react";
import TitleSlide from "../TitleSlide/TitleSlide";
import "./Slider.style.css";
import KeySlide from "../KeySlide/KeySlide";
import AboutSlide from "../AboutSlide/AboutSlide";

export default function Slider({
  selectedSlide,
  sliderRef,
  translate,
  setTranslate,
  changeSelectedSlide,
  goToSlide,
}) {
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isScrolling, setScrolling] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  useEffect(() => {
    if (selectedSlide === 1) {
      setAnimationKey((prevKey) => prevKey + 1);
    }
  }, [selectedSlide]);

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX - translate);
    sliderRef.current.style.transition = "none";
  };

  const handleTouchMove = (e) => {
    const moveX = e.touches[0].clientX;
    const translateX = moveX - startX;
    if (
      !isDragging ||
      isScrolling ||
      translateX > 0 ||
      translateX <= -window.innerWidth * 2
    )
      return;
    setTranslate(translateX);
    changeSelectedSlide(Math.abs(Math.round(translate / window.innerWidth)));
    sliderRef.current.style.transform = `translateX(${translateX}px)`;
  };
  const handleTouchEnd = () => {
    setIsDragging(false);
    goToSlide(selectedSlide);
  };
  return (
    <section
      ref={sliderRef}
      style={{ transform: `translateX(${translate}px)` }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="slider"
    >
      <TitleSlide goToSlideNuber={goToSlide} />
      <AboutSlide
        key={animationKey}
        isScrolling={isScrolling}
        setScrolling={setScrolling}
      />
      <KeySlide />
    </section>
  );
}
