class Task {
  constructor(title, desc, status, id) {
    this._id = id;
    this.title = title;
    this.description = desc;
    this.status = status;
  }

  static fromJson(json) {
    return new Task(json.title, json.description, json.status, json._id);
  }

  toJson(withId) {
    if (withId) return { title: this.title, description: this.description, status: this.status, _id: this._id };
    return { title: this.title, description: this.description, status: this.status };
  }
}

const TASK_API_ENDPOINT = "tasks";

const TASK_STATUSES = Object.freeze({ COMPLETED: "Completed", NOT_COMPLETED: "Not Completed" });

const TASK_LABELS = Object.freeze({ TITLE: "Title", DESCRIPTION: "Description", STATUS: "Status" });

const TASK_SLUGS = Object.freeze({ TITLE: "title", DESCRIPTION: "description", STATUS: "status" });

const TASK_ERROR_MSGS = Object.freeze({ TITLE: "Please enter title!", DESCRIPTION: "Please enter description!" });

const TASK_PLACEHOLDERS = Object.freeze({ TITLE: "Title goes here...", DESCRIPTION: "Description goes here...", STATUS: "Select" });

export default Task;

export { TASK_API_ENDPOINT, TASK_STATUSES, TASK_LABELS, TASK_PLACEHOLDERS, TASK_SLUGS, TASK_ERROR_MSGS };
