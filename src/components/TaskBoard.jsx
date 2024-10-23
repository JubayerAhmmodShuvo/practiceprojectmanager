import React from 'react';
import TaskColumnList from './TaskColumnList';
import TaskBoardHeader from './TaskBoardHeader';

function TaskBoard({ tasks, searchTerm, sortOrder, handleSort, handleEdit, setShowModal, setEditingTask }) {
  const filteredTasks = tasks.filter(task => 
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortTasks = (tasksToSort, status) => {
    return tasksToSort.sort((a, b) => {
      if (sortOrder[status] === 'asc') {
        return new Date(a.date) - new Date(b.date);
      } else if (sortOrder[status] === 'desc') {
        return new Date(b.date) - new Date(a.date);
      }
      return 0;
    });
  };

  const todoTasks = sortTasks(filteredTasks.filter(task => task.status === 'todo'), 'todo');
  const inProgressTasks = sortTasks(filteredTasks.filter(task => task.status === 'inprogress'), 'inprogress');
  const doneTasks = sortTasks(filteredTasks.filter(task => task.status === 'done'), 'done');
  const reviseTasks = sortTasks(filteredTasks.filter(task => task.status === 'revised'), 'revised');

  return (
    <div className="mx-auto max-w-7xl p-6">
      <TaskBoardHeader setShowModal={setShowModal} setEditingTask={setEditingTask} />
      <TaskColumnList 
        todoTasks={todoTasks}
        inProgressTasks={inProgressTasks}
        doneTasks={doneTasks}
        reviseTasks={reviseTasks}
        handleSort={handleSort}
        handleEdit={handleEdit}
      />
    </div>
  );
}

export default TaskBoard;
