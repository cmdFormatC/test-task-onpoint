import React, { useRef, useState } from "react";
import aboutSemen1 from "../../images/aboutSemen1.svg";
import aboutSemen2 from "../../images/aboutSemen2.svg";
import aboutSemen3 from "../../images/aboutSemen3.svg";
import aboutSemen4 from "../../images/aboutSemen4.svg";
import aboutSemen5 from "../../images/aboutSemen5.svg";
import "./AboutSlide.style.css";

export default function AboutSlide({ setScrolling, isScrolling }) {
  const contentRef = useRef(null);
  const thumbRef = useRef(null);
  const trackRef = useRef(null);
  const [startY, setStartY] = useState(0);
  const [startScrollTop, setStartScrollTop] = useState(0);

  const handleScroll = () => {
    const scrollRatio =
      contentRef.current.scrollTop /
      (contentRef.current.scrollHeight - contentRef.current.clientHeight);
    thumbRef.current.style.top = `${
      scrollRatio *
      (trackRef.current.clientHeight - thumbRef.current.clientHeight)
    }px`;
  };

  const handleDragStart = (e) => {
    setScrolling(true);
    setStartY(e.clientY);
    setStartScrollTop(contentRef.current.scrollTop);
  };

  const handleDragMove = (e) => {
    if (isScrolling) {
      const deltaY = e.clientY - startY;

      const scrollDistanceRatio =
        (contentRef.current.scrollHeight - contentRef.current.clientHeight) /
        (trackRef.current.clientHeight - thumbRef.current.clientHeight);

      const scrollDistance = deltaY * scrollDistanceRatio;
      contentRef.current.scrollTop = startScrollTop + scrollDistance;
    }
  };

  const handleDragEnd = () => {
    setScrolling(false);
  };

  return (
    <div className="about-slide">
      <h2 className="about-slide__title">текст сообщения</h2>
      <div className="about-slide__content">
        <div className="about-slide__text-container">
          <p
            className="about-slide__paragraph"
            onScroll={handleScroll}
            ref={contentRef}
          >
            <span className="about-slide__accent">
              Lorem ipsum dolor sit amet,
            </span>{" "}
            consectetur adipiscing elit. Quisque aliquam eu diam quis aliquam.
            Suspendisse rhoncus dignissim porta. Cras semper metus ut urna
            euismod, quis elementum justo tempus. Sed aliquam turpis ex, ac
            sagittis eros accumsan quis. Donec enim dolor, dapibus vel purus
            dapibus, tristique venenatis elit. Donec hendrerit ullamcorper mi,
            vel aliquet sem porta vel. Aliquam erat volutpat. Etiam vehicula
            facilisis metus, eget tempus mauris suscipit in. Nulla aliquam et
            nisl vitae finibus. Nullam porta, sapien in pellentesque tincidunt,
            augue mauris dignissim felis, ac elementum velit lorem ac metus.
            Curabitur non metus finibus, varius justo imperdiet, ullamcorper
            nunc. Etiam ex mi, lobortis iaculis tortor egestas, pulvinar
            fermentum lacus. Sed sollicitudin lacus at pulvinar elementum. Donec
            blandit lobortis fermentum. Duis dictum dignissim urna at posuere.
            Donec maximus, massa sed scelerisque facilisis, justo augue finibus
            est, sed malesuada nisi massa ullamcorper arcu. Etiam vehicula
            gravida sollicitudin. Suspendisse dictum risus non sollicitudin
            pharetra. Pellentesque eu sagittis leo. Proin in hendrerit lectus.
            Nullam faucibus pulvinar imperdiet. Morbi accumsan vel dui ultricies
            aliquam. Duis quis accumsan augue, quis dapibus mauris. Pellentesque
            nec ornare sem, feugiat rutrum ipsum. Fusce rutrum vestibulum elit,
            quis volutpat est convallis eget. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Nulla tempus mauris mauris, id tempor
            nulla molestie placerat. Orci varius natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Morbi commodo rhoncus
            ligula, at dictum enim consectetur sed.
          </p>
        </div>
        <div
          className="about-slide__scrollbar-track"
          ref={trackRef}
          onMouseMove={handleDragMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchMove={(e) => handleDragMove(e.touches[0])}
          onTouchEnd={handleDragEnd}
        >
          <div
            className="about-slide__scrollbar-thumb"
            ref={thumbRef}
            onMouseDown={(e) => handleDragStart(e)}
            onTouchStart={(e) => handleDragStart(e.touches[0])}
          ></div>
        </div>
      </div>
      <img
        className="about-slide__semen-1"
        src={aboutSemen1}
        alt="Сперматозоид"
      />
      <img
        className="about-slide__semen-2"
        src={aboutSemen2}
        alt="Сперматозоид"
      />
      <img
        className="about-slide__semen-3"
        src={aboutSemen3}
        alt="Сперматозоид"
      />
      <img
        className="about-slide__semen-4"
        src={aboutSemen4}
        alt="Сперматозоид"
      />
      <img
        className="about-slide__semen-5"
        src={aboutSemen5}
        alt="Сперматозоид"
      />
    </div>
  );
}
