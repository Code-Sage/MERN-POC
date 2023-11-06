import React, { useContext, useEffect, useState } from "react";
import { TASK_LABELS, TASK_STATUSES } from "../models/task";

import { Button, Flex, Typography, Tag, Card, List } from "antd";
import { TasksContext } from "../contexts/tasksContext";
import DarkModeToggle from "./DarkModeToggle";
import TaskItem from "./TaskItem";

function TaskList() {
  const { tasksToShow } = useContext(TasksContext);
  if (tasksToShow.length) {
    const titles = tasksToShow.map(task => ({ title: task.title }));
    return <List itemLayout="horizontal" dataSource={titles} renderItem={(item, index) => <TaskItem task={tasksToShow[index]} />}></List>;
  }
  return <Typography.Text>No Tasks to Show</Typography.Text>;
}

export default TaskList;
