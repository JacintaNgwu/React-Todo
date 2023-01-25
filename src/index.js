import React from 'react';
import ReactDOM from 'react-dom/client';
// react-router-dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './pages/About';
import NotMatch from './pages/NotMatch';
import Navbar from './functionBased/components/Navbar';

// component file
import TodoContainer from './functionBased/components/TodoContainer';

// stylesheet
import './functionBased/App.css';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
     <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<TodoContainer />} />
        <Route exact path='about' element={<About />} />
        <Route path='*' element={<NotMatch />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
