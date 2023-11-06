import TaskModel from "../db/schema.js";
/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
async function deleteTask(req, res) {
  try {
    const taskId = req.params.taskId;
    const success = await TaskModel.findByIdAndDelete(taskId);
    if (success) {
      res.status(200).json({ deletedTask: success });
      return success;
    } else {
      res.sendStatus(400);
      return null;
    }
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
    return null;
  }
}

export default deleteTask;
