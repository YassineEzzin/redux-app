// src/Task.js
import React, { useState } from 'react';

const Task = ({ task, toggleTask, editTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newDescription, setNewDescription] = useState(task.description);

  const handleEdit = () => {
    editTask(task.id, newDescription);
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <>
          <input
            type="text"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />
          <button onClick={handleEdit}>Save</button>
        </>
      ) : (
        <>
          <span
            style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}
            onClick={() => toggleTask(task.id)}
          >
            {task.description}
          </span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
    </div>
  );
};

export default Task;
