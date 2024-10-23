import React, { useReducer, useState } from 'react';
import { TaskContext, TaskDispatchContext } from './TaskContext';
import { taskReducer } from './taskReducer';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import TaskBoard from './components/TaskBoard';
import AddTaskModal from './components/AddTaskModal';

function App() {
  const [tasks, dispatch] = useReducer(taskReducer, []);
  const [showModal, setShowModal] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState({});

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
            <TaskBoard
              tasks={tasks}
              searchTerm={searchTerm}
              sortOrder={sortOrder}
              handleSort={handleSort}
              handleEdit={handleEdit}
              setShowModal={setShowModal}
              setEditingTask={setEditingTask}
            />
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
