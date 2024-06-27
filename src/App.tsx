import React from 'react';
// react-router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// pages
import HomePage from './pages/HomePage';
import TasksPage from './pages/TasksPage';
import ItemsPage from './pages/ItemsPage';
// layout
import Layout from './Layout';

const App: React.FC = () => (
  <Router>
      <Routes> 
          <Route path="/" element={<HomePage />} />
          <Route path="/tasks" element={<Layout>
            <TasksPage />
          </Layout>} />
          <Route path="/items" element={<ItemsPage />} /> 
        
      </Routes>
  </Router>
);

export default App;