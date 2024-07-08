import React, { useState } from 'react';
import AddTask from './AddTask';
import ListTask from './ListTask';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (description) => {
    const newTask = {
      id: Date.now(),
      description,
      isDone: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, isDone: !task.isDone } : task)));
  };

  const editTask = (id, newDescription) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, description: newDescription } : task)));
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <AddTask addTask={addTask} />
      <ListTask tasks={tasks} toggleTask={toggleTask} editTask={editTask} />
    </div>
  );
};

export default App;