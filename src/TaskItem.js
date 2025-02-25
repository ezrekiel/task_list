import React from 'react';

function TaskItem({ task, toggleTaskCompletion, deleteTask }) {
  return (
    <li className={task.completed ? "completed" : ""}>
      <span>{task.text}</span>
      <div>
        <button onClick={() => toggleTaskCompletion(task.id)}>
          {task.completed ? 'Annuler' : 'Terminé'}
        </button>
        <button onClick={() => deleteTask(task.id)} className="delete-btn">
          Supprimer
        </button>
      </div>
    </li>
  );
}

export default TaskItem;
