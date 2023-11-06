import axios from "axios";
import { TASK_API_ENDPOINT } from "../models/task";
import Task from "../models/task";

async function deleteTaskAPICall(taskId) {
  //axios call to BE_URL with with REST parameter = taskId: taskId
  try {
    const url = [process.env.REACT_APP_BE_URL, TASK_API_ENDPOINT, taskId].join("/");
    const response = await axios.delete(url);
    return Task.fromJson(response.data.deletedTask);
  } catch (e) {
    console.error(e);
    return null;
  }
}

export default deleteTaskAPICall;
