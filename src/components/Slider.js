import React, { useState, useEffect } from "react";
import TitleSlide from "./TitleSlide";
import AboutSlide from "./AboutSlide";
import KeySlide from "./KeySlide";

export default function Slider(props) {
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isScrolling, setScrolling] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  useEffect(() => {
    if (props.selectedSlide === 1) {
      setAnimationKey((prevKey) => prevKey + 1);
    }
  }, [props.selectedSlide]);

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX - props.translate);
    props.sliderRef.current.style.transition = "none";
  };

  const handleTouchMove = (e) => {
    const moveX = e.touches[0].clientX;
    const translateX = moveX - startX;
    if (!isDragging || isScrolling || translateX > 0 || translateX <= -2049)
      return;
    props.setTranslate(translateX);
    props.changeSelectedSlide(
      Math.abs(Math.round(props.translate / window.innerWidth))
    );
    props.sliderRef.current.style.transform = `translateX(${translateX}px)`;
  };
  const handleTouchEnd = () => {
    setIsDragging(false);
    props.goToSlideNuber(props.selectedSlide);
  };
  return (
    <section
      ref={props.sliderRef}
      style={{ transform: `translateX(${props.translate}px)` }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="slider"
    >
      <TitleSlide goToSlideNuber={props.goToSlideNuber} />
      <AboutSlide
        key={animationKey}
        isScrolling={isScrolling}
        setScrolling={setScrolling}
      />
      <KeySlide />
    </section>
  );
}
