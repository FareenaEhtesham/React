 
//   CONVERTING CLASS BASED COMPONENT TO FUNCTIONAL BASED BY REACT HOOKS
  
  import React, { useState } from 'react';
 
  import Practice from "./practice"
  
  const UseState_practice =(props) =>{
  
    const [propertiesState ,propertiesFunction] = useState({
  //useState takes 1st element which is state
      properties: [
    
        {name :"Midhayy" ,age :20},
        {name :"Maryam" ,age:17},
        {name : "Wareesha"}
    
      ],
      Fruits:[
        {name : "Apple"},
        {name : "Orange"}
      ]
    });
  
  //useState takes 2nd element which is setState(Function) 
  const SwitchButtonHandler =() =>{
  
      propertiesFunction({
        properties: [
    
          {name :"Fareena",age :20},
          {name :"Maryam" ,age:21},
    
        ],
        Fruits: [
          {name : "Banana"},
          {name : "Strawberry"}
        ]
      })
    
    }


const [otherState ,OtherStateFunction] = useState("Call Multiple Times")  
  
    console.log(propertiesState)
    console.log(otherState)    



      return (
        <div className="App">
  
  <h2>WORK ON STATES:</h2>
  
         <button onClick={SwitchButtonHandler}>Switch Name And Fruits</button>
  
  
         <Practice name={propertiesState.properties[0].name}
          age={propertiesState.properties[0].age} fruitName ={propertiesState.Fruits[1].name} 
          click={SwitchButtonHandler}/>
  
  
         <Practice name={propertiesState.properties[1].name} 
          age={propertiesState.properties[1].age} fruitName ={propertiesState.Fruits[0].name} 
          click={SwitchButtonHandler}/>
        </div>
  
  
      );
    }
  
  export default UseState_practice;
   
  
  
  
  /* 
  in useState() we pass our initial state &very important useState return an array with exactly 2 element
  1 element is the current State
  2 element is the function that is used to update Array REMEMBER setState
  
  we can call useState as much as can
  but in Class based component state can be written once
  */  