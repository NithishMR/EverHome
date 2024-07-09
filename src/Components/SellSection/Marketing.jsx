// Marketing.js
function Marketing() {
  return (
    <div id="marketing" className="grid grid-rows-2">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-around">
        <div className="py-10 md:py-20 ml-0 md:ml-8">
          <img
            src="../src/assets/Image6.webp"
            alt="Image6"
            className="w-full"
          />
        </div>
        <div className="text-start px-5">
          <p className="text-[30px] md:text-[50px] pt-10 md:pt-20 py-10">
            Be where the world is looking.
          </p>
          <p className="text-justify text-lg text-gray-400 Abel">
            The homes we represent benefit from the worldwide recognition and
            prestige of the Sotheby's name and gain exclusive access to highly
            qualified global clientele. Our award-winning website — now in 14
            languages/dialects - attracts more visitors than any other luxury
            real estate website. Our relationship with leading media outlets
            increase traffic to our site and generate exposure for our listings.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-around">
        <div className="text-start px-5">
          <p className="text-[30px] md:text-[50px] pt-10 md:pt-20 py-10">
            What you can get only with us:
          </p>
          <p className="text-justify text-lg text-gray-400">
            With unrivaled marketing expertise and exclusive partnerships, we
            elevate your brand to new heights. Our public relations powerhouse
            leverages our brand heritage and reputation to secure impactful
            media coverage, extending your reach to a truly global audience. All
            while providing unmatched service to ensure a seamless and
            successful journey.
          </p>
        </div>
        <div className="py-10 md:py-20 ml-0 md:ml-8">
          <img
            src="../src/assets/Image7.webp"
            alt="Image7"
            className="w-full"
          />
        </div>
      </div>
      <div className="grid grid-rows-2 bg-[#002349] text-[#fff] pb-20">
        <div className="w-[90%] md:w-[60%] ml-0 md:ml-28 py-10 md:py-28 ">
          <video controls className="w-full ml-[20px]">
            <source
              src="../src/Components/HeroComponents/Video3.mp4"
              type="video/mp4"
            ></source>
          </video>
        </div>
        <div className="flex flex-col items-center">
          <p className="headings text-[30px] md:text-[50px] w-full md:w-[800px] text-center md:text-justify leading-snug heading">
            Expertise that reaches down the block and around the world.
          </p>
          <p className="text-lg m-auto text-justify w-[90%] md:w-[60%] leading-relaxed pt-4">
            We distribute our listings to the most relevant websites around the
            globe and measure the impact with top analytic tools. Our worldwide
            partners include the most authoritative news, lifestyle, and
            financial voices, as well as real estate-centric websites. Nothing
            compares to the expertise and exposure we can offer.
          </p>
        </div>
      </div>
      <div className="my-10 md:my-16">
        <div className="text-center mb-10 md:mb-20">
          <p className="text-sm font-medium text-gray-400 mt-7 mb-2">
            INCOMPARABLE SOCIAL MEDIA
          </p>
          <p className="headings text-[30px] md:text-[50px]">
            We drive more eyes to your listing.
          </p>
          <div className="text-center text-lg py-7">
            <p className="text-[#666]">
              At Everhome's International Realty, we create exclusive content to
              promote your property to those who are{" "}
            </p>
            <p className="text-[#666]">passionate about fine living.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center gap-10 md:gap-[40px]">
          <div className="flex flex-col items-center justify-around right-border w-full">
            <p className="text-[40px] md:text-[60px] font-medium headings">
              10.1M
            </p>
            <p className="text-lg">
              <i>Engaged social followers</i>
            </p>
          </div>
          <div className="flex flex-col items-center justify-around right-border w-full">
            <p className="text-[40px] md:text-[60px] font-medium headings">
              #1
            </p>
            <p className="text-lg text-center">
              Most viewed real estate channel on YouTube
            </p>
          </div>
          <div className="flex flex-col items-center justify-around">
            <p className="text-[40px] md:text-[60px] font-medium headings">
              152M
            </p>
            <p className="text-lg text-center">
              Annual visits to Everhome.com in 2023
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Marketing;
