import axios from "axios";

const rootURL = "http://localhost:8000/api/v1";
const userApi = rootURL + "/users";
const SigninApi = rootURL + "/users/login";

export const postSignUp = (frmData) => {
  try {
    return axios.post(userApi, frmData);
  } catch (error) {
    const data = {
      status: "error",
      message: error.message,
    };
    return {
      data,
    };
  }
};

export const postSignIn = (frmData) => {
  try {
    return axios.post(SigninApi, frmData);
  } catch (error) {
    const data = {
      status: "error",
      message: error.message,
    };
    return {
      data,
    };
  }
};
