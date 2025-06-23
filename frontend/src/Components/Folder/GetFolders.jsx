import { useEffect, useState } from "react";
import { GetFoldersAPI } from "../../Services/API";
import { toast } from "react-toastify";

import FolderIcon from "../../assets/FileTypeIcons/folderIcon.png"

const GetFolders = ({setFoldersNum,folderRefetch}) => {
  const [folders, setFolders] = useState([]);
  useEffect(() => {
    const getFolderFunc = async () => {
      try {
        const resGetFoldersAPI = await GetFoldersAPI();
        console.log("resGetFoldersAPI📁", resGetFoldersAPI);
        // toast.success("Folder Fetched Successful");
        setFolders(resGetFoldersAPI.data.data);
        setFoldersNum(resGetFoldersAPI.data.data.length);
      } catch (error) {
        console.log("Failed to fetch Folder from API server!", error);
        toast.error("Failed to fetch Folders!");
      }
    };
    getFolderFunc();
  }, [folderRefetch]);

  return (
    <>
      {/* {console.log(folders)}; */}
      <div className="flex flex-col gap-2">
        {folders.map((eachElement) => (
          <div key={eachElement._id} className="border-b border-b-gray-300">
            {" "}
            {/* as other div had margin, but i needed this border-b without space so i created the div without margin */}
            <div
              key={eachElement._id}
              className="flex mr-8 ml-4 justify-between text-md py-1 items-center"
            >
              {/* left-content div */}
              <div className="flex gap-2 items-center w-[70%]">
                <img
                  src={FolderIcon}
                />
                {/* folderName div*/}
                <div className="w-[calc(100%-40px)]">
                  {" "}
                  {/* have to give this a fixed width so that the content didn't overflow */}
                  <p className="break-words w-full text-md">
                    {eachElement.name}
                  </p>
                </div>
              </div>
              {/* right-content div */}
              <div>
                <p className="text-sm">{eachElement.createdAt.slice(0,10)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default GetFolders;
