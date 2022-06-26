import { getUser } from "../models/user/user.model.js";

export const userAuth = async (req, res, next) => {
  const { authorization } = req.headers;
  try {
    if (authorization) {
      const user = await getUser(authorization);
      console.log(user);
      return user?._id
        ? next()
        : res.status(403).json({
            status: "error",
            message: "you are not authorised to access this resources",
          });
    }
    res.status(403).json({
      status: "error",
      message: "you are not authorised to access this resources",
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "you are not allowed tto access this information",
    });
  }
  //
};
