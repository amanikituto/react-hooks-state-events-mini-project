import React from 'react';

function Task({ task, onDeleteTask }) {
  return (
    <div className="task">
      <div>{task.text}</div>
      <div>{task.category}</div>
      <button onClick={() => onDeleteTask(task.text)}>Delete</button>
    </div>
  );
}

export default Task;
