import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import "./Login.css"
import { login } from '../features/userSlice';
import { Redirect } from 'react-router-dom';
import { Link,Switch,Route , BrowserRouter} from 'react-router-dom';
import {withRouter} from 'react-router';
import axios from 'axios';


const Login = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        var data = {email:email,password:password}
        axios
        .post(
          "http://localhost:4000/sessions",
          {
            user_detail: {
              email: email,
              password: password
              
            }
            
          },
          { withCredentials: true }
        )
        .then(response => {
          if (response.data.logged_in) {
            debugger
            console.log(response.data.logged_in);
             dispatch(
            login({
              data,
              loggedIn: true,
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
          {/* <BrowserRouter><Route exact path="/" component={withRouter(Registration)} />
   
    </BrowserRouter> */}
  
        
         
        </div>
    )
}

export default Login
