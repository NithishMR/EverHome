import React from "react";

function WhatWeDo() {
  return (
    <div className="w-full my-20 px-4 md:px-8 lg:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="text-center md:text-left md:mt-10">
          <h2 className="text-[30px] font-semibold mb-4">What We Do</h2>
          <p className="text-[20px] mb-4">
            For those who seek an exceptional home and life, there is only
            EverHome International Services.
          </p>
          <p className="text-[18px] text-[#666] leading-relaxed">
            At The Everhome Agency, we understand that buying or selling a home
            is a major life decision. Our dedicated team of real estate
            professionals is here to make the process smooth and stress-free. We
            offer personalized service and expert guidance to help you achieve
            your real estate goals.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <img
            className="w-full max-w-sm lg:max-w-md"
            src="../src/Components/ImageRight.webp"
            alt="Image of a house or related to real estate"
          />
        </div>
      </div>
    </div>
  );
}

export default WhatWeDo;
