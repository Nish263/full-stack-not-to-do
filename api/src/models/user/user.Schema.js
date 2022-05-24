import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      index: 1,
    },
    password: {
      type: String,
      required: true,
      minlength: [5, "password must be 5 character"],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Userlist", userSchema);
