import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { ToDoList } from './pages/ToDoList';

// импорт в фигурных скобках


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ToDoList />
  </React.StrictMode>
);

