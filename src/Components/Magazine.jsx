function Magazine() {
  return (
    <>
      <div className="py-16 bg-[#002349] text-[#fff]">
        <div className="text-center text-[2.5rem] md:text-[3rem] lg:text-[4rem] mb-6 TimesNewRoman">
          <p>Discover Dream Homes</p>
          {/* <p> Live Your Best Life</p> */}
        </div>
        <div className="w-[90%] md:w-[70%] lg:w-[50%] mx-auto text-justify text-[1rem] md:text-[1.25rem] lg:text-[1.5rem] text-[#999] mb-8">
          <p>
            Everhome is dedicated to showcasing the finest properties and the
            vibrant lifestyles they offer. We believe that your home is more
            than just walls and a roof; it's a reflection of your aspirations
            and a launchpad for the life you desire.
          </p>
        </div>
        <div className="flex items-center justify-center flex-col md:flex-row gap-4">
          <div className="text-[1rem] md:text-[1.25rem] lg:text-[1.5rem] font-semibold tracking-tight">
            EXPLORE MORE
          </div>
          <button
            type="button"
            className="ml-3 p-2 bg-[#D4AF37] rounded-full hover:bg-[#b98a1c]"
          >
            <img src="../src/assets/arrow.svg" alt="arrow" />
          </button>
        </div>
      </div>
    </>
  );
}

export default Magazine;
