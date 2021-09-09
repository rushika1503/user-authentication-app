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
  debugger
  var registered = false;
  var loggedIn = false;
  
    if(user)
    {
      if(user.registeredIn==true && user.loggedIn==false)
      {
      registered = true;
      }
      else
      loggedIn = true;

    }
  
  return (<Router>
    <div >
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">

            {registered && (<>  <Link to="/login">
                Login
              </Link> </>)

            }
            {!registered && (<>  <Link to="/login">
                Login
              </Link>
              <li></li>
              { !loggedIn && ( <>
              <Link to='/sign-up'>
                SignUp
              </Link>  </> ) }
              </>)
            }
           

          </div>
        </div>
      </nav>

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route path="/home" component={Navbar} />
            {loggedIn ?  <Route path="/login" component={Logout} /> :<Route path="/login" component= {Login} /> }
            {registered? <Route path="/sign-up" component={RegisterSuccessfull} /> :   <Route path="/sign-up" component={Registration} /> }
            <Route path="/sign-up" component={Registration} />
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}


export default App;