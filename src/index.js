import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import Login from './components/Login';
import SignUp from './components/Signup';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';
import Dashboard from './components/Dashboard';


ReactDOM.render(
  <BrowserRouter>
    <Auth0Provider>
      <Routes>
        <Route path="/" element={<App />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Auth0Provider>
  </BrowserRouter>, document.getElementById("root")
)