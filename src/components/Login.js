/** @format */

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice"
import './Login.css';

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch()

  const handlesubmit =(e) =>{
    e.preventDefault();

    dispatch(login({
      name:name,
      email:email,
      password:password,
      login: true,

    })
    )
    
  }

  return (
    <div className='login'>
      <form className='login__from' onSubmit={(e) => handlesubmit(e)}>
        <h1>Login Here 🛫 </h1>
        <input
          type='name'
          placeholder='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type='email'
          placeholder='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          placeholder='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit' className='submit__btn'>Submit</button>
      </form>
    </div>
  );
};

export default Login;
