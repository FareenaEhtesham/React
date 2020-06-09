import React from 'react'
import Form from './component/form'
import Input from './component/input'
import Register from './component/register'

var userIsRegistered = true

// let islogin =true

// const Logged =() =>{
//     if(islogin === true)
//     {
//         return(
//             <h1>Hello</h1>
//         )
//     }

//     else{
//         return(
        
//         <div>
//                 {/* <Input type="text" pl="UserName"/>    
//                 <Input type="password" pl="Password"/>     */}
//                 <Form />
//         </div>

//         )
           
//     }
// }


const Login =() =>{

    return(
        <div className="container">
                
             {/* {islogin === true ? <Form/> : <h1>Hello</h1>}    */}

             <Register isRegistered={userIsRegistered} />

        </div>   
    )

}


export default Login