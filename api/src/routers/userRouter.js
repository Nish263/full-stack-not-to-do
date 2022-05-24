import express from "express";
import { getUser, insertUser, findUser } from "../models/user/user.model.js";
const router = express.Router();

// router.all("/", (req, res, next) => {
//   console.log("router got hit");
//   next();
// });

// get user

router.get("/", (req, res) => {
  res.send({
    message: "get user",
  });
});

// register user
router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const result = await insertUser(req.body);
    result?._id
      ? res.json({
          status: "success",
          message: "Registration successfull",
        })
      : res.json({
          status: "error",
          message: "Registration failed, try agian",
        });
  } catch (error) {
    let message = error.message;
    if (error.message.includes("duplicate key error collection"))
      message = "User already exist with this email";
  }
  res.json({
    status: "error",
    message: error.message,
  });
});

// login user
router.post("/login", async (req, res) => {
  try {
    const user = await findUser(req.body);
    user?._id
      ? res.json({
          status: "success",
          user,
        })
      : res.json({
          status: "error",
          message: "invalid login credential",
        });
  } catch (error) {
    console.log(error);
    res.json({
      status: "error",
      message: error.message,
    });
  }
});
export default router;
