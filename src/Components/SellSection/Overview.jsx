// Overview.js
function Overview() {
  const videoSrcMp4 = "/assets/Video3.mp4";
  return (
    <div id="overview" className="gradient-background text-[#fff]">
      <p className="text-[40px] md:text-[70px] text-center headings py-10">
        Sell With Us
      </p>
      <p className="text-2xl md:text-3xl text-center pt-2 pb-10">
        Exceptional properties deserve extraordinary marketing.
      </p>
      <div className="w-[90%] m-auto pt-10 md:pt-20">
        <video controls className="w-full">
          <source src={videoSrcMp4} type="video/mp4" />
        </video>
      </div>
      <div className="text-center text-[#000] py-10 md:py-24">
        <p className="text-[30px] md:text-[45px] headings">
          Don't just get it on the market.
        </p>
        <p className="text-[30px] md:text-[45px] headings">
          Get it the attention it deserves.
        </p>
        <p className="text-lg w-[90%] md:w-[50%] text-justify m-auto text-gray-400 leading-relaxed pt-4">
          For those who seek unparalleled service, Everhome's International
          Realty is your premier choice. Our exceptional agents are dedicated to
          providing an unmatched level of expertise, ensuring every detail is
          meticulously curated. We're committed to helping you sell your home
          with a level of support and scale that is truly one of a kind
        </p>
      </div>
    </div>
  );
}

export default Overview;
