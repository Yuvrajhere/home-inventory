import React from "react";
import {Link} from "react-router-dom";

const SignIn = () => {
  return (
    <div>
      <form>
        <h2>Sign In</h2>
        <label>
          Email : 
          <input 
            type="email" 
            name="email"/>
        </label><br />
        <label>
          Password :
          <input
            type="password"
            name="email"/>
        </label><br />
        <button>Sign In</button>
        <p>Dont have an account?, <Link to="/signup">Create a new account here</Link></p>
      </form>
    </div>
  );
};

export default SignIn;