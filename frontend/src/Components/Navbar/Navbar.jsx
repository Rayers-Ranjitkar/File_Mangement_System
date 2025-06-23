import FileIcon from "../../assets/NavbarIcons/fileIcon.png"
import FolderIcon from "../../assets/NavbarIcons/folderIcon.png"
import UserProfile from "../../assets/NavbarIcons/userProfile.jpeg"
import { CiFileOn } from "react-icons/ci";

import OnProfileClick from "./OnProfileClick";

import { useState } from "react";


const Navbar = ({setViewMode}) => {
  
    //Profile click box-pop
    const [isProfileClicked,setIsProfileClicked] = useState(false);
    const handleProfileClick = () =>{
        setIsProfileClicked(!isProfileClicked);
    };

  return (
    <>
      <div className="w-full h-14 border-b border-b-gray-400 flex justify-between items-center px-5">
        {/* Files and Folder icons div */}
        <div className="flex gap-4">
            <span className="relative cursor-pointer" onClick={()=>{setViewMode("files")} }>
                <img src={FileIcon} alt="fileIcon" className="cursor-pointer" />
                <CiFileOn className="absolute inset-0 h-5 w-5 m-auto text-[#22C55E]"/>
            </span>
            <span>
                <img src={FolderIcon} alt="folderIcon" className="cursor-pointer" onClick={()=>{setViewMode("folders")} }/>
            </span>
        </div>

        {/* Profile Pic Div */}
        <div className="h-10 w-10 relative" onClick={handleProfileClick}>
            <img src={UserProfile} alt="folderIcon" className="h-full w-full object-cover cursor-pointer"/>
            {/* On-profile-click-popUp span */}
            {isProfileClicked && <span className="absolute -right-2 top-12 ">
            <OnProfileClick/> 
            </span>}
        </div>
      </div>

    </>
  );
};

export default Navbar;
