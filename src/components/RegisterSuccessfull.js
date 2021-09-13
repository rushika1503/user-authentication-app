import React from 'react'
import "./Logout.css";
import { selectUser } from '../features/userSlice';
import { useSelector } from 'react-redux';

const RegisterSuccessfull = () => {
    const user = useSelector(selectUser); 
   
    return (
         
        <form className="logout">
        <h1>
          <span className="user__name">{user.data.name}.....</span>!
          
          you are successfully registered.
          
        </h1>
       
       
      </form>
    )
}

export default RegisterSuccessfull
