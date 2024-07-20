import { Link } from "react-router-dom";

function Agent() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#f2f2f2] px-4 md:px-8 lg:px-16">
        <div className=" font-mono text-[40px] md:text-[60px] lg:text-[80px] xl:text-[100px] text-center mb-6 text-[#333]">
          This page is under development
        </div>
        <Link to={"/"}>
          <div className=" leftToRight font-mono text-[24px] md:text-[30px] lg:text-[40px] xl:text-[50px] text-center underline underline-offset-4 text-blue-600 hover:text-blue-800 transition duration-200">
            Click Here
          </div>
        </Link>
      </div>
    </>
  );
}

export default Agent;
