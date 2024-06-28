function SellYourHome() {
  return (
    <>
      <div id="listYourHome" className="grid grid-cols-2 bg-[#f2f2f2] py-24">
        <div className="flex flex-col justify-around items-center  m-auto w-[80%]">
          <div className="headings text-[60px]">
            Sell your home with our tailored solution for you.
          </div>
          <div className="text-[#666]">
            Connect with our local experts who can create a comprehensive and
            customized plan for your home that takes into consideration all
            avenues of marketing.
          </div>
        </div>
        <div className="w-[90%]">
          <p className="text-[40px] headings">Let’s get in touch.</p>
          <form action="" method="get">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div>
                <label class="block text-gray-700 mb-2" for="first-name">
                  First Name
                </label>
                <input
                  class="w-full border border-gray-300 p-2 rounded"
                  type="text"
                  id="first-name"
                  placeholder="First Name"
                ></input>
              </div>
              <div>
                <label class="block text-gray-700 mb-2" for="last-name">
                  Last Name
                </label>
                <input
                  class="w-full border border-gray-300 p-2 rounded"
                  type="text"
                  id="last-name"
                  placeholder="Last Name"
                ></input>
              </div>
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 mb-2" for="email-address">
                Email Address
              </label>
              <input
                class="w-full border border-gray-300 p-2 rounded"
                type="email"
                id="email-address"
                placeholder="Email Address"
              ></input>
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 mb-2" for="phone-number">
                Phone Number (Optional)
              </label>
              <input
                class="w-full border border-gray-300 p-2 rounded"
                type="tel"
                id="phone-number"
                placeholder="Phone Number (Optional)"
              ></input>
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 mb-2" for="message">
                Message
              </label>
              <textarea
                class="w-full border border-gray-300 p-2 rounded h-32"
                id="message"
                placeholder="I'd like to discuss selling with you."
              ></textarea>
            </div>
            <div class="text-sm text-gray-600 mt-4">
              <p>
                This site is protected by reCAPTCHA and the Google{" "}
                <a href="#" class="text-blue-500">
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a href="#" class="text-blue-500">
                  Terms of Service
                </a>{" "}
                apply.
              </p>
            </div>
            <button
              type="submit"
              class="bg-[#002349] text-white px-4 py-4 my-6 hover:bg-blue-900 transition duration-200"
            >
              SEND MESSAGE &rarr;
            </button>
            <div class="mt-6 text-sm text-gray-600">
              <p>
                Yes, I would like more information from Everhome'sInternational
                Realty. Please use and/or share my information with a{" "}
                <span class="italic">Everhome's International Realty</span>{" "}
                agent to contact me about my real estate needs.
              </p>
              <p class="mt-4">
                By clicking SEND MESSAGE, I agree a{" "}
                <span class="italic">Everhome's International Realty</span>{" "}
                Agent may contact me by phone or text message including by
                automated means about real estate services, and that I can
                access real estate services without providing my phone number. I
                acknowledge that I have read and agree to the{" "}
                <a href="#" class="text-blue-500 underline">
                  Terms of Use
                </a>{" "}
                and{" "}
                <a href="#" class="text-blue-500 underline">
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
