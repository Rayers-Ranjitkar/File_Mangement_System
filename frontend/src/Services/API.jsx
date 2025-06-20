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