import React from 'react';
import TaskColumn from './TaskColumn';

function TaskColumnList({ todoTasks, inProgressTasks, doneTasks, reviseTasks, handleSort, handleEdit }) {
  return (
    <div className="-mx-2 mb-6 flex flex-wrap">
      <TaskColumn title="To-Do" tasks={todoTasks} color="indigo" onSort={() => handleSort('todo')} onEdit={handleEdit} />
      <TaskColumn title="On Progress" tasks={inProgressTasks} color="yellow" onSort={() => handleSort('inprogress')} onEdit={handleEdit} />
      <TaskColumn title="Done" tasks={doneTasks} color="teal" onSort={() => handleSort('done')} onEdit={handleEdit} />
      <TaskColumn title="Revise" tasks={reviseTasks} color="rose" onSort={() => handleSort('revised')} onEdit={handleEdit} />
    </div>
  );
}

export default TaskColumnList;