import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import './index.css';
import Home from './routes/Home';
import Donate from './routes/Donate';
import Donaters from './routes/Donaters';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Aboutus from './routes/Aboutus';
import Final from './redirect/Final';
import Hospitals from './Hospital/HospitalFinal';
import Signup from './components/Signup';
import Form from './components/Form';
import UserReview from './components/UserReview';
import Profile from './components/Profile';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route path='/' element={<Navigate to='/home' />} />

          <Route path='home' element={<Home />} />
          <Route path='donate' element={<Donate />} />
          <Route path='donaters' element={<Donaters />} />
          <Route path='reviews' element={<UserReview />} />
          <Route path='aboutus' element={<Aboutus />} />
          <Route path='availableusers' element={<Final />} />
          <Route path='yourProfile' element={<Profile />} />
          <Route
            path='/availableusers/hospitals'
            element={<Navigate to='/hospitals' />}
          />
          <Route path='hospitals' element={<Hospitals />} />
        </Route>
        <Route path='Login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
        <Route path='form' element={<Form />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
