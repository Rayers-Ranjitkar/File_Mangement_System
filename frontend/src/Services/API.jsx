import axios from "axios";

const apiInstance = axios.create({
  baseURL: "http://localhost:5000",
});

//Post Login Data To API
export const postLoginDataAPI = (email, password) => {
  return apiInstance.post("/user/login", {
    email: email,
    password: password,
  });
};

//Post Register data
export const postSignUpDataAPI = (email, password) => {
  return apiInstance.post("/user/register", {
    email: email,
    password: password,
  });
};

//Upload files
export const postFileUploadToAPI = (fileData) => {
  const token = localStorage.getItem("token");
  return apiInstance.post("/file/upload", fileData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

//Get files details
export const GetFileFromAPI = () => {
  const token = localStorage.getItem("token");

  return apiInstance.get("/file/list", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

//Get files summary
export const GetFilesSummaryAPI = () => {
  const token = localStorage.getItem("token");
  
  return apiInstance.get("/analytics/summary", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

//Create Folder
export const postCreateFolderAPI = (folderName) => {
  const token = localStorage.getItem("token");
  return apiInstance.post(
    "/folder/create",
    {
      name: folderName,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

//Get Folder
export const GetFoldersAPI = () => {
  const token = localStorage.getItem("token");
  
  return apiInstance.get("/folder/list", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

//Download file & preview file
export const GetDownloadFileAPI = (id) => {
  const token = localStorage.getItem("token");

  return apiInstance.get(`/file/download/id/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    responseType: "blob", // This line is to tell Axios to expect binary data as from API server we'll get a file i.e. a Binary Large Js Object so, converting to BLOB is IMP, without this , Axios tries to parse the response as JSON or text — which corrupts binary files like PDFs or images.
  });
};

//Rename Folder
export const postRenameFolderAPI = (newFolderName,editFolderId) => {
  const token = localStorage.getItem("token");
  return apiInstance.post(
    `/folder/rename/${editFolderId}`,
    {
      name: newFolderName,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

//Delete Folder
export const deleteFolderAPI = (deleteFolderId) => {
  const token = localStorage.getItem("token");
  return apiInstance.delete(
    `/folder/delete/${deleteFolderId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

//Drive Sync
export const patchDriveSyncAPI = (driveEnabledStatus) => {
  const token = localStorage.getItem("token");
  return apiInstance.patch(
    `/user/setting/drive`,
    {
      "enabled": driveEnabledStatus,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

//Responsiveness