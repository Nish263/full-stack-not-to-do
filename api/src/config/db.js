import mongoose from "mongoose";
export const dbCon = () => {
  try {
    const conString = "mongodb://localhost:27017/not-to-do";
    const connection = mongoose.connect(conString);

    connection && console.log("mongo connected");
  } catch (error) {
    console.log(error);
  }
};
