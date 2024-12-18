import React from 'react';

function TaskItem({ task, toggleTaskCompletion, deleteTask }) {
  return (
    <li style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
      {task.text}
      <button onClick={() => toggleTaskCompletion(task.id)}>
        {task.completed ? 'Annuler' : 'Terminé'}
      </button>
      <button onClick={() => deleteTask(task.id)}>Supprimer</button>
    </li>
  );
}

export default TaskItem;
