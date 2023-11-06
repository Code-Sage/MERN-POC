import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import { Flex, Card, Modal, Button } from "antd";
import TaskList from "./components/TaskList";
import DarkModeToggle from "./components/DarkModeToggle";
import TaskForm from "./components/TaskForm";
import { TasksContext } from "./contexts/tasksContext";
import { LIGHT_MODE_CSS_CLASS } from "./contexts/themeContext";
import TaskFilter from "./components/TaskFilter";

function App() {
  const { isFormOpen, setIsFormOpen, fetchTasks } = useContext(TasksContext);
  useEffect(() => {
    fetchTasks();
    document.body.classList.add(LIGHT_MODE_CSS_CLASS);
    return () => {
      document.body.classList.remove(LIGHT_MODE_CSS_CLASS);
    };
  }, []);
  return (
    <div className="App">
      <Card style={{ height: 600, width: 500, alignSelf: "center", overflow: "auto" }}>
        <Flex justify="space-between">
          <Button type="primary" onClick={() => setIsFormOpen(old => true)}>
            Add new task
          </Button>
          <TaskFilter />
          <DarkModeToggle />
        </Flex>
        <Flex justify="center" style={{ paddingTop: 100 }}>
          <TaskList />
        </Flex>
      </Card>
      {isFormOpen && (
        <Modal open={isFormOpen} onCancel={() => setIsFormOpen(old => false)} footer={null} title="Add a new task">
          <TaskForm />
        </Modal>
      )}
    </div>
  );
}

export default App;
