import React from "react";
import {Link} from "react-router-dom";

const SignUp = () => {
  return (
    <div>
      <form>
        <h2>Sign Up</h2>
        <label>
          Name : 
          <input 
            type="text" 
            name="name"/>
        </label><br />
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
        <button>Sign Up</button>
        <p>Already have an account?, <Link to="/signin">Sign In here</Link></p>
      </form>
    </div>
  );
};

export default SignUp;