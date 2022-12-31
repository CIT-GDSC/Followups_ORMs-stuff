import React from 'react';
import Login from './pages/Login';
import SignUp from './pages/signUp';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import './App.css';

function App() {
  return (
  <div>
    <Login/>
    <SignUp/>
  </div>
  );
}

export default App;
