import React, { Component } from 'react';

import Practice from "./practice"

class App1 extends Component {

//state is only called in class  
  state={

    properties: [

      {name :"Midhayy" ,age :20},
      {name :"Maryam" ,age:17},
      {name : "Wareesha"}

    ],
    Fruits:[
      {name : "Apple"},
      {name : "Orange"}
   ]
  }


//Event Listener for button 

SwitchButtonHandler =(takeName) =>{

//set state method is used to update state    
    this.setState({
      properties: [

        {name :takeName,age :20},
        {name :"Maryam" ,age:21},
  
      ]
    
    })

}

// No need to create Fruit Changer the code under it can also be called on SwitchButtonHandler

FruitChanger = () =>{

 this.setState(
   {

    Fruits: [
      {name : "Banana"},
      {name : "Strawberry"}
    ]
  }
  )
} 



  render() {
    console.log(this.state)
    return (
      <div className="App">

<h2>WORK ON STATES:</h2>
       <button onClick={this.SwitchButtonHandler.bind(this , "Fareena")}>Switch Name</button>
       <button onClick={this.FruitChanger}>Switch Fruits</button>

{/* we can also pass function as a property in component   */}

       <Practice name={this.state.properties[0].name}
        age={this.state.properties[0].age} fruitName ={this.state.Fruits[1].name}
        click={() => this.SwitchButtonHandler("Fareena Ehtesham")}/>


       <Practice name={this.state.properties[1].name} 
        age={this.state.properties[1].age} fruitName ={this.state.Fruits[0].name}
        click={this.SwitchButtonHandler.bind(this,"wareesha")}/>
      </div>


    );
  }
}

export default App1;