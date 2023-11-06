import TaskModel from "../db/schema.js";
/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
async function addTask(req, res) {
  try {
    console.log(req.body.task);
    const newTask = new TaskModel({ ...req.body.task });
    const savedTask = await newTask.save();
    res.status(201).json({ newTask: savedTask.toJSON() });
    return newTask;
  } catch (e) {
    console.error(e);
    res.sendStatus(400);
    return null;
  }
}

export default addTask;
