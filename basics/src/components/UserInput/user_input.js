import React from 'react'

const User_Input =(props) =>{

    const InputStyle = {

        border: "2px solid green"
    }

    const textArea = {
        width : "30%",
        height : "20vh",
    }
    return(
        <div>

            <h3>Change User Name:</h3>
            <input style={InputStyle} type="text" onChange={props.changingName} value={props.userName} />

            <h3>Change Designation:</h3>
            <textarea style={textArea}  onChange={props.changingText}>Not sure about Mahrukh's 
            Designation so you can change</textarea>    
        
 </div>
    )


}

export default User_Input