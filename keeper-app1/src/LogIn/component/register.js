import React, { useState } from "react";


 const Register=(props) =>{

    

    const [mouseOver , setmouseOver]=useState(false)

    const hovering =() =>{

    setmouseOver(true)

    }
    const hoveringOut =() =>{
      setmouseOver(false)
    }

    // var styling ={
    //   backgroundColor : "green"
    // }
    // const hoveringOut =() =>{
    //   styling.backgroundColor = "green"
    // }

    // const hovering =() =>{
    //   styling.backgroundColor = "black"
    // }

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
      

          <button onMouseOver={hovering} onMouseOut={hoveringOut} 
          
          style={mouseOver ? {backgroundColor : "black"} : {backgroundColor : "green"}}
          type="submit">
         
            {props.isRegistered ? "Login" : "Register"}
            </button>
        </form>
    </div>
  );
}

export default Register;
