import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Login from './components/Login';
import SignUp from './components/Signup';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} /> 
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
   </Routes>
  </BrowserRouter>, document.getElementById("root")
)