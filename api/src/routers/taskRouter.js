import express from "express";
import { getTasks, insertTask, deleteTask } from "../models/task/task.model.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const result = await getTasks();
  res.json({
    status: "success",
    result,
  });
});

router.post("/", async (req, res) => {
  try {
    const result = await insertTask(req.body);
    console.log(result);
    res.json({
      status: "success",
      message: "your new task has been added succesfully",
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
