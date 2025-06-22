import TwoUsers from "../../assets/NavbarIcons/twoUsers.png";
import Settings from "../../assets/NavbarIcons/settings.png";
import SignOut from "../../assets/NavbarIcons/signOut.png";

const OnProfileClick = () => {
  return (
    <>
      <div className="h-35 w-40 flex flex-col rounded-xl px-2 pt-2 border-2 border-gray-400 bg-white z-999 relative"> {/* z-index only applies to elements with a positioning context i.e. position:absolute, relative, fixed kehe huna paryo */}
        <span className="flex items-center gap-3 leading-10">
          <img src={TwoUsers} className="ml-2.5"/>
          <p> View  Profile</p>
        </span>
        <span className="flex items-center gap-3 leading-10">
          <img src={Settings} className="ml-2"/>
          <p> Settings</p>
        </span>
        <span className="flex items-center gap-1 ">
          <img src={SignOut}/>
          <p> Sign Out</p>
        </span>
      </div>
    </>
  );
};

export default OnProfileClick;
