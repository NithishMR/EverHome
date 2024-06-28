import { Link } from "react-router-dom";
function Navigation() {
  return (
    <>
      <div className="flex flex-row items-center justify-between bg-[#002349] text-[#fff]  py-5 ">
        <div className="text-3xl w-[200px] text-center cursor-pointer TimesNewRoman tracking-tight">
          Real Estate<p className="text-xl tracking-tight">EverHome</p>
        </div>
        <div className="flex flex-row items-center justify-around w-[600px] font-medium">
          <div className=" cursor-pointer border-[#D4AF37] border-b-0 hover:border-b-4 pb-6">
            SEARCH
          </div>
          <div className="cursor-pointer border-[#D4AF37] border-b-0 hover:border-b-4 pb-6">
            PROPERTIES
          </div>
          <div className="cursor-pointer border-[#D4AF37] border-b-0 hover:border-b-4 pb-6">
            AGENT
          </div>
          <div className="cursor-pointer border-[#D4AF37] border-b-0 hover:border-b-4 pb-6">
            STORIES
          </div>
          <Link to={"/Sell"}>
            <div className="cursor-pointer border-2 border-[#D4AF37] p-3 mt-[-25px]">
              SELL WITH US
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
export default Navigation;
