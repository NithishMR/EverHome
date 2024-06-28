function Overview() {
  const videoSrcMp4 = "../src/Components/HeroComponents/Video2.mp4";
  return (
    <>
      <div id="overview" className=" gradient-background text-[#fff]">
        <p className="text-[70px] text-center headings py-10">Sell With Us</p>
        <p className="text-3xl text-center pt-2 pb-10">
          Exceptional properties deserve extraordinary marketing.
        </p>
        <div className="w-[90%] m-auto pt-20">
          <video controls>
            <source src={videoSrcMp4} type="video/mp4" />
          </video>
        </div>
        <div className="text-center text-[#000] py-24">
          <p className="text-[45px] headings">
            Don't just get it on the market.
          </p>
          <p className="text-[45px] headings">
            Get it the attention it deserves.
          </p>
          <p className="text-lg w-[50%] text-justify m-auto text-gray-400 leading-relaxed pt-4">
            For those who demand an elevated service like none other, there’s
            Everhome's International Realty. We’re the industry’s best agents,
            curating with incomparable attention to style and detail. We’re here
            for you to help sell your home at a scale you just won’t find
            anywhere else.
          </p>
        </div>
      </div>
    </>
  );
}
export default Overview;
