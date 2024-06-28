import LogIn from "./LogIn";
import SignupPage from "./SignUp";

function LoginJoinPrompt() {
  return (
    <>
      <div className="navbar bg-[#001731] text-[#fff] items-end">
        {/* <a className="btn btn-ghost text-sm">Join/LogIn</a> */}
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <button
          className="btn bg-[#001731] text-[#fff] border-none hover:bg-[#001731]"
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          LogIn
        </button>
        <dialog id="my_modal_1" className="modal text-[#000] ">
          <div className="modal-box bg-[#00234]">
            <div className=" p-20">
              <form method="PUT">
                <LogIn />
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
        <button
          className="btn bg-[#001731] text-[#fff] border-none hover:bg-[#001731]"
          onClick={() => document.getElementById("my_modal_2").showModal()}
        >
          SignUp
        </button>
        <dialog id="my_modal_2" className="modal text-[#000]">
          <div className="modal-box ">
            <div className=" p-20">
              <form method="PUT">
                <SignupPage />
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
        {/* <a className="btn btn-ghost text-sm">Preferences</a> */}
      </div>
    </>
  );
}
export default LoginJoinPrompt;
