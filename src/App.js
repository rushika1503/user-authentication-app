
import Login from "./components/Login";
import Logout from "./components/Logout";
import Registration from "./components/Registration";
import {useSelector} from "react-redux";
import {selectUser} from "./features/userSlice";
import React from 'react';
import Navbar from "./components/Navbar";


const App= () => {
  const user = useSelector(selectUser);
  debugger
  return (
    <div>
      {/* <Navbar/> */} 
      {user ? <Logout/> : <Login/>}
      {/* <Registration/> */}
      {/* <Login/> */}
    </div>
  );
}

export default App;
