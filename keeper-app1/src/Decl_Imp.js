import React from 'react'


const Program=() =>{

//IMperative Programming
// const Strike =() =>{

//     document.getElementById("root").style.textDecoration="line-through"
// } 

// const OnStrike =() =>{

//     document.getElementById("root").style.textDecoration="none"
// } 

//Declarative Programming
let strike = false;

const Strike =() =>{
         strike = true
} 

const OnStrike =() =>{

      strike=false
} 

    return(
        <div>

          <p style= {strike ? {textDecoration : "line-through"} : null}>Declarative & Imperative Programming</p>


            <button onClick={Strike}>Striking</button>
            <button onClick={OnStrike}>UN Striking</button>
            
        </div>
    )

}


export default Program