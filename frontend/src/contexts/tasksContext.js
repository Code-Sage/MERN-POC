import React, { createContext, useState } from "react";
import addTaskAPICall from "../services/addTask";
import deleteTaskAPICall from "../services/deleteTask";
import updateStatusAPICall from "../services/updateStatus";
import fetchTasksAPICall from "../services/fetchTasks";
import Task from "../models/task";
import { TASK_STATUSES } from "../models/task";

const TasksContext = createContext({});

function TasksProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [tasksToShow, setTasksToShow] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [filterValue, setFilterValue] = useState(null);

  const addTask = async task => {
    const addedTask = await addTaskAPICall(task);
    const newTasks = [...tasks, Task.fromJson(addedTask)];
    setTasks(old => newTasks);
    if (filterValue) {
      setTasksToShow(old => newTasks.filter(task => task.status === filterValue));
    } else {
      setTasksToShow(old => newTasks);
    }
    return addedTask;
  };

  const deleteTask = async taskId => {
    const success = await deleteTaskAPICall(taskId);
    setTasks(old => tasks.filter(task => task._id !== taskId));
    setTasksToShow(old => tasksToShow.filter(task => task._id !== taskId));
    return success;
  };

  const updateStatus = async taskId => {
    const updatedTask = await updateStatusAPICall(taskId);
    setTasks(old =>
      tasks.map(task => {
        if (task._id === taskId) {
          task.status = TASK_STATUSES.COMPLETED;
        }
        return task;
      })
    );
    return updatedTask;
  };

  const fetchTasks = async () => {
    const fetchedTasks = await fetchTasksAPICall();
    setTasks(old => fetchedTasks);
    setTasksToShow(old => fetchedTasks);
    return fetchedTasks;
  };

  return (
    <TasksContext.Provider
      value={{
        tasks,
        tasksToShow,
        setTasksToShow,
        addTask,
        deleteTask,
        updateStatus,
        fetchTasks,
        isFormOpen,
        setIsFormOpen,
        filterValue,
        setFilterValue,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
}

export { TasksContext, TasksProvider };
