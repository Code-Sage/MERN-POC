import app from "./app.js";

import TaskModel from "./db/schema.js";

const SERVER_PORT = parseInt(process.env.SERVER_PORT);

app.listen(SERVER_PORT, () => console.log(`Server started: listening at http://localhost:${SERVER_PORT}`));
