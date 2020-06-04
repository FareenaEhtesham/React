import React from "react";

function Register(props) {
  return (
    <div>
        <h1>
          {props.isRegistered ? "LOGIN" : "REGISTER" }
          
        </h1>
        <form className="form">
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
        
        {props.isRegistered ? null : 
        <input type="password" placeholder="Confirm Password" />
        }
      

          <button type="submit">{props.isRegistered ? "Login" : "Register"}</button>
        </form>
    </div>
  );
}

export default Register;
