import axios from "axios";

const rootURL = "http://localhost:8000/api/v1";
const userApi = rootURL + "/users";
const SigninApi = rootURL + "/users/login";
const taskApi = rootURL + "/task";

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

export const postTask = async (frmData) => {
  try {
    const user = JSON.parse(sessionStorage.getItem("userList"));
    const { data } = await axios.post(taskApi, frmData, {
      headers: {
        authorization: user._id,
      },
    });
    return data;
  } catch (error) {
    console.log("error");
    return {
      data: {
        status: "error",
        message: error.message,
      },
    };
  }
};
