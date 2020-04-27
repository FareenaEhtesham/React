
//Components can build in 2 ways:

//by Function
//by Class
import React from 'react'
const practice = (props) =>{

    return(
        <div>
            <h2>Hello my name is:{props.name} and i am {props.age} years old</h2>
            <p>{props.children}</p>
        </div>
    )
};

export default practice