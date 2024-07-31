// File: Navigation.jsx
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <>
      <div className="bg-[#002349] border-b-2 border-[#D4AF37] text-[#fff] py-5 px-4 md:px-8 lg:px-12">
        <div className="container mx-auto flex flex-row items-center justify-between">
          {/* Logo */}
          <div className="text-2xl md:text-3xl lg:text-4xl text-center cursor-pointer font-serif tracking-tight">
            Real Estate
            <p className="text-sm md:text-xl lg:text-2xl tracking-tight">
              EverHome
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-row items-center justify-between w-full md:w-auto font-medium space-x-4 md:space-x-6 lg:space-x-8">
            <Link to="/search" aria-label="Search">
              <div className="cursor-pointer border-b-2 border-transparent hover:border-b-4 hover:border-[#D4AF37] pb-2 transition duration-300">
                SEARCH
              </div>
            </Link>
            <Link to="/properties" aria-label="Properties">
              <div className="cursor-pointer border-b-2 border-transparent hover:border-b-4 hover:border-[#D4AF37] pb-2 transition duration-300">
                PROPERTIES
              </div>
            </Link>
            <Link to="/Agents" aria-label="Agent">
              <div className="cursor-pointer border-b-2 border-transparent hover:border-b-4 hover:border-[#D4AF37] pb-2 transition duration-300">
                AGENT
              </div>
            </Link>
            <Link to="/stories" aria-label="Stories">
              <div className="cursor-pointer border-b-2 border-transparent hover:border-b-4 hover:border-[#D4AF37] pb-2 transition duration-300">
                STORIES
              </div>
            </Link>
            <Link to="/Sell" aria-label="Sell With Us">
              <div className="cursor-pointer border-2 border-[#D4AF37] p-2 md:p-3 hover:bg-[#D4AF37] hover:text-[#002349] transition duration-300">
                SELL WITH US
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navigation;
