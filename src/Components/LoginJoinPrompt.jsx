import LogIn from "./LogIn";
import SignupPage from "./SignUp";

function LoginJoinPrompt() {
  return (
    <>
      <div className="navbar bg-[#001731] text-[#fff] items-center justify-between p-4 md:p-2 lg:p-4">
        <div className="flex gap-1 md:gap-2 lg:gap-3">
          <button
            className="btn bg-[#001731] text-[#fff] border-none hover:bg-[#00234f] transition-colors"
            onClick={() => document.getElementById("my_modal_1").showModal()}
          >
            LogIn
          </button>
          <button
            className="btn bg-[#001731] text-[#fff] border-none hover:bg-[#00234f] transition-colors"
            onClick={() => document.getElementById("my_modal_2").showModal()}
          >
            SignUp
          </button>
        </div>

        <dialog
          id="my_modal_1"
          className="modal text-[#000]"
          aria-labelledby="login-title"
          aria-modal="true"
          onClick={(e) =>
            e.target.tagName === "DIALOG" &&
            document.getElementById("my_modal_1").close()
          }
        >
          <div className="modal-box  p-8 md:p-12 lg:p-16 max-w-md mx-auto">
            <div className="flex flex-col items-center">
              <h2
                id="login-title"
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#D4AF37] mb-6"
              >
                Log In
              </h2>
              <LogIn />
              <button
                className="btn mt-4 bg-[#001731] text-[#fff] border-none hover:bg-[#00234f] transition-colors"
                onClick={() => document.getElementById("my_modal_1").close()}
              >
                Close
              </button>
            </div>
          </div>
        </dialog>

        <dialog
          id="my_modal_2"
          className="modal text-[#000]"
          aria-labelledby="signup-title"
          aria-modal="true"
          onClick={(e) =>
            e.target.tagName === "DIALOG" &&
            document.getElementById("my_modal_2").close()
          }
        >
          <div className="modal-box  p-8 md:p-12 lg:p-16 max-w-md mx-auto">
            <div className="flex flex-col items-center">
              <h2
                id="signup-title"
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#D4AF37] mb-6"
              >
                Sign Up
              </h2>
              <SignupPage />
              <button
                className="btn mt-4 bg-[#001731] text-[#fff] border-none hover:bg-[#00234f] transition-colors"
                onClick={() => document.getElementById("my_modal_2").close()}
              >
                Close
              </button>
            </div>
          </div>
        </dialog>
      </div>
    </>
  );
}

export default LoginJoinPrompt;
