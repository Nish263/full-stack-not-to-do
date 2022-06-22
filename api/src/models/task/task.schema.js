import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  task: {
    type: String,
    required: true,
    default: "",
    minlength: [3, "cannot be less than 3 character !!!"],
    max: 30,
  },
  hr: {
    type: Number,
    required: true,
  },
});
export default mongoose.model("TaskList", TaskSchema);
