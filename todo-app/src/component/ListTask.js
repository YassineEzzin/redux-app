// src/ListTask.js
import React, { useState } from 'react';
import Task from './Task';

const ListTask = ({ tasks, toggleTask, editTask }) => {
  const [filter, setFilter] = useState('all');

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'done') return task.isDone;
    if (filter === 'not-done') return !task.isDone;
    return true;
  });

  return (
    <div>
      <div>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('done')}>Done</button>
        <button onClick={() => setFilter('not-done')}>Not Done</button>
      </div>
      {filteredTasks.map((task) => (
        <Task key={task.id} task={task} toggleTask={toggleTask} editTask={editTask} />
      ))}
    </div>
  );
};

export default ListTask;