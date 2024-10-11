import React from "react";

function VideoSection() {
  const videoSrcMp4 = "/assets/Video1.mp4"; // Adjusted path
  return (
    <div className="mt-20 bg-[#002349] py-[80px] text-[#fff]">
      <div className="w-[90%] m-auto">
        <video controls className="w-full max-w-4xl mx-auto">
          <source src={videoSrcMp4} type="video/mp4" />
        </video>
      </div>
      <div className="text-center mt-20">
        <div className="text-[40px] font-['Open_Sans'] mb-3">Get Inspired</div>
        <div className="text-sm mx-auto w-full max-w-md text-[#999]">
          For those in pursuit of an extraordinary residence and
          <p className="mt-2">life, browse our video series catalogue.</p>
        </div>
      </div>
      <div className="py-5 flex items-center justify-center">
        <div className="inline-block text-lg font-semibold">VIEW ALL</div>
        <button
          type="button"
          className="ml-3 p-2 bg-[#D4AF37] rounded-full hover:bg-[#b98a1c]"
        >
          <img src="/assets/arrow.svg" alt="arrow" />
        </button>
      </div>
    </div>
  );
}

export default VideoSection;
