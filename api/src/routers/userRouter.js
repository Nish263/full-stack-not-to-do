import express from "express";
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
router.post("/", (req, res) => {
  console.log(req.body);
  res.send({
    message: "register user",
  });
});

// login user
router.post("/login", (req, res) => {
  console.log(req.body);
  res.send({
    message: " login user",
  });
});
export default router;
