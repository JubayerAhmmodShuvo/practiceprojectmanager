import React from 'react';
import { AddIcon } from './Icons';

function TaskBoardHeader({ setShowModal, setEditingTask }) {
  return (
    <div className="mb-6 flex items-center justify-between">
      <h2 className="text-2xl font-bold">Projectify</h2>
      <button
        onClick={() => {
          setEditingTask(null);
          setShowModal(true);
        }}
        className="flex items-center rounded-md bg-gray-700 px-4 py-2 text-white"
      >
        <AddIcon />
        Add
      </button>
    </div>
  );
}

export default TaskBoardHeader;