import React from 'react';
import Login from './pages/Login';
import SignUp from './pages/signUp';
import Dashboard from './pages/Dashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/'element={<Dashboard/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>} />
      </Routes>
    </Router>
  );
}

export default App;
