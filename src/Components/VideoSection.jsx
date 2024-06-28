import React from "react";

function VideoSection() {
  const videoSrcMp4 = "../src/Components/HeroComponents/Video1.mp4";
  return (
    <>
      <div className=" mt-20  bg-[#002349] py-[80px] text-[#fff]">
        <div className="w-[90%] m-auto">
          <video controls>
            <source src={videoSrcMp4} type="video/mp4" />
          </video>
        </div>
        <div className="">
          <div className="mt-20 text-[40px] text-center mb-3 font-['Open_Sans']">
            Get Inspired
          </div>
          <div className="text-sm m-auto w-[30%] text-center text-[#999]">
            For those who seek an exceptional home and
            <p className="text-center mt-2">
              life, browse our video series catalogue.
            </p>
          </div>
        </div>
        <div className=" py-5 flex items-center justify-center ">
          <div className="inline-block">VIEW ALL</div>
          <button type="button" className="">
            <img src="../src/assets/arrow.svg" alt="arrow" />
          </button>
        </div>
      </div>
    </>
  );
}

export default VideoSection;
