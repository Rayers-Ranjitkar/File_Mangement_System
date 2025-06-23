import GetFolders from "../Folder/GetFolders";
import GetFiles from "./getFiles";

const FilesFoldersContainer = ({filesRefetch,viewMode,setFoldersNum,folderRefetch}) => {

  return (
    <div>
      {/* Header div */}
      <div className="border-b border-b-gray-400 mb-2">
        <div className="flex mx-8 justify-between text-base font-bold h-8">
          <p className="">{viewMode == "files"?"File Name":"Folder Name"}</p>
          <p>Last Modified</p>
        </div>
      </div>

      {viewMode == "files" ?<GetFiles filesRefetch={filesRefetch}/> : <GetFolders setFoldersNum={setFoldersNum} folderRefetch={folderRefetch} />}
    </div>
  );
};

export default FilesFoldersContainer;
