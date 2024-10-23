
import React from 'react';
import logo from '../assets/lws-logo-en.svg';
import { 
  DashboardIcon, 
  ProjectsIcon, 
  ContactIcon, 
  KanbanIcon, 
  CalendarIcon, 
  MessagesIcon, 
  SettingsIcon 
} from './Icons'; // Import all your icons

function Sidebar() {
  return (
    <aside className="hidden w-64 bg-gray-800 p-6 lg:block">
      <div className="mb-8 flex items-center">
        <div className="flex items-center justify-center rounded-full text-xl font-bold">
          <img src={logo} className="mx-auto h-10 text-center" alt="Logo" />
        </div>
      </div>
      <button className="mb-8 w-full rounded-md bg-green-500 py-2 text-white">
        + New Project
      </button>
      <nav>
        <ul className="space-y-4">
          <li>
            <a href="#" className="flex items-center">
              <DashboardIcon />
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center">
              <ProjectsIcon />
              Projects
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center">
              <ContactIcon />
              Contact
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center">
              <KanbanIcon />
              Kanban
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center">
              <CalendarIcon />
              Calendar
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center">
              <MessagesIcon />
              Messages
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center">
              <SettingsIcon />
              Settings
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;