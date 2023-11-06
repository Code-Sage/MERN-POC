import axios from "axios";
import { TASK_API_ENDPOINT } from "../models/task";
import Task from "../models/task";

async function fetchTasksAPICall() {
  //axios call to BE_URL
  try {
    const url = [process.env.REACT_APP_BE_URL, TASK_API_ENDPOINT].join("/");
    const response = await axios.get(url);
    return response.data.tasks.map(task => Task.fromJson(task));
  } catch (e) {
    console.error("ERROR", e);
    return [];
  }
}

export default fetchTasksAPICall;
