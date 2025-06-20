import { CgMail } from "react-icons/cg";
import { MdLockOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom"; //UseNavigate Hook : to navigate to login page if in register page and vice versa

const Authentication = ({
  newEmail,
  newPassword,
  confirmPassword,
  handleInputChange,
  handleSubmitChange,
  showConfirmPassword = false,
  buttonText,
}) => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    if (buttonText == "Sign Up") {
      navigate("/login");
    } else {
      navigate("/signUp");
    }
  };

  return (
    //Return bhitra only HTML so, when you wanna write JS inside {} okay
    <>
      <form onSubmit={handleSubmitChange}>
        {/* Outermost parent div */}
        <div className="min-h-screen flex items-center  flex-col gap-4 justify-center px-20">
          {/* First div */}
          <div className=" relative flex border-1 border-[#7051EF] flex-wrap flex-col gap-4 min-w-[80vw] sm:min-w-[50%] 2xl:min-w-[30%] px-6 p-2 py-6 items-center ">
            <h1 className="font-quicksand font-bold text-center text-2xl mb-6 min-w-[90%] 2xl:text-4xl">
              File Management System
            </h1>
            <div className=" min-w-[90%] sm:min-w-[45%] 2xl:min-w-[60%] relative ">
              <input
                id="Email"
                placeholder="Email"
                className="bg-[#DCE0E3] text-black font-bold text-xs 2xl:text-base h-10 2xl:h-12 w-full rounded-lg p-4"
                onChange={handleInputChange}
                value={newEmail}
              />
              <span className="absolute z-10 top-[15%] right-2 2xl:right-3.5 text-3xl text-[#6b6767] ">
                <CgMail />
              </span>
            </div>

            <div className=" min-w-[90%] sm:min-w-[45%] 2xl:min-w-[60%] relative ">
              <input
                id="Password"
                placeholder="Password"
                className="bg-[#DCE0E3] text-black font-bold text-xs 2xl:text-base h-10 2xl:h-12 w-full rounded-lg p-4"
                onChange={handleInputChange}
                value={newPassword}
                type="password"
              />
              <span className="absolute z-10 top-[10%] right-2 2xl:right-3.5 text-3xl text-[#6b6767] ">
                <MdLockOutline />   
              </span>

              {!showConfirmPassword && (
                <p className="mt-4.5 text-xs text-black font-semibold sm:text-sm 2xl:text-base cursor-pointer">Forgot Password!</p>
              )}
            </div>

            <div className=" min-w-[90%] sm:min-w-[45%] 2xl:min-w-[60%] relative ">
              {showConfirmPassword && (
                <>
                  <input //In JavaScript, the && operator returns the second operand if the first operand is truthy -> i.e. true && "hello" → "hello" . Also, true && <input /> → <input /> (the React element)
                    id="confirmPassword"
                    placeholder="Confirm Password"
                    className="bg-[#DCE0E3] text-black font-bold text-xs 2xl:text-base h-10 2xl:h-12 w-full rounded-lg p-4"
                    onChange={handleInputChange}
                    value={confirmPassword}
                    type="password"
                  />
                  <span className="absolute z-10 top-[15%] right-2 2xl:right-3.5 text-3xl text-[#6b6767] ">
                    <MdLockOutline />
                  </span>
                </>
              )}
            </div>

            <button className="flex h-10 2xl:h-12 mt-3.5 bg-[#7051EF]  rounded-md justify-center cursor-pointer font-bold text-xs 2xl:text-base items-center min-w-[90%] sm:min-w-[45%] text-white 2xl:min-w-[60%]">
              {/* <Link to="/login"> {buttonText} </Link> ==> prevents form submission and navigates to this link, so use this in handle submit form using useNavigate hook, only if the registration*/}
              {buttonText}
            </button>
          </div>

          {/* Second Div */}
          <div className="min-h-[10vh]  min-w-[80vw]  sm:min-w-[50%] 2xl:min-w-[30%] px-6 flex justify-center items-center gap-0.5 sm:gap-4 2xl:gap-6 text-sm 2xl:text-lg border-1 border-[#7051EF] ">
            <p className="font-bold font">
              {buttonText == "Sign Up"
                ? "Have an Account?"
                : "Don't have an account?"}
            </p>
            <button
              type="button"
              onClick={handleButtonClick}
              className="flex w-20 h-8 2xl:h-12 2xl:w-35 bg-[#7051EF] text-white  rounded-md 2xl:rounded-2xl justify-center cursor-pointer font-bold text-xs 2xl:text-base items-center ml-5.5 sm:ml-0"
            >
              {buttonText == "Sign Up" ? "Login" : "Sign Up"}
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
export default Authentication;
