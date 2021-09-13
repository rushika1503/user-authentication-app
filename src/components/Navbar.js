import React from 'react'

const Navbar= () => {
    return (
      <form className="logout">
      <h1>
        Welcome! <span className="user__name">.....</span>
      </h1>
      <h2>
        This is a React-Reudx Application which is used for basic Authentication. Here I used Rails-JWT based API for backend.
      </h2>
    </form>
    );
  }
  
  export default Navbar;