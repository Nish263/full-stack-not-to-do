import axios from "axios";

const rootURL = "http://localhost:8000/api/v1";
const userApi = rootURL + "/users";

export const postSignUp = async (frmData) => {
  try {
    const { data } = await axios.post(userApi, frmData);
    console.log(data);
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
