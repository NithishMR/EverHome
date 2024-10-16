import React from "react";
import { useInView } from "react-intersection-observer";
import ImageRight2 from "./ImageRight2.avif"; // Adjust the path according to your folder structure

function OurStory() {
  const options = {
    threshold: 0.5,
    triggerOnce: true,
  };

  const { ref: textRef, inView: textInView } = useInView(options);
  const { ref: imageRef, inView: imageInView } = useInView(options);

  return (
    <div className="w-full my-20 px-4 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Text Section */}
        <div
          className={`transition-transform duration-1000 ${
            textInView
              ? "translate-y-0 opacity-100"
              : "translate-y-12 opacity-0"
          }`}
          ref={textRef}
        >
          <p className="text-[40px] md:text-[60px] text-center md:text-left font-bold TimesNewRoman mb-4">
            Our Story
          </p>
          <p className="text-[16px] md:text-[20px] text-justify text-[#666]">
            At Everhome, we are driven by the belief that finding a home is more
            than just a transaction – it’s about discovering a space that
            complements your life and ambitions. Our mission is to provide an
            effortless, seamless experience for clients as they navigate the
            real estate journey. With a commitment to quality service, we ensure
            that every step is taken with care, helping you find the perfect
            home to build lasting memories.
          </p>
        </div>

        {/* Image Section */}
        <div
          className={`flex justify-center transition-transform duration-1000 ${
            imageInView
              ? "translate-y-0 opacity-100"
              : "translate-y-12 opacity-0"
          }`}
          ref={imageRef}
        >
          <img
            className="w-full md:w-[90%] lg:w-[95%] max-w-[600px] rounded-lg shadow-lg"
            src={ImageRight2} // Use the imported image here
            alt="Our Story"
          />
        </div>
      </div>
    </div>
  );
}

export default OurStory;
