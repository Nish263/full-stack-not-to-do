import TaskSchema from "./task.schema.js";

export const insertTask = (obj) => {
  return TaskSchema(obj).save();
};

export const getTasks = () => {
  return TaskSchema.find();
};

export const deleteTask = (_id) => {
  return TaskSchema.findByIdAndDelete(_id);
};
