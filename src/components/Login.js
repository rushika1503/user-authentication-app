import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import "./Login.css"
import { login } from '../features/userSlice';
import axios from 'axios';

const Login = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    let errorsObj = {email: '', password:''}
    const[errors,setErrors] = useState(errorsObj);
    const[loginStatus, setLoginStatus] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        handleValidation();
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
          debugger
          if (response.statusText=== "OK") {
            debugger
            setLoginStatus('');
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
           setLoginStatus(error.response.data.error);
        });
        e.preventDefault();
    };
    const handleValidation =(e) => {
      debugger
      let error = false;
      const errorObj = {...errorsObj};
      if(email===''){
       errorObj.email = 'Email is required';
       error = true;
      }
      if(password===''){
       errorObj.password = 'Password is required';
       error = true;
      }
      setErrors(errorObj);
     if (error) {
       return;
     }
    }

    return (
        <div className="login">
          <form className="login_form" onSubmit={(e) => handleSubmit(e)} >
             <h1>Login Here</h1>
             <input 
                type="email" 
                placeholder="Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
             />
             {errors.email && <div id="error-msg" >{errors.email}</div>}
             
             <input 
                type="password" 
                placeholder="Password" 
                value={password}  
                onChange={(e) => setPassword(e.target.value)} 
             />
             {errors.password && <div id="error-msg">{errors.password}</div>}
             
             <button type="submit" className="submit_button">Submit </button> 
          </form>
          <h4 id="error-msg">{loginStatus}</h4>
        </div>
    )
}
export default Login
