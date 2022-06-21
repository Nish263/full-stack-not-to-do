import TaskListSchema from "./task.schema.js";

export const insertTask = (obj) => {
  return TaskListSchema(obj).save();
};

export const getTasks = () => {
  return TaskListSchema.find();
};

export const deleteTask = (_id) => {
  return TaskListSchema.findByIdAndDelete(_id);
};
