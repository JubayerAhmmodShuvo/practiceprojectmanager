import React from 'react';
import TaskCard from './TaskCard';

function TaskList({ tasks, color, onEdit }) {
  if (tasks.length === 0) {
    return <p className="text-center text-black">Task List is empty!</p>;
  }

  return (
    <div>
      {tasks.map(task => (
        <TaskCard key={task.id} task={task} color={color} onEdit={onEdit} />
      ))}
    </div>
  );
}

export default TaskList;