import { useState } from "react";
import { postRenameFolderAPI } from "../../Services/API";
import { toast } from "react-toastify";

const EditFolder = ({ editFolderId, setFolderRefetch, setEditFolderId }) => {
  const [newFolderName, setNewFolderName] = useState("");
  const handleRenameInputChange = (e) => {
    setNewFolderName(e.target.value);
  };

  const handleRenameFolder = async () => {
    try {
      const resPostRenameFolderAPI = await postRenameFolderAPI(
        newFolderName,
        editFolderId
      );
      console.log("resPostRenameFolderAPI✏", resPostRenameFolderAPI);
      toast.success("Folder Renamed Successfully");
      setNewFolderName("");
      setFolderRefetch((prev) => !prev); //when the value of this FolderRefetchChanges since, it's used as a dependency when fetching folders, it again refetches the folder //parent bata child to child to child (statefulVariable) pass
      handleRenameClose(); //close the pop-up
    } catch (error) {
      console.log("Failed to rename folder!", error);
      toast.error(`Folder Rename failed! Folder name can't be empty.`);
    }
  };

  const handleRenameClose = () => {
    setEditFolderId(0); //changing the editfolder id to something as previously it had the folderId of the folder which was clicked aba I'm changing that
  };

  return (
    <>
      <div className="h-35 w-54 flex flex-col gap-1 items-center rounded-xl px-2 pt-6 pb-2 border-2 border-gray-400 bg-white z-999 relative ">
        {/* Close Icon */}
        <button
          onClick={handleRenameClose}
          className="absolute top-0 right-2 text-gray-500 hover:text-red-500 text-xl font-bold cursor-pointer"
        >
          &times;
        </button>
        {/* Input box */}
        <input
          onChange={handleRenameInputChange}
          type="text"
          placeholder="New Folder Name..."
          className="w-[85%] mb-3 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          value={newFolderName}
        />
        {/* Purple button */}
        <button
          onClick={handleRenameFolder}
          className="bg-[#a04beb] text-white py-2 rounded-md hover:bg-purple-700 transition w-[80%]"
        >
          {" "}
          {/* The transition class by itself applies a default smooth transition to common properties , transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1); */}
          Create Folder
        </button>
      </div>
    </>
  );
};

export default EditFolder;
