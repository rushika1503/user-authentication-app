import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Registration from "./components/Registration";
import {useSelector} from "react-redux";
import {selectUser} from "./features/userSlice";
import RegisterSuccessfull from './components/RegisterSuccessfull';
import Navbar from './components/Navbar';

function App() {
  const user = useSelector(selectUser);  
  var registered = false;
  
    if(user)
    {debugger
      if(user.registeredIn==true && user.loggedIn==false)
      {
      registered = true;
    
      }
    }
  
  return (<Router>
    <div >
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/home"}>Authentication.io</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/login"}>Login</Link>
              </li> 
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route path="/home" component={Navbar} />
            {user ?  <Route path="/login" component={Logout} /> :<Route path="/login" component= {Login} /> }
            {registered? <Route path="/sign-up" component={RegisterSuccessfull} /> :   <Route path="/sign-up" component={Registration} /> }
            <Route path="/sign-up" component={Registration} />
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}


export default App;