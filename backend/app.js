import express from "express";
import morgan from "morgan";
import cors from "cors";
import tasksRouter from "./routes/tasks.js";

const app = express();

app.use(cors());

// for logging requests served
app.use(morgan("dev"));

// for JSON parsing of request body
app.use(express.json());

// setting up tasks route
app.use("/tasks", tasksRouter);

export default app;
