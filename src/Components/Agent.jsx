import { Link } from "react-router-dom";
function Agent() {
  return (
    <>
      <div className="">
        <div className="font-mono text-[100px] text-center ">
          This page is under development
        </div>
        <Link to={"/"}>
          <div className="font-mono text-[100px] text-center underline underline-offset-3">
            Click Here
          </div>
        </Link>
      </div>
    </>
  );
}
export default Agent;
