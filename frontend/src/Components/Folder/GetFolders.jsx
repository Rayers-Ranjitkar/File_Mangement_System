import { useEffect, useState } from "react";
import { GetFoldersAPI } from "../../Services/API";
import { toast } from "react-toastify";

import { FaRegEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import FolderIcon from "../../assets/FileTypeIcons/folderIcon.png";
import EditFolder from "./EditFolder";
import { DeleteFolder } from "./DeleteFolder";

const GetFolders = ({ setFoldersNum, folderRefetch, setFolderRefetch }) => {
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
  }, [
    folderRefetch,
  ]); /* UseEffect runs again when the value of this folderRefetches changes */

  //handle edit click
  const [editFolderId, setEditFolderId] =useState(); /* Prev i was making the state i.e. isEditClicked i.e. one state for all the folders, so state k ko lagi banako ho kun purpose ko lagi tyo socha as same hunu parcha ki different you should know tesailey */
  const handleEditClick = (clickedFolderId) => {
    setEditFolderId(clickedFolderId);
  };

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
              <div className="flex gap-2.5 items-center w-[70%]">
                <img src={FolderIcon} />
                {/* folderName div*/}
                <div className="">
                  {" "}
                  {/* have to give this a fixed width so that the content didn't overflow */}
                  <p className="break-words w-full text-md">
                    {eachElement.name}
                  </p>
                  {/* Icons span */}
                  <span className="flex gap-2 mt-1 mb-1 relative">
                    <AiOutlineDelete
                      onClick={() => DeleteFolder(eachElement._id,setFolderRefetch)} /* passing setFolderRefetch function to deleteFolder as we need to refetch the folders after deletion right so */
                      className="text-red-400 hover:text-red-500 cursor-pointer transition shadow-sm hover:shadow-md rounded"
                    />{" "}
                    {/* added a border radius too as: Because box shadows follow the shape of the element’s border: */}
                    <FaRegEdit
                      onClick={() => handleEditClick(eachElement._id)}
                      className="text-blue-500 hover:text-blue-600 cursor-pointer transition shadow-sm hover:shadow-md rounded"
                    />
                    {editFolderId == eachElement._id && (
                      <span className="absolute top-6">
                        <EditFolder
                          editFolderId={editFolderId}
                          folderRefetch={folderRefetch}
                          setFolderRefetch={setFolderRefetch}
                          setEditFolderId={setEditFolderId}
                        />
                      </span>
                    )}
                  </span>
                </div>
              </div>
              {/* right-content div */}
              <div>
                <p className="text-sm">{eachElement.createdAt.slice(0, 10)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default GetFolders;
