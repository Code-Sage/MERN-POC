import mongoose from "mongoose";

import dotenv from "dotenv";

dotenv.config();

const serverURL = process.env.MONGODB_SERVER_URL;
const DB_name = process.env.MONGODB_DATABASE;

const TASK_STATUSES = Object.freeze({ COMPLETED: "Completed", NOT_COMPLETED: "Not Completed" });

const TaskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String, enum: Object.values(TASK_STATUSES) },
  },
  { collection: "Tasks" }
);

mongoose
  .connect([serverURL, DB_name].join("/"))
  .then(() => {
    console.log("Database connection successful");
  })
  .catch(err => {
    console.error("Database connection error", err);
  });

const TaskModel = mongoose.model("Task", TaskSchema);

export default TaskModel;

export { TASK_STATUSES };
