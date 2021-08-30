import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import "./Login.css"
import { registration } from '../features/userSlice';
import { Route } from 'react-router-dom';
import axios from 'axios';

const Registration = () => {
    const [email,setEmail] = useState("");
    const [name,setName] = useState("");
    const [userName,setUserName] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
      var data = {  name :name,
        username :userName,
        email :email, 
        password :password,
        password_confirmation: confirmPassword}
       
        axios.post("http://localhost:3001/users",{
           
            name :name,
            username :userName,
            email :email, 
            password :password,
            password_confirmation: confirmPassword
          
          
        }
        ).then(response => {
          debugger
          console.log("registration res", response);
          dispatch(
            registration({
              data,
              registeredIn: true,
              loggedIn: false,
            })
          );
        }).catch(error => {
          debugger
          console.log("registration err",error);
        })
        e.preventDefault();
        // dispatch(
        //     registration({
        //       data,
        //       registeredIn: true,
        //     })
        //   );
        //   setEmail("");
        //   setPassword("");
        //   setConfirmPassword(" ");
    };
    return (
     
        <div className="login">
          <form className="login_form" onSubmit={(e) => handleSubmit(e)} >
             <h1>Register Here</h1>
             <input type="name" placeholder="NAme" value={name} onChange={(e) => setName(e.target.value)} />
             <input type="userName" placeholder="Username" value={userName}  onChange={(e) => setUserName(e.target.value)} />
            
             <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
             <input type="password" placeholder="Password" value={password}  onChange={(e) => setPassword(e.target.value)} />
             <input type="password" placeholder="ConfirmPassword " value={confirmPassword}  onChange={(e) => setConfirmPassword(e.target.value)} />
            
             <button type="submit" className="submit_button">Submit </button>
         
          </form>

        </div>
      
    )
}

export default Registration
