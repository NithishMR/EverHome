// /src/components/Magazine.js

import React from "react";
import arrowImage from "../src/assets/arrow.svg"; // Adjust the path as necessary

function Magazine() {
  return (
    <>
      <div className="py-16 bg-[#002349] text-[#fff]">
        <div className="text-center text-[2.5rem] md:text-[3rem] lg:text-[4rem] mb-6 TimesNewRoman">
          <p>Find Your Perfect Home</p>
          {/* <p> Live Your Best Life</p> */}
        </div>
        <div className="w-[90%] md:w-[70%] lg:w-[50%] mx-auto text-justify text-[1rem] md:text-[1.25rem] lg:text-[1.5rem] text-[#999] mb-8">
          <p>
            At Everhome, we are committed to presenting exceptional properties
            that embody the lifestyles they support. We understand that a home
            is more than just a structure—it's an expression of your ambitions
            and a foundation for the life you envision.
          </p>
        </div>
        <div className="flex items-center justify-center flex-col md:flex-row gap-4">
          <div className="text-[1rem] md:text-[1.25rem] lg:text-[1.5rem] font-semibold tracking-tight">
            EXPLORE MORE
          </div>
          <button
            type="button"
            className="ml-3 p-2 bg-[#D4AF37] rounded-full hover:bg-[#b98a1c]"
          >
            <img src={arrowImage} alt="arrow" />{" "}
            {/* Use the imported image here */}
          </button>
        </div>
      </div>
    </>
  );
}

export default Magazine;
