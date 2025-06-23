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

//Delete File

//View File

//Drive Sync
