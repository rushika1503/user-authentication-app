import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import "./Login.css"
import { registration } from '../features/userSlice';
import axios from 'axios';


const Registration = () => {
    const [email,setEmail] = useState("");
    const [name,setName] = useState("");
    const [userName,setUserName] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    let errorsObj = {email: '', password:'',name:'',userName:'',confirmPassword:''}
    const[errors,setErrors] = useState(errorsObj);
    const[regStatus, setRegStatus] = useState("");
 
    const dispatch = useDispatch();
    
    const handleSubmit = (e) => {
      handleValidation();
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
          localStorage.setItem('User',JSON.stringify(response.data))
          debugger
          setRegStatus('');
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
         setRegStatus(error.response.data.error);
        })
        e.preventDefault();
    };

   const handleValidation =(e) => {
     debugger
     let error = false;
     const errorObj = {...errorsObj};
     if(name===''){
       errorObj.name = 'Name is required';
       error = true;
     }
     if(userName===''){
      errorObj.userName = 'UserName is required';
      error = true;
     }
     if(email===''){
      errorObj.email = 'Email is required';
      error = true;
     }
     if(password===''){
      errorObj.password = 'Password is required';
      error = true;
     }
     else if(password != '' && password.length < 6)
     {
      errorObj.password = 'Password length should be minimum 6';
      error = true;
     }
     
     if(confirmPassword===''){
      errorObj.confirmPassword = 'Confirm Password is required';
      error = true;
     }
     else if(confirmPassword != '' && confirmPassword.length < 6)
     {
      errorObj.confirmPassword = 'confirm password length should be minimum 6';
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
             <h1>Register Here</h1>
           
             <input 
                type="name" 
                placeholder="Name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
             />
             {errors.name && <div id="error-msg">{errors.name}</div>}
             
             <input 
                type="userName" 
                placeholder="Username" 
                value={userName}  
                onChange={(e) => setUserName(e.target.value)} 
             />
              {errors.userName && <div id="error-msg">{errors.userName}</div>}
             
             <input 
                type="email" 
                placeholder="Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
             />
              {errors.email && <div id="error-msg">{errors.email}</div>}
             
             <input 
                type="password" 
                placeholder="Password" 
                value={password}  
                onChange={(e) => setPassword(e.target.value)} 
             />
              {errors.password && <div id="error-msg">{errors.password}</div>}
             
             <input 
                type="password" 
                placeholder="ConfirmPassword " 
                value={confirmPassword}  
                onChange={(e) => setConfirmPassword(e.target.value)} 
             />
              {errors.confirmPassword && <div id="error-msg">{errors.confirmPassword}</div>}
             
             <button type="submit" className="submit_button">Submit </button>
         
          </form>
          <h4 id="error-msg">{regStatus}</h4>
        </div>
      
    )
}

export default Registration
