import { Link } from "react-router-dom";

function PrivacyAndCookies() {
  return (
    <div className="bg-[#002349] text-[#fff] py-4 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between custom-border4">
      {/* Message Section */}
      <div className=" leftToRight text-center md:text-left mb-4 md:mb-0">
        By using this site, you agree with our use of cookies.{" "}
        <Link
          to={"/PrivacyAndPolicy"}
          className="text-[#D4AF37] hover:underline"
        >
          Privacy Policy
        </Link>
      </div>
      {/* Buttons Section */}
      <div className="flex flex-col md:flex-row gap-2 md:gap-4">
        <button
          type="button"
          className="bg-[#D4AF37] text-[#002349] hover:bg-[#b89a2a] font-semibold py-2 px-4 rounded-md"
        >
          OK
        </button>
        <button
          type="button"
          className="bg-[#D4AF37] text-[#002349] hover:bg-[#b89a2a] font-semibold py-2 px-4 rounded-md"
        >
          Manage Preferences
        </button>
      </div>
    </div>
  );
}

export default PrivacyAndCookies;
