import React, { useState } from "react";
import Image1 from "./Image1.webp";
import Image2 from "./Image2.webp";
import Image3 from "./Image3.webp";

function Carousal() {
  const images = [Image1, Image2, Image3];
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel w-full relative">
      <div className="carousel-item relative w-full">
        <img
          src={images[currentIndex]}
          className="w-full"
          alt={`Slide ${currentIndex}`}
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <button className="btn btn-circle" onClick={goToPreviousSlide}>
            ❮
          </button>
          <button className="btn btn-circle" onClick={goToNextSlide}>
            ❯
          </button>
        </div>
      </div>
    </div>
  );
}

export default Carousal;
