import axios from "axios";
import { TASK_API_ENDPOINT } from "../models/task";
import Task from "../models/task";

/**
 *
 * @param {import("../models/task").default} task
 */
async function addTaskAPICall(task) {
  //axios call to BE_URL with with payload: task: task.toJson()
  try {
    const url = [process.env.REACT_APP_BE_URL, TASK_API_ENDPOINT].join("/");
    const response = await axios.post(url, { task: task.toJson(false) });
    return Task.fromJson(response.data.newTask);
  } catch (e) {
    console.error(e);
    return null;
  }
}

export default addTaskAPICall;
