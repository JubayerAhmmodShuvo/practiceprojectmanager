import React, { useContext } from 'react';
import { TaskDispatchContext } from '../TaskContext';
import { DeleteIcon, EditIcon } from './Icons';

function TaskCard({ task, color, onEdit }) {
  const dispatch = useContext(TaskDispatchContext);

  const handleDelete = () => {
    dispatch({ type: 'deleted', id: task.id });
  };

  return (
    <div className="mb-4 rounded-lg bg-gray-800 p-4">
      <div className="flex justify-between">
        <h4 className={`mb-2 font-semibold text-${color}-500`}>{task.title}</h4>
        <div className="flex gap-2">
          <button onClick={handleDelete}>
            <DeleteIcon />
          </button>
          <button onClick={() => onEdit(task)}>
            <EditIcon />
          </button>
        </div>
      </div>
      <p className="mb-2 text-sm text-zinc-200">{task.description}</p>
      <p className="mt-6 text-xs text-zinc-400">{task.date}</p>
    </div>
  );
}

export default TaskCard;
