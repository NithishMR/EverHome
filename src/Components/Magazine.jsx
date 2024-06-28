function Magazine() {
  return (
    <>
      <div className="py-16  bg-[#002349] text-[#fff]">
        <div className="text-center text-[45px] mb-3 TimesNewRoman ">
          <p>Discover Dream Homes</p>
          {/* <p> Live Your Best Life</p> */}
        </div>
        <div className=" w-[50%] m-auto text-justify text-[20px] text-[#999]">
          <p>
            {" "}
            Everhome is dedicated to showcasing the finest properties and the
            vibrant lifestyles they offer. We believe that your home is more
            than just walls and a roof; it's a reflection of your aspirations
            and a launchpad for the life you desire.
          </p>
        </div>
        <div className=" py-5 flex items-center justify-center mb-8">
          <div className="inline-block ">EXPLORE MORE</div>
          <button type="button" className="">
            <img src="../src/assets/arrow.svg" alt="arrow" />
          </button>
        </div>
      </div>
    </>
  );
}
export default Magazine;
