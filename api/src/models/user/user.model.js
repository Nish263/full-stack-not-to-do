import userSchema from "./user.Schema.js";

//insertuser
export const insertUser = (obj) => {
  return userSchema(obj).save();
};

// read all user
export const getUser = (_id) => {
  return userSchema.findById(_id);
};

//get a User
export const getAUserByID = (_id) => {
  return userSchema.findById(_id);
};

// find user by any filter
export const findUser = (filter) => {
  return userSchema.findOne(filter);
};

// update user
export const updateUser = (_id, obj) => {
  return userSchema.findByIdAndDelete(_id, obj);
};
// update   User password
export const updateUserPassword = ({ _id, newPassword }) => {
  return userSchema.findByIdAndUpdate(
    _id,
    {
      password: newPassword,
    },
    {
      new: true,
    }
  );
};
