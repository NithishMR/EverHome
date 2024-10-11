// Marketing.js
function Marketing() {
  return (
    <div id="marketing" className="grid grid-rows-2">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-around">
        <div className="py-5 md:py-7 ml-0 md:ml-8">
          <img src="assets/Image6.avif" alt="Image6" className="w-full" />
        </div>
        <div className="text-start px-5">
          <p className="text-[30px] md:text-[50px] pt-10 md:pt-20 py-10">
            Be at the center of global attention
          </p>
          <p className="text-justify text-lg text-gray-400 Abel">
            The properties we represent gain from the global recognition and
            prestige of the Everhome name, granting exclusive access to a
            discerning clientele. Our award-winning website—available in 14
            languages—draws more visitors than any other luxury real estate
            platform. Our partnerships with top media outlets enhance site
            traffic and amplify visibility for our listings
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-around">
        <div className="text-start px-5">
          <p className="text-[30px] md:text-[50px] pt-5 md:pt-10 py-10">
            What you can get only with us:
          </p>
          <p className="text-justify text-lg text-gray-400">
            With unmatched marketing expertise and exclusive collaborations, we
            propel your brand to new heights. Our public relations powerhouse
            harnesses our brand legacy and reputation to secure influential
            media coverage, expanding your reach to a truly global audience. All
            the while, we deliver exceptional service to guarantee a smooth and
            successful journey.
          </p>
        </div>
        <div className="py-10 md:py-20 ml-0 md:ml-8">
          <img src="assets/Image7.jpg!bw700" alt="Image7" className="w-full" />
        </div>
      </div>
      <div className="grid grid-rows-2 bg-[#002349] text-[#fff] pb-20">
        <div className="w-[90%] md:w-[60%] ml-0 md:ml-28 py-10 md:py-28 ">
          <video controls className="w-full ml-[20px]">
            <source src="/assets/Video3.mp4" type="video/mp4"></source>
          </video>
        </div>
        <div className="flex flex-col items-center">
          <p className="headings text-[30px] md:text-[50px] w-full md:w-[800px] text-center md:text-justify leading-snug heading">
            Expertise that spans from your neighborhood to the global stage
          </p>
          <p className="text-lg m-auto mt-4 text-justify w-[90%] md:w-[60%] leading-relaxed pt-4">
            We showcase our listings on the most pertinent websites worldwide
            and assess their performance using leading analytic tools. Our
            global partnerships encompass influential news, lifestyle, and
            financial platforms, as well as real estate-focused websites.
            There’s no match for the expertise and visibility we provide.
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
