import { FaFolderPlus } from "react-icons/fa6";
import OnFolderUpload from "./OnFolderUpload";
import { useState } from "react";

const UploadFolder = () => {
  const [isUploadFolderClicked, SetIsUploadFolderClicked] = useState(true);
  const handleFolderUpload = () => {
    SetIsUploadFolderClicked(!isUploadFolderClicked);
  };

  return (
    <>
      <div className="relative h-10 w-10 border-1 border-gray-600 rounded-full p-2 cursor-pointer">
        <FaFolderPlus
          className="h-full w-full object-cover"
          onClick={handleFolderUpload}
        />
        {isUploadFolderClicked && (
          <span className="absolute -right-10 top-18">
            <OnFolderUpload />{" "}
            {/* Component ma classname + absolute haru chaldaina haita so put in span and do */}
          </span>
        )}
      </div>
    </>
  );
};

export default UploadFolder;
