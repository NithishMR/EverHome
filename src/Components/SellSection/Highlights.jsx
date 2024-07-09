// Highlights.js
function Highlights() {
  return (
    <div>
      <div className="text-center">
        <p className="text-[#666] text-sm font-medium">EXCLUSIVE HIGHLIGHTS</p>
        <div className="text-[30px] md:text-[50px] headings">
          <p>The way you market your home should</p>
          <p>have that wow factor too.</p>
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
                As the #1 most profiled luxury real estate brand in the news,
                Everhome's International Realty leads the conversation. The
                brand's award-winning press office and PR efforts position the
                brand as a powerhouse in luxury real estate and drives traffic
                to the brand website, and ultimately, Everhome's International
                Realty listings.
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
                Everhome's International Realty is the only truly global luxury
                real estate company with 26,500 advisors working in more than
                1,100 local offices across 81 countries and territories. Our
                unparalleled network works together to meet your needs and
                expectations.
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
                Everhome's International Realty works alongside the
                highest-profile creative agencies and internal team to
                successfully connect with global consumers always keeping
                sophisticated design at the foundation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Highlights;
