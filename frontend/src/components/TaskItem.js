import React, { useContext, useEffect, useState } from "react";
import { TASK_LABELS, TASK_STATUSES } from "../models/task";

import { Button, Flex, Typography, Tag, Card } from "antd";
import { TasksContext } from "../contexts/tasksContext";

function TaskItem({ task }) {
  const { _id, title, description, status } = task.toJson(true);
  const { updateStatus, deleteTask } = useContext(TasksContext);
  return (
    <Card style={{ width: 400, paddingY: 40 }} hoverable={true}>
      <Flex vertical justify="space-evenly">
        <Flex justify="space-between" align="end">
          <Typography.Title level={5}>{task.title}</Typography.Title>
          <Tag>{task.status}</Tag>
        </Flex>
        <Typography.Paragraph ellipsis={{ rows: 2, expandable: true, symbol: "more" }}>{task.description}</Typography.Paragraph>
        <Flex justify="space-between">
          <Button type="dashed" danger onClick={() => deleteTask(_id)}>
            Delete
          </Button>
          <Button type="primary" onClick={() => updateStatus(task._id)} disabled={task.status === TASK_STATUSES.COMPLETED}>
            Mark as Completed
          </Button>
        </Flex>
      </Flex>
    </Card>
  );
}

export default TaskItem;
