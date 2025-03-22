import React, { useEffect, useState } from "react";
import "./slider.css";

const slides = [
  {
    image: "/slider1.jpeg",
    slogan: "Empowering Farmers for a Better Tomorrow",
  },
  {
    image: "/slider2.jpg",
    slogan: "Sowing Innovation, Reaping Prosperity",
  },
  {
    image: "/slider3.jpg",
    slogan: "Sustainable Agriculture for Future Generations",
  },
  {
    image: "/slider4.jpg",
    slogan: "Bridging Fields to Markets with Technology",
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-container">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === current ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="overlay">
            <h1>{slide.slogan}</h1>
          </div>
        </div>
      ))}
      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrent(index)}
            className={index === current ? "dot active" : "dot"}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slider;
