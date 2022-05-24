import userSchema from "./user.Schema.js";

//insertuser
export const insertUser = (obj) => {
  return userSchema(obj).save();
};

// get user
export const getUser = (_id) => {
  return userSchema.findById(_id);
};

export const findUser = (filter) => {
  return userSchema.findOne(filter);
};
// update user
export const updateUser = (_id, obj) => {
  return userSchema.findByIdAndUpdate(_id, obj);
};
