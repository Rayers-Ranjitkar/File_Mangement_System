import GetFolders from "../Folder/GetFolders";
import GetFiles from "./GetFiles";

const FilesFoldersContainer = ({filesRefetch,viewMode,setFoldersNum,folderRefetch,setFolderRefetch}) => {

  return (
    <div>
      {/* Header div */}
      <div className="border-b border-b-gray-400 mb-2">
        <div className="flex mx-8 justify-between text-base font-bold h-8">
          <p className="">{viewMode == "files"?"File Name":"Folder Name"}</p>
          <p>Last Modified</p>
        </div>
      </div>

      {viewMode == "files" ?<GetFiles filesRefetch={filesRefetch}/> : <GetFolders setFoldersNum={setFoldersNum} folderRefetch={folderRefetch} setFolderRefetch={setFolderRefetch}/>}
    </div>
  );
};

export default FilesFoldersContainer;
