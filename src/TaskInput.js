import React, { useState } from 'react';

function TaskInput({ addTask }) {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task);
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Nouvelle tâche..." 
        value={task} 
        onChange={(e) => setTask(e.target.value)} 
      />
      <button type="submit">Ajouter</button>
    </form>
  );
}

export default TaskInput;
