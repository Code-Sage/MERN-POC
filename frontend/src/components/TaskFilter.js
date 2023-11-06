import React, { useContext, useEffect, useState } from "react";
import { TASK_STATUSES } from "../models/task";
import { Dropdown, Button, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { TasksContext } from "../contexts/tasksContext";

function TaskFilter() {
  const { tasks, setTasksToShow, setFilterValue } = useContext(TasksContext);
  console.log(useContext(TasksContext));
  const allFilterValues = ["All", ...Object.values(TASK_STATUSES)];
  const items = allFilterValues.map(v => ({ label: v, key: v }));

  useEffect(() => {
    setTasksToShow(tasks);
  }, []);

  return (
    <Dropdown
      menu={{
        items: items,
        onClick: e => {
          switch (e.key) {
            case TASK_STATUSES.COMPLETED:
              setTasksToShow(old => tasks.filter(task => task.status === TASK_STATUSES.COMPLETED));
              setFilterValue(old => TASK_STATUSES.COMPLETED);
              break;
            case TASK_STATUSES.NOT_COMPLETED:
              setTasksToShow(old => tasks.filter(task => task.status === TASK_STATUSES.NOT_COMPLETED));
              setFilterValue(TASK_STATUSES.NOT_COMPLETED);
              break;
            default:
              setTasksToShow(old => tasks);
              setFilterValue(null);
              break;
          }
        },
      }}
    >
      <Button>
        <Space>
          Filter By Status
          <DownOutlined />
        </Space>
      </Button>
    </Dropdown>
  );
}

export default TaskFilter;
