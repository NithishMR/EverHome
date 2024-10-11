// Highlights.js
function Highlights() {
  return (
    <div>
      <div className="text-center">
        <p className="text-[#666] text-sm font-medium">EXCLUSIVE HIGHLIGHTS</p>
        <div className="text-[30px] md:text-[50px] headings">
          <p>Your home's marketing should</p>
          <p>also leave a lasting impression</p>
        </div>
      </div>
      <div className="w-[90%] m-auto py-10 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px] md:gap-[40px]">
          <div className="text-center md:text-left">
            <img
              src="../src/assets/Image8.webp"
              alt="Image8"
              className="w-full"
            />
            <div className="py-6">
              <p className="text-[#666] py-2">IN THE NEWS</p>
              <p className="headings text-xl py-2">Press Exposure</p>
              <p className="text-[#666] text-justify">
                As the premier luxury real estate brand frequently featured in
                the media, Everhome's International Realty sets the standard for
                industry conversations. Our award-winning press office and
                public relations initiatives establish the brand as a dominant
                force in the luxury market, driving significant traffic to our
                website and showcasing Everhome's International Realty listings
              </p>
            </div>
          </div>
          <div className="text-center md:text-left">
            <img
              src="../src/assets/Image9.webp"
              alt="Image9"
              className="w-full"
            />
            <div className="py-6">
              <p className="text-[#666] py-2">UNPARALLELED NETWORK</p>
              <p className="headings text-xl py-2">Global Connections</p>
              <p className="text-[#666] text-justify">
                Everhome's International Realty stands as the sole truly global
                luxury real estate firm, boasting a network of 30,000 advisors
                operating from over 1,200 local offices in 90 countries and
                territories. Our exceptional network collaborates seamlessly to
                fulfill your needs and exceed your expectations.
              </p>
            </div>
          </div>
          <div className="text-center md:text-left">
            <img
              src="../src/assets/Image10.webp"
              alt="Image10"
              className="w-full"
            />
            <div className="py-6">
              <p className="text-[#666] py-2">THE HIGHEST STANDARD</p>
              <p className="headings text-xl py-2">Unmatched Marketing</p>
              <p className="text-[#666] text-justify">
                Everhome's International Realty collaborates with top-tier
                creative agencies and our internal team to effectively engage
                with global consumers, ensuring that sophisticated design
                remains at the core of our approach
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Highlights;
