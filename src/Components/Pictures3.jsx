// // /src/components/Pictures3.js

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
      <div
        id="stories"
        className={`transition-transform duration-1000 ${
          storiesInView
            ? "translate-y-0 opacity-100"
            : "translate-y-full opacity-0"
        }`}
        ref={storiesRef}
      >
        <div className="text-center text-[30px] pt-20">RESIDE MAGAZINE</div>
        <div className="text-center headings text-[50px] tracking-tighter text-[#666]">
          <div>Exceptional Locations,</div>
          <div>Unrivaled Lifestyles.</div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-[20px] w-[95%] m-auto mb-28 mt-28">
        <div
          className={`transition-transform duration-1000 ${
            firstImageInView
              ? "translate-y-0 opacity-100"
              : "translate-y-full opacity-0"
          }`}
          ref={firstImageRef}
        >
          <div>
            <img src="../src/assets/Image1.webp" alt="Image1" />
          </div>
          <div className="text-center">
            <p className="font-['Open_Sans'] mt-10 text-2xl mb-2 TimesNewRoman">
              RESIDE Magazine
            </p>
            <p className="text-[#999] ">
              Exceptional location, Unrivaled Lifetime
            </p>
          </div>
        </div>
        <div
          className={`mt-20 transition-transform duration-1000 ${
            secondImageInView
              ? "translate-y-0 opacity-100"
              : "translate-y-full opacity-0"
          }`}
          ref={secondImageRef}
        >
          <div>
            <img src="../src/assets/Image3.webp" alt="Image1" />
          </div>
          <div className="text-center">
            <p className="font-['Open_Sans'] mt-10 text-2xl mb-2 TimesNewRoman">
              LUXURY Outlook
            </p>
            <p className="text-gray-400">
              An ambitious exploration into high-end residential markets across
              the globe
            </p>
          </div>
        </div>
        <div
          className={`transition-transform duration-1000 ${
            thirdImageInView
              ? "translate-y-0 opacity-100"
              : "translate-y-full opacity-0"
          }`}
          ref={thirdImageRef}
        >
          <div>
            <img src="../src/assets/Image2.webp" alt="Image1" />
          </div>
          <div className="text-center">
            <p className="font-['Open_Sans'] mt-10 text-2xl mb-2 TimesNewRoman">
              View homes from the <br />
              comfort of your life
            </p>
            <p className="text-gray-400 text-center">
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
