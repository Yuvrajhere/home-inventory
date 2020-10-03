import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Inventory from "./components/Inventory";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

const App = () => {

  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  const handleNavBtnClick = e => {
    e.preventDefault();
    setIsNavbarVisible(!isNavbarVisible);
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
            <li>
              <Link to="/signin">Sign In</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </nav>
          <button 
            className="menu"
            onClick={handleNavBtnClick}>☰</button>
        </div>

        <Switch>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/inventory">
            <Inventory />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
