import React, { useState, useContext } from 'react';
import { TaskDispatchContext } from '../TaskContext';
import TaskForm from './TaskForm';
import ModalWrapper from './ModalWrapper';

function AddTaskModal({ setShowModal, taskToEdit = null }) {
  const [error, setError] = useState('');
  const dispatch = useContext(TaskDispatchContext);

  const handleSubmit = (formData) => {
    if (!formData.title || !formData.description || !formData.date || !formData.status) {
      setError('All fields are required');
      return;
    }
    if (taskToEdit) {
      dispatch({
        type: 'edited',
        task: { ...taskToEdit, ...formData }
      });
    } else {
      dispatch({
        type: 'added',
        ...formData
      });
    }
    setShowModal(false);
  };

  return (
    <ModalWrapper>
      <h2 className="mb-6 text-2xl font-bold text-green-400">
        {taskToEdit ? 'Update Task' : 'Create Task'}
      </h2>
      {error && <p className="mb-4 text-red-500">{error}</p>}
      <TaskForm onSubmit={handleSubmit} initialData={taskToEdit} setShowModal={setShowModal} />
    </ModalWrapper>
  );
}

export default AddTaskModal;
