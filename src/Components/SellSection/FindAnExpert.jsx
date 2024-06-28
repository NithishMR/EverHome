function FindAnExpert() {
  return (
    <>
      <div id="findAnExpert" className="bg-[#002349] text-[#fff]">
        <div className="">
          <p className="text-center text-[45px] headings pt-16 pb-6">
            <p>List Your Home</p>
            <p>with Everhome's International Realty</p>
          </p>
          <p className="text-center text-gray-400 text-lg pt-2 leading-relaxed">
            <p>
              If you are considering a move anywhere around the globe, it would
              be our privilege to help you{" "}
            </p>
            <p>facilitate your best outcome.</p>
          </p>
        </div>
        <div className="grid grid-cols-2 w-[80%] gap-[40px] m-auto pt-16 pb-24">
          <div className="flex flex-col items-start justify-around">
            <img src="../src/assets/Image4.webp" alt="Image4" />
            <p className="headings text-2xl  py-7">
              Meet a local expert who can help your journey.
            </p>
            <p className="">
              Our network of local real estate professionals apply their local
              market knowledge to create a comprehensive and customized plan for
              your home. Find an agent who is closest you and learn their local
              expertise.
            </p>
            <div className="flex items-center pt-4">
              <p className="">FIND YOUR AGENT</p>
              <button type="button">
                <img src="../src/assets/arrow.svg" alt="arrow.svg" />
              </button>
            </div>
          </div>
          <div className="flex flex-col items-start justify-around">
            <img src="../src/assets/Image5.webp" alt="Image4" />
            <p className="headings text-2xl  py-7">
              Access our local expertise and exceptional service.
            </p>
            <p className="">
              With experts in every part of the world, we are local everywhere,
              With innovative technology and unrivaled service, our local
              brokerage offices can elevate your property and your home selling
              experience.
            </p>
            <div className="flex items-center pt-4">
              <p className="">CONTACT YOUR LOCAL OFFICE</p>
              <button type="button">
                <img src="../src/assets/arrow.svg" alt="arrow.svg" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default FindAnExpert;
