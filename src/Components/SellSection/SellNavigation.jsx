// SellNavigation.js
import { useState, useEffect } from "react";

function useSmoothScroll() {
  const [isScrolling, setIsScrolling] = useState(false);

  const handleSmoothScroll = (event) => {
    event.preventDefault();
    const targetSection = event.target.hash.substring(1);
    const targetElement = document.getElementById(targetSection);
    if (!targetElement) return; // Handle potential missing element

    const startPosition = window.pageYOffset;
    const targetPosition = targetElement.offsetTop;
    const duration = 750; // Adjust duration (milliseconds) for desired speed

    let start = null;

    const animate = (currentTime) => {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const easedTime = timeElapsed / duration;
      const easedY = easedTime * easedTime * (3 - 2 * easedTime);
      const newPosition =
        startPosition + (targetPosition - startPosition) * easedY;

      window.scrollTo(0, newPosition);

      if (timeElapsed < duration) {
        window.requestAnimationFrame(animate);
      } else {
        setIsScrolling(false); // End animation state
      }
    };

    setIsScrolling(true); // Start animation state
    window.requestAnimationFrame(animate);
  };

  return handleSmoothScroll;
}

function SellNavigation() {
  const smoothScroll = useSmoothScroll();
  return (
    <div className="flex justify-end text-[#303133] py-10">
      <div className="flex items-center justify-around w-full md:w-[600px]">
        <p
          className="font-medium border-[#D4AF37] border-b-0 hover:border-b-4 cursor-pointer"
          onClick={smoothScroll}
        >
          <a href="#overview">OVERVIEW</a>
        </p>
        <p
          className="font-medium border-[#D4AF37] border-b-0 hover:border-b-4 cursor-pointer"
          onClick={smoothScroll}
        >
          <a href="#findAnExpert">FIND AN EXPERT</a>
        </p>
        <p
          className="font-medium border-[#D4AF37] border-b-0 hover:border-b-4 cursor-pointer"
          onClick={smoothScroll}
        >
          <a href="#marketing">MARKETING</a>
        </p>
        <p
          className="font-medium border-[#D4AF37] border-b-0 hover:border-b-4 cursor-pointer"
          onClick={smoothScroll}
        >
          <a href="#listYourHome">LIST YOUR HOME</a>
        </p>
      </div>
    </div>
  );
}

export default SellNavigation;
