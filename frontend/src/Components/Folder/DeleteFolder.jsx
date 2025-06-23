import { deleteFolderAPI } from "../../Services/API";
import { toast } from "react-toastify";

export const DeleteFolder = async (deleteFolderId,setFolderRefetch) => {
  try {
    const resDeleteFolderAPI = await deleteFolderAPI(deleteFolderId);
    console.log("resDeleteFolderAPI", resDeleteFolderAPI);
    toast.success("Folder Deleted Successfully");
    setFolderRefetch((prev)=>!prev); //when the value of this FolderRefetchChanges since, it's used as a dependency when fetching folders, it again refetches the folder //parent bata child to child to child (statefulVariable) pass
  } catch (error) {
    console.log("Failed to Delete folder!", error);
    toast.error(`Failed to delete the folder`);
  }
};
