import TwoUsers from "../../assets/NavbarIcons/twoUsers.png";
import Settings from "../../assets/NavbarIcons/settings.png";
import SignOut from "../../assets/NavbarIcons/signOut.png";
import { useNavigate } from "react-router-dom";

const OnProfileClick = () => {
  const navigate = useNavigate();
  const handleSignOut = () =>{
    localStorage.removeItem("token");
    navigate("/login");
  }

  return (
    <>
      <div className="h-35 w-40 flex flex-col rounded-xl px-2 pt-2 border-2 border-gray-400 bg-white z-999 relative"> {/* z-index only applies to elements with a positioning context i.e. position:absolute, relative, fixed kehe huna paryo */}
        <span className="flex items-center gap-3 leading-10 hover:bg-gray-200/50 hover:backdrop-blur-sm hover:shadow-md transition duration-300 cursor-pointer"> {/* backdrop: behind the element, small blur + small shadow + gray-200/40 means opacity = 40 */}
          <img src={TwoUsers} className="ml-2.5"/>
          <p> View  Profile</p>
        </span>
        <span className="flex items-center gap-3 leading-10 hover:bg-gray-200/50 hover:backdrop-blur-sm hover:shadow-md transition duration-300 cursor-pointer">{/* transition is equivalent to transition: all 150ms ease; and Enables smooth animation of certain properties when they change (like background color, scale, opacity, etc.). */}
          <img src={Settings} className="ml-2"/>
          <p> Settings</p>
        </span>
        <span onClick={handleSignOut} className="flex items-center gap-1  hover:bg-gray-200/50 hover:backdrop-blur-sm hover:shadow-md transition duration-300 cursor-pointer">
          <img src={SignOut}/>
          <p> Sign Out</p>
        </span>
      </div>
    </>
  );
};

export default OnProfileClick;
