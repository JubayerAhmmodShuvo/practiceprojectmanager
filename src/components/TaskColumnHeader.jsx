import React from 'react';
import { SortIcon } from './Icons';

function TaskColumnHeader({ title, tasksCount, onSort }) {
  return (
    <div className="mb-2 flex items-center justify-between">
      <h3 className="text-lg font-semibold">{title} ({tasksCount})</h3>
      <button onClick={onSort}>
        <SortIcon />
      </button>
    </div>
  );
}

export default TaskColumnHeader;