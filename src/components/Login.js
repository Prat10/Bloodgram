import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from "react-router-dom";
import { BsPersonCircle } from 'react-icons/bs'
import Navbar from './Navbar';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:3004/signin', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body:JSON.stringify({
        email,
        password
      })
    });
    console.log(res);
    const data = await res.json();
    console.log(data);
    console.log(data.status)
    if (res.status === 400 || !data) {
      window.alert("Invalid Credntials");
    }
    else {
      navigate("/yourProfile");
    }
  }
  return (
    <div className='login-page'>
      <h1>Login</h1>
      <div className='login-pack'>
        <BsPersonCircle className='login-icons' />
        <form method='POST'>
          <label>
            <input className='inpu'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Enter Your Email' />
          </label>
          <label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Enter Your Password'>
              </input>
          </label>
          <h2 className='forget'>Forget the Password?</h2>
          <button type='onSubmit' className='lo' onClick={loginUser}>Sign in</button>
        </form>
        <div><h2>New to BloodGram?<a href="/signup">Create an account</a></h2></div>
        {/* <button className='rese'>Forgot Password</button> */}
      </div>
    </div>
  );
}

export default Login;
