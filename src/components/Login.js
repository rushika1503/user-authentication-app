import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import "./Login.css"
import { login } from '../features/userSlice';
import axios from 'axios';

const Login = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        var data = {email:email,password:password}
        axios
        .post(
          "http://localhost:3001/auth/login",
          {
          
              email: email,
              password: password
                          
          }
        )
        .then(response => {
          if (response.statusText== "Created") {
            debugger
            console.log(response.data);
             dispatch(
            login({
              data,
              loggedIn: true,
              registeredIn: true,
            })
          );
          setEmail("");
          setPassword("");
          }
        })
        .catch(error => {
          console.log("login error", error);
        });
        e.preventDefault();
    };
 
    const handleClick = (e) => {
      debugger
  
    };
    return (
        <div className="login">
          <form className="login_form" onSubmit={(e) => handleSubmit(e)} >
             <h1>Login Here</h1>
             <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
             <input type="password" placeholder="Password" value={password}  onChange={(e) => setPassword(e.target.value)} />
             <button type="submit" className="submit_button">Submit </button>
             
          </form>
        </div>
    )
}
export default Login
