import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import "./Login.css"
import { registration } from '../features/userSlice';
import { Route } from 'react-router-dom';
import axios from 'axios';

const Registration = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        // const {
        //   email,
        //   password,
        //   confirmPassword
        // } = this.state; 
        // debugger
       
        axios.post("http://localhost:4000/registrations",{
          user_detail: {
            email :email, 
            password :password,
            password_confirmation: confirmPassword
          }
          
        },
        {withCredentials: true }
        ).then(response => {
          debugger
          console.log("registration res", response);
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
             <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
             <input type="password" placeholder="Password" value={password}  onChange={(e) => setPassword(e.target.value)} />
             <input type="password" placeholder="ConfirmPassword " value={confirmPassword}  onChange={(e) => setConfirmPassword(e.target.value)} />
            
             <button type="submit" className="submit_button">Submit </button>
         
          </form>

        </div>
      
    )
}

export default Registration
