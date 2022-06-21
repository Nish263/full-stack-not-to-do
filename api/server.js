import express from "express";
const app = express();
const PORT = process.env.PORT || 8000;

// database connection
import { dbCon } from "./src/config/db.js";
dbCon();

// setup middleware
import cors from "cors";
import morgan from "morgan";

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

// api
import userRouter from "./src/routers/userRouter.js";
import taskRouter from "./src/routers/taskRouter.js";

app.use("/api/v1/users", userRouter);
app.use("/api/v1/task", taskRouter);

app.get("*", (req, res) => {
  res.status(404).send("<h1> welcome to full stack not to do app <h1>");
});

app.listen(PORT, (error) => {
  error && console.log(error);
  console.log(`Server running on ${PORT}`);
});
