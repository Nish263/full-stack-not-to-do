import TaskSchema from "./task.schema.js";

export const createTask = (obj) => {
  return TaskSchema(obj).save();
};

export const getTasks = (filter) => {
  return TaskSchema.find(filter);
};

export const deleteTask = (_id) => {
  return TaskSchema.findByIdAndDelete(_id);
};
