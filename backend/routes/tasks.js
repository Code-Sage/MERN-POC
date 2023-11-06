import { Router } from "express";
import fetchTasks from "../services/fetchTasks.js";
import addTask from "../services/addTask.js";
import updateStatus from "../services/updateStatus.js";
import deleteTask from "../services/deleteTask.js";

const router = Router();

// fetchTasks service
router.get("/", async (req, res) => {
  await fetchTasks(res);
});

// addTask service
router.post("/", async (req, res) => {
  await addTask(req, res);
});

// updateStatus service
router.put("/", async (req, res) => {
  await updateStatus(req, res);
});

// deleteTask service
router.delete("/:taskId", async (req, res) => {
  await deleteTask(req, res);
});

export default router;
