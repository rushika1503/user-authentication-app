import React from 'react'
import "./Logout.css";
import { selectUser } from '../features/userSlice';
import { useSelector } from 'react-redux';

const RegisterSuccessfull = () => {
    const user = useSelector(selectUser);  
    debugger
    return (
        <form className="logout">
        <h1>
          Welcome! <span className="user__name">{user.data.name}.....</span>!
        </h1>
        <h2>
            You are successfully registered please go to login tab to Login to your page..
        </h2>
       
      </form>
    )
}

export default RegisterSuccessfull
