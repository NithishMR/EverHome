import SearchBox from "./SearchBox";
import { Link } from "react-router-dom";

function Find() {
  return (
    <>
      <div className="bg-[#002349] text-[#fff] py-12 px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <div className="flex flex-col items-center md:items-start justify-center text-center md:text-left">
            <p className="text-3xl md:text-4xl lg:text-5xl font-thin tracking-tight TimesNewRoman">
              Find a home that suits your lifestyle
            </p>
          </div>
          <div className="flex flex-col justify-center gap-6">
            <div className="flex justify-center md:justify-start gap-8">
              <Link
                to={"*"}
                className="text-sm md:text-lg lg:text-xl border-b-2 border-[#D4AF37] hover:border-b-4 pb-2"
              >
                BUY
              </Link>
              <Link
                to={"*"}
                className="text-sm md:text-lg lg:text-xl border-b-2 border-[#D4AF37] hover:border-b-4 "
              >
                RENT
              </Link>
              <Link
                to={"/Sell"}
                className="text-sm md:text-lg lg:text-xl border-b-2 border-[#D4AF37] hover:border-b-4 "
              >
                SELL
              </Link>
              <Link
                to={"/Agent"}
                className="text-sm md:text-lg lg:text-xl border-b-2 border-[#D4AF37] hover:border-b-4 "
              >
                AGENTS
              </Link>
            </div>
            <SearchBox />
          </div>
        </div>
      </div>
    </>
  );
}

export default Find;
