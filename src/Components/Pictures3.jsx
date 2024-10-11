// /src/components/Pictures3.js

import React from "react";
import { useInView } from "react-intersection-observer";

function Pictures3() {
  const options = {
    threshold: 0.5,
    triggerOnce: true,
  };

  const { ref: storiesRef, inView: storiesInView } = useInView(options);
  const { ref: firstImageRef, inView: firstImageInView } = useInView(options);
  const { ref: secondImageRef, inView: secondImageInView } = useInView(options);
  const { ref: thirdImageRef, inView: thirdImageInView } = useInView(options);

  return (
    <>
      {/* Stories Section */}
      <div
        id="stories"
        className={`transition-transform duration-1000 ${
          storiesInView
            ? "translate-y-0 opacity-100"
            : "translate-y-12 opacity-0"
        }`}
        ref={storiesRef}
      >
        <div className="text-center text-[30px] md:text-[40px] lg:text-[50px] font-bold py-10 text-[#fff]">
          LUXURY MAGAZINE
        </div>
        <div className="text-center text-[20px] md:text-[30px] lg:text-[40px] font-light text-[#000] mb-8">
          <div>Distinctive Destinations,</div>
          <div>Unmatched Living Experiences.</div>
        </div>
      </div>

      {/* Images Section */}
      <div className="pt-8  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-[90%] lg:w-[80%] m-auto mb-28 mt-10">
        {/* First Image */}
        <div
          className={`transition-transform duration-1000 ${
            firstImageInView
              ? "translate-y-0 opacity-100"
              : "translate-y-12 opacity-0"
          }`}
          ref={firstImageRef}
        >
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img
              className="w-full h-auto object-cover pa"
              src="../assets/Image1.jpg"
              alt="Image1"
            />
          </div>
          <div className="text-center mt-4">
            <p className="font-['Open_Sans'] text-xl md:text-2xl mb-2 TimesNewRoman text-[#fff]">
              Luxury Magazine
            </p>
            <p className="text-[#999]">
              Distinctive Destinations, Unmatched Lifestyle
            </p>
          </div>
        </div>

        {/* Second Image */}
        <div
          className={` pt-10 transition-transform duration-1000 ${
            secondImageInView
              ? "translate-y-0 opacity-100"
              : "translate-y-12 opacity-0"
          }`}
          ref={secondImageRef}
        >
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img
              className="w-full h-auto object-cover"
              src="../assets/Image3.avif"
              alt="Image3"
            />
          </div>
          <div className="text-center mt-4">
            <p className="font-['Open_Sans'] text-xl md:text-2xl mb-2 TimesNewRoman text-[#fff]">
              LUXURY Outlook
            </p>
            <p className="text-[#999]">
              An ambitious journey through luxury residential markets worldwide
            </p>
          </div>
        </div>

        {/* Third Image */}
        <div
          className={`transition-transform duration-1000 ${
            thirdImageInView
              ? "translate-y-0 opacity-100"
              : "translate-y-12 opacity-0"
          }`}
          ref={thirdImageRef}
        >
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img
              className="w-full h-auto object-cover"
              src="../assets/Image2.webp"
              alt="Image2"
            />
          </div>
          <div className="text-center mt-4">
            <p className="font-['Open_Sans'] text-xl md:text-2xl mb-2 TimesNewRoman text-[#fff] ">
              View homes from the <br />
              comfort of your life
            </p>
            <p className="text-[#999] pt-5">
              Experience luxurious homes like never before, all from the comfort
              of yours
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pictures3;
