import FileUpload from "../Components/Files/fileUpload";
import Navbar from "../Components/Navbar/Navbar";
import DriveSync from "../Components/DriveSync/DriveSync";
import UploadFolder from "../Components/Folder/UploadFolder";

import { useState } from "react";
import GetFilesSummary from "../Components/Files/getFilesSummary";

import FilesFoldersContainer from "../Components/Files/FilesFoldersContainer";

const PersonalDashboard = () => {
  const [filesRefetch, setFilesRefetch] = useState(false); 
  const [viewMode,setViewMode] = useState("files");
  const [foldersNum,setFoldersNum] = useState(0);
  const [folderRefetch,setFolderRefetch] = useState(false);

  return (
    <div className="font-jakarta lg:px-7">
      <Navbar setViewMode={setViewMode}/>
      <GetFilesSummary filesRefetch={filesRefetch} viewMode={viewMode} foldersNum={foldersNum}/> {/* yei same yeha pathauda huncha as setFilesRefetch ley API mai file upload garedeyesi matrai filesRefetch ko state change garedincha and since, API files data is already updated tesh pichadi aba jaba ma yo duitai dependency array use huncha API is the single truth nita , so summary pani API bata liney ho, files ko data pani so, API updated bhayesakeko ley both refresh garda summary ra fetch nai right aayo, tara if summary was dependent on the filesArr of getFiles then maile dependency ma "files use garnu parthiyo" aahele parena heheh okayyyy 1 line mai bhayooo */}

      {/* Drive Sync div */}
      <div className="border-b border-b-gray-400  ">
        <div className="flex gap-2 ml-8 mt-4 pb-3.5 items-center">
          <DriveSync />
          <p className="font-bold text-sm">Sync with Drive</p>
        </div>
      </div>

      {/* File/Folder Upload div */}
      <div className=" flex justify-between mx-8 my-7">
        <span className="flex flex-col items-center gap-2">
          <FileUpload setFilesRefetch={setFilesRefetch} />{" "}
          {/* align this to center */}
          <p className="text-sm">Upload Files</p>
        </span>

        <span className="flex flex-col items-center gap-2">
          <UploadFolder setFolderRefetch={setFolderRefetch} />
          <p className="text-sm">Upload Folders</p>
        </span>
      </div>

      {/* <GetFiles filesRefetch={filesRefetch} viewMode={viewMode} setFoldersNum={setFoldersNum}/> */} {/* Note here, setFoldersNum is a prop-drilling */}
      <FilesFoldersContainer filesRefetch={filesRefetch} viewMode={viewMode} setFoldersNum={setFoldersNum} folderRefetch={folderRefetch} setFolderRefetch={setFolderRefetch}/>
      {/* <GetFolders /> */}
    </div>
  );
};

export default PersonalDashboard;
