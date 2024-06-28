import React, { useState, useEffect } from "react";
import Image1 from "./Image1.webp";
import Image2 from "./Image2.webp";
import Image3 from "./Image3.webp";

function Carousal() {
  const images = [
    Image1,
    Image2,
    Image3,
    Image1,
    Image2,
    Image3,
    Image1,
    Image1,
    Image2,
    Image3,
    Image1,
    Image2,
    Image3,
    Image1,
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="overflow-hidden relative w-full ">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <div key={index} className="flex-shrink-0 w-full">
            <img src={src} className=" w-full" alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousal;
