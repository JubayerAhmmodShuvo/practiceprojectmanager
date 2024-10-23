import React, { useReducer, useState } from 'react';
import { TaskContext, TaskDispatchContext } from './TaskContext';
import { taskReducer } from './taskReducer';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import TaskColumn from './components/TaskColumn';
import AddTaskModal from './components/AddTaskModal';

function App() {
  const [tasks, dispatch] = useReducer(taskReducer, []);
  const [showModal, setShowModal] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState({});

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

  const handleSort = (status) => {
    setSortOrder(prevOrder => ({
      ...prevOrder,
      [status]: prevOrder[status] === 'asc' ? 'desc' : 'asc'
    }));
  };

  const handleEdit = (task) => {
    setEditingTask(task);
    setShowModal(true);
  };

  return (
    <TaskContext.Provider value={tasks}>
      <TaskDispatchContext.Provider value={dispatch}>
        <div className="flex h-screen bg-gray-900 text-white">
          <Sidebar />
          <main className="flex-1 overflow-y-auto overflow-x-hidden">
            <Header 
              setShowModal={setShowModal} 
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
            <div className="mx-auto max-w-7xl p-6">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl font-bold">Projectify</h2>
                <button
                  onClick={() => {
                    setEditingTask(null);
                    setShowModal(true);
                  }}
                  className="flex items-center rounded-md bg-gray-700 px-4 py-2 text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
                    <path d="M15 12h-6" />
                    <path d="M12 9v6" />
                  </svg>
                  Add
                </button>
              </div>

              <div className="-mx-2 mb-6 flex flex-wrap">
                <TaskColumn title="To-Do" tasks={todoTasks} color="indigo" onSort={() => handleSort('todo')} onEdit={handleEdit} />
                <TaskColumn title="On Progress" tasks={inProgressTasks} color="yellow" onSort={() => handleSort('inprogress')} onEdit={handleEdit} />
                <TaskColumn title="Done" tasks={doneTasks} color="teal" onSort={() => handleSort('done')} onEdit={handleEdit} />
                <TaskColumn title="Revise" tasks={reviseTasks} color="rose" onSort={() => handleSort('revised')} onEdit={handleEdit} />
              </div>
            </div>
          </main>
        </div>
        {showModal && (
          <AddTaskModal
            setShowModal={setShowModal}
            taskToEdit={editingTask}
          />
        )}
      </TaskDispatchContext.Provider>
    </TaskContext.Provider>
  );
}

export default App;
