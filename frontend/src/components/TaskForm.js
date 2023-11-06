import React, { useContext, useState } from "react";
import { Button, Card, Flex, Input, Form, Typography } from "antd";
import { TasksContext } from "../contexts/tasksContext";
import { TASK_LABELS, TASK_STATUSES, TASK_PLACEHOLDERS, TASK_SLUGS, TASK_ERROR_MSGS } from "../models/task";
import Task from "../models/task";

const { TextArea } = Input;

function TaskForm() {
  const { addTask, fetchTasks, setTasksToShow, setIsFormOpen, filterValue } = useContext(TasksContext);

  const submitTask = async values => {
    const taskToAdd = Task.fromJson({ ...values, status: TASK_STATUSES.NOT_COMPLETED });
    console.log(taskToAdd);
    const addedTask = await addTask(taskToAdd);
    if (addedTask) {
      const tasks = await fetchTasks();
      if (filterValue) {
        switch (filterValue) {
          case TASK_STATUSES.COMPLETED:
            setTasksToShow(old => tasks.filter(task => task.status === TASK_STATUSES.COMPLETED));
            break;
          case TASK_STATUSES.NOT_COMPLETED:
            setTasksToShow(old => tasks.filter(task => task.status === TASK_STATUSES.NOT_COMPLETED));
            break;
          default:
        }
      } else {
        setTasksToShow(old => tasks);
      }
    }
    setIsFormOpen(old => false);
  };

  return (
    <div style={{}}>
      <Card>
        <Form onFinish={submitTask}>
          <Form.Item label={TASK_LABELS.TITLE} name={TASK_SLUGS.TITLE} rules={[{ required: true, message: TASK_ERROR_MSGS.TITLE }]}>
            <Input />
          </Form.Item>
          <Form.Item label={TASK_LABELS.DESCRIPTION} name={TASK_SLUGS.DESCRIPTION} rules={[{ required: true, message: TASK_ERROR_MSGS.DESCRIPTION }]}>
            <TextArea />
          </Form.Item>
          <Form.Item>
            <Flex justify="end">
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Flex>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}

export default TaskForm;
