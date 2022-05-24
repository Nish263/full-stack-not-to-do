import userSchema from "./user.Schema";

//insertuser
export const insertUser = (obj) => {
  return userSchema(obj).save();
};

// get user
export const getUser = (_id) => {
  return userSchema.findById(_id);
};

// update user
export const updateUser = (_id, obj) => {
  return userSchema.findByIdAndUpdate(_id, obj);
};
