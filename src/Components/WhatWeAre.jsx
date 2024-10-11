import React from "react";
import ImageRight from "./ImageRight.avif"; // Adjust the path based on your project structure

function WhatWeDo() {
  return (
    <div className="w-full my-20 px-4 md:px-8 lg:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="text-center md:text-left md:mt-10">
          <h2 className="text-[30px] font-semibold mb-4">What We Do</h2>
          <p className="text-[20px] mb-4">
            For those who aspire to an extraordinary home and lifestyle, only
            EverHome International Services can deliver.
          </p>
          <p className="text-[18px] text-[#666] leading-relaxed">
            At EverHome Agency, we know that buying or selling a home is more
            than just a transaction—it's a pivotal life decision. Our passionate
            team of real estate professionals is committed to making your
            experience effortless and enjoyable. With personalized service and
            expert insights, we're here to turn your real estate dreams into
            reality.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <img
            className="w-full max-w-sm lg:max-w-md rounded-2xl"
            src={ImageRight} // Use the imported image here
            alt="Image of a house or related to real estate"
          />
        </div>
      </div>
    </div>
  );
}

export default WhatWeDo;
