import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Inventory from "./components/Inventory";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import PrivateRoute, {isLogin, logOut} from "./components/PrivateRoute";

const App = () => {

  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(isLogin());

  const handleNavBtnClick = e => {
    e.preventDefault();
    setIsNavbarVisible(!isNavbarVisible);
    hideNavbarAfterDelay();
  }

  const hideNavbarAfterDelay = () => {
    setTimeout(function() {
      setIsNavbarVisible(false);
    }, 2000)
  }

  return (
    <Router>
      <div>
        <div className="container">
          <nav className={isNavbarVisible ? "nav show-nav" : "nav"}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/inventory">Inventory</Link>
            </li>
            {isLoggedIn ? (
              <li onClick={logOut}><a>Log Out</a></li>
            ) : (
              <>
                <li>
                <Link to="/signin">Sign In</Link>
                  </li>
                <li>
                  <Link to="/signup">Sign Up</Link>
                </li>
              </>
            )}
            
          </nav>
          <button 
            className="menu"
            onClick={handleNavBtnClick}>
              {isNavbarVisible ? "X" : "☰"}
          </button>
        </div>

        <Switch>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <PrivateRoute component={Inventory} path="/inventory"/>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
