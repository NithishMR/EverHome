import SearchBox from "./SearchBox";
import { Link } from "react-router-dom";
function Find() {
  return (
    <>
      <div className="grid grid-cols-2 bg-[#002349] text-[#fff] custom-border">
        <div className="text-justify tracking-tight font-thin">
          <p className="text-[3rem] text-center TimesNewRoman">
            Find a home that suits your lifestyle
          </p>
        </div>
        <div className="grid grid-rows-2 ">
          <div className="flex items-center justify-evenly font-medium">
            <Link to={"*"}>
              <p className=" border-[#D4AF37] border-b-0 hover:border-b-4 pb-3">
                BUY
              </p>
            </Link>
            <Link to={"*"}>
              <p className=" border-[#D4AF37] border-b-0 hover:border-b-4 pb-3">
                RENT
              </p>
            </Link>
            <Link to={"/Sell"}>
              <p className=" border-[#D4AF37] border-b-0 hover:border-b-4 pb-3">
                SELL
              </p>
            </Link>
            <Link to={"/Agent"}>
              <p className="border-[#D4AF37] border-b-0 hover:border-b-4 pb-3">
                AGENTS
              </p>
            </Link>
          </div>

          <SearchBox />
        </div>
      </div>
    </>
  );
}
export default Find;
