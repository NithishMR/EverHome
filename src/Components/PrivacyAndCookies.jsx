import { Link } from "react-router-dom";
function PrivacyAndCookies() {
  return (
    <>
      <div className="bg-[#002349] flex items-center justify-around text-[#fff] py-4 custom-border4">
        <div className="">
          By using this site, you agree with our use of cookies.{" "}
          <Link to={"/PrivacyAndPolicy"}>Privacy Policy</Link>
          {/* Define later */}
        </div>
        <div className="flex w-72 justify-evenly">
          <button type="button" className="custom-border2">
            OK
          </button>
          <button type="button" className="custom-border2">
            Manage Preferances
          </button>
        </div>
      </div>
    </>
  );
}
export default PrivacyAndCookies;
