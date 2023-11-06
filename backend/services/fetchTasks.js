import TaskModel from "../db/schema.js";
/**
 *
 * @param {import("express").Response} res
 */
async function fetchTasks(res) {
  try {
    const tasks = await TaskModel.find({});
    res.status(200).json({ tasks });
    return tasks;
  } catch (e) {
    console.error(e);
    res.sendStatus(400);
    return [];
  }
}

export default fetchTasks;
