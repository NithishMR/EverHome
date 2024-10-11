// /src/components/Auction.js

import React from "react";
import auctionImage from "../src/Components/Auction.avif"; // Adjust the path as necessary

function Auction() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 my-[40px] md:my-[70px] px-4 md:px-8 lg:px-16 gap-8">
        <div className="flex justify-center items-center">
          <img
            className="w-full max-w-[400px] md:max-w-[500px] lg:max-w-[600px] rounded-2xl"
            src={auctionImage} // Use the imported image here
            alt="Auction"
          />
        </div>
        <div className="flex flex-col items-center md:items-start justify-center gap-6 pl-20">
          <div className="text-center md:text-left">
            <p className="text-4xl md:text-5xl lg:text-6xl font-semibold">
              10,000
            </p>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-700">
              OFFICES WORLDWIDE
            </p>
          </div>
          <div className="text-center md:text-left">
            <p className="text-4xl md:text-5xl lg:text-6xl font-semibold">
              100
            </p>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-700">
              COUNTRIES & TERRITORIES
            </p>
          </div>
          <div className="text-center md:text-left">
            <p className="text-4xl md:text-5xl lg:text-6xl font-semibold">
              30,000
            </p>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-700">
              SALES ASSOCIATES
            </p>
          </div>
          <div className="text-center md:text-left">
            <p className="text-4xl md:text-5xl lg:text-6xl font-semibold">
              $150 BILLION
            </p>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-700">
              ANNUAL SALES (USD)
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Auction;
