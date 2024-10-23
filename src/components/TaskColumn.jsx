import React from 'react';
import TaskList from './TaskList';
import TaskColumnHeader from './TaskColumnHeader';

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
        <TaskColumnHeader title={title} tasksCount={tasks.length} onSort={onSort} />
        <TaskList tasks={tasks} color={color} onEdit={onEdit} />
      </div>
    </div>
  );
}

export default TaskColumn;
