import axios from "axios";
import { TASK_API_ENDPOINT } from "../models/task";
import Task from "../models/task";

async function updateStatusAPICall(taskId) {
  //axios call to BE_URL with payload = taskId: taskId
  try {
    const url = [process.env.REACT_APP_BE_URL, TASK_API_ENDPOINT].join("/");
    const response = await axios.put(url, { taskId: taskId });
    return Task.fromJson(response.data.updatedTask);
  } catch (e) {
    console.error(e);
    return null;
  }
}

export default updateStatusAPICall;
