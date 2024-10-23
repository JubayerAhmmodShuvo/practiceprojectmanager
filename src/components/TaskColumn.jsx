import React from 'react';
import TaskCard from './TaskCard';

function TaskColumn({ title, tasks, color, onSort, onEdit }) {
  const getBgColorClass = () => {
    switch (title) {
      case 'To-Do':
        return 'bg-indigo-600';
      case 'On Progress':
        return 'bg-yellow-500';
      case 'Done':
        return 'bg-teal-500';
      case 'Revise':
        return 'bg-rose-500';
      default:
        return `bg-${color}-500`;
    }
  };

  return (
    <div className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
      <div className={`rounded-lg ${getBgColorClass()} p-4`}>
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-lg font-semibold">{title} ({tasks.length})</h3>
          <button onClick={onSort}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-sort-descending">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 6l9 0" />
              <path d="M4 12l7 0" />
              <path d="M4 18l7 0" />
              <path d="M15 15l3 3l3 -3" />
              <path d="M18 6l0 12" />
            </svg>
          </button>
        </div>
        <div>
          {tasks.length === 0 ? (
            <p className="text-center text-black">Task List is empty!</p>
          ) : (
            tasks.map(task => (
              <TaskCard key={task.id} task={task} color={color} onEdit={onEdit} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default TaskColumn;
