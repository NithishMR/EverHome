function SellYourHome() {
  return (
    <>
      <div
        id="listYourHome"
        className="grid grid-cols-1 md:grid-cols-2 bg-[#f2f2f2] py-12 md:py-24 px-4 md:px-8 lg:px-16"
      >
        <div className="flex flex-col justify-center items-center md:items-start m-auto w-full md:w-[80%] lg:w-[70%] text-center md:text-left">
          <div className="headings text-[32px] md:text-[40px] lg:text-[60px] font-semibold mb-4">
            Sell your home with our tailored solution for you.
          </div>
          <div className="text-[#666] text-sm md:text-base lg:text-lg">
            Connect with our local experts who can create a comprehensive and
            customized plan for your home that takes into consideration all
            avenues of marketing.
          </div>
        </div>
        <div className="w-full md:w-[90%] lg:w-[80%] mt-8 md:mt-0">
          <p className="text-[24px] md:text-[30px] lg:text-[40px] headings text-center md:text-left">
            Let’s get in touch.
          </p>
          <form action="" method="get" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4">
              <div>
                <label
                  className="block text-gray-700 mb-2"
                  htmlFor="first-name"
                >
                  First Name
                </label>
                <input
                  className="w-full border border-gray-300 p-2 rounded"
                  type="text"
                  id="first-name"
                  placeholder="First Name"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="last-name">
                  Last Name
                </label>
                <input
                  className="w-full border border-gray-300 p-2 rounded"
                  type="text"
                  id="last-name"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 mb-2"
                htmlFor="email-address"
              >
                Email Address
              </label>
              <input
                className="w-full border border-gray-300 p-2 rounded"
                type="email"
                id="email-address"
                placeholder="Email Address"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 mb-2"
                htmlFor="phone-number"
              >
                Phone Number (Optional)
              </label>
              <input
                className="w-full border border-gray-300 p-2 rounded"
                type="tel"
                id="phone-number"
                placeholder="Phone Number (Optional)"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="w-full border border-gray-300 p-2 rounded h-32"
                id="message"
                placeholder="I'd like to discuss selling with you."
              />
            </div>
            <div className="text-sm text-gray-600 mt-4">
              <p>
                This site is protected by reCAPTCHA and the Google{" "}
                <a href="#" className="text-blue-500">
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a href="#" className="text-blue-500">
                  Terms of Service
                </a>{" "}
                apply.
              </p>
            </div>
            <button
              type="submit"
              className="bg-[#002349] text-white px-4 py-3 md:py-4 my-4 hover:bg-blue-900 transition duration-200"
            >
              SEND MESSAGE &rarr;
            </button>
            <div className="mt-4 text-sm text-gray-600">
              <p>
                Yes, I would like more information from Everhome's International
                Realty. Please use and/or share my information with a{" "}
                <span className="italic">Everhome's International Realty</span>{" "}
                agent to contact me about my real estate needs.
              </p>
              <p className="mt-4">
                By clicking SEND MESSAGE, I agree a{" "}
                <span className="italic">Everhome's International Realty</span>{" "}
                Agent may contact me by phone or text message including by
                automated means about real estate services, and that I can
                access real estate services without providing my phone number. I
                acknowledge that I have read and agree to the{" "}
                <a href="#" className="text-blue-500 underline">
                  Terms of Use
                </a>{" "}
                and{" "}
                <a href="#" className="text-blue-500 underline">
                  Privacy Policy
                </a>
                .
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SellYourHome;
