import React from 'react'

const User_Output =(props) =>{

    const Styling = {
        width : "40%",
        border : "1px solid black",
        padding : "16px",
        margin : "25px",
        position : "relative",
        left :"26.5%",
        textAlign : "center",
        backgroundColor : "#ccc"
    }
    return(

    <div style = {Styling}>
        <p><b>Name:</b> {props.userName} </p>
        <p><b>Designation:</b>{props.status}</p>

    </div>

    )


}

export default User_Output