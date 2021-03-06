import express from "express";
import { getTasks, createTask, deleteTask } from "../models/task/task.model.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { authorization } = req.headers;

    // get all task of user_id authorization

    const tasks = await getTasks({ user_id: authorization });
    res.json({
      status: "success",
      tasks,
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const { authorization } = req.headers;
    const result = await createTask({ ...req.body, user_id: authorization });
    result?._id
      ? res.json({
          status: "success",
          message: "New task created succesfully",
        })
      : res.json({
          status: "error",
          message: "Error creating task,please try again later",
        });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

router.delete("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;

    const result = await deleteTask(_id);

    result?._id
      ? res.json({
          status: "success",
          message: "Task deleted successfully",
          result,
        })
      : res.json({
          status: "success",
          message: "No task available to delete",
        });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

export default router;
