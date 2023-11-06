import TaskModel, { TASK_STATUSES } from "../db/schema.js";
/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
async function updateStatus(req, res) {
  try {
    const taskId = req.body.taskId;
    const updatedTask = await TaskModel.findByIdAndUpdate(
      taskId,
      { $set: { status: TASK_STATUSES.COMPLETED } },
      {
        new: true, // return updated doc
        runValidators: true, // validate before update
      }
    );
    res.status(200).json({ updatedTask });
    return updatedTask;
  } catch (e) {
    console.error(e);
    res.sendStatus(400);
    return null;
  }
}

export default updateStatus;
