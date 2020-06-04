import React from 'react'

const Form =() =>{

    return(
        <div>
        <h1>Log In</h1>
        <form className="form">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
        </form>
        </div>
    )

}




export default Form