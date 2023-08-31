import React, { useState, useRef } from "react";
import "../index";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Slider from "./Slider/Slider";

function App() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const sliderRef = useRef(null);
  const goToSlideNumber = (number) => {
    setActiveSlide(number);
    setCurrentTranslate(-number * window.innerWidth);
    sliderRef.current.style.transition = "transform 0.3s";
    sliderRef.current.style.transform = `translateX(${
      -number * window.innerWidth
    }px)`;
  };
  return (
    <div className="App">
      <Header goToSlide={goToSlideNumber} />
      <Slider
        selectedSlide={activeSlide}
        changeSelectedSlide={setActiveSlide}
        translate={currentTranslate}
        setTranslate={setCurrentTranslate}
        sliderRef={sliderRef}
        goToSlide={goToSlideNumber}
      />
      <Footer />
    </div>
  );
}

export default App;
