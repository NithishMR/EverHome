// FindAnExpert.js
function FindAnExpert() {
  return (
    <div id="findAnExpert" className="bg-[#002349] text-[#fff]">
      <div className="text-center">
        <p className="text-[30px] md:text-[45px] headings pt-16 pb-6">
          <span>List Your Home</span>
          <span>with Everhome's International Realty</span>
        </p>
        <p className="text-gray-400 text-lg pt-2 leading-relaxed">
          <span>
            If you're thinking about relocating anywhere in the world, we would
            be honored to assist you on your journey
          </span>
          <span>facilitate your best outcome.</span>
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 w-[90%] md:w-[80%] gap-[20px] md:gap-[40px] m-auto pt-16 pb-24">
        <div className="flex flex-col items-start justify-around">
          <img src="../src/assets/Image4.jpg" alt="Image4" className="w-full" />
          <p className="headings text-xl md:text-2xl py-4 md:py-7">
            Meet a local expert who can help your journey.
          </p>
          <p className="text-justify">
            Our network of local real estate professionals leverages their
            market expertise to develop a personalized and comprehensive
            strategy for your home. Connect with an agent near you to tap into
            their local insights
          </p>
          <div className="flex items-center pt-4">
            <p className="font-medium mr-2">FIND YOUR AGENT</p>
            <button type="button">
              <img src="../src/assets/arrow.svg" alt="arrow.svg" />
            </button>
          </div>
        </div>
        <div className="flex flex-col items-start justify-around">
          <img
            src="../src/assets/Image5.avif"
            alt="Image5"
            className="w-full"
          />
          <p className="headings text-xl md:text-2xl py-4 md:py-7">
            Tap into our local expertise and outstanding service
          </p>
          <p className="text-justify">
            With experts in every corner of the globe, we have a local presence
            everywhere. Our innovative technology and unmatched service empower
            our brokerage offices to enhance both your property and your
            home-selling journey
          </p>
          <div className="flex items-center pt-4">
            <p className="font-medium mr-2">CONTACT YOUR LOCAL OFFICE</p>
            <button type="button">
              <img src="../src/assets/arrow.svg" alt="arrow.svg" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FindAnExpert;
