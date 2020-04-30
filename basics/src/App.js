import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//component name must start with capital letter
import Practice from "./components/practice"

class App extends Component {

//state is only called in class  
  state={

    properties: [

      {name :"Midhayy" ,age :20},
      {name :"Maryam" ,age:17},
      {name : "Wareesha"}

    ]
  }


//Event Listener for button 
//SwitchButton is a function
SwitchButtonHandler =(takeName) =>{

    //console.log("Yeah it worked")
    //NOT WORK    this.state.properties[0].name = "Midha Tahir";

//set state method is used to update state    
    this.setState({
      properties: [

        {name :takeName,age :20},
        {name :"Maryam" ,age:21},
  
      ]
    })

}



  render() {
    return (
      <div className="App">


 {/* name and age are attributes which is called in practice.js
       file as props */}        
       
      <Practice name="Fareena" age="19"/>

{/* we can also call the components as opening and closing tags */}       

      <Practice name="Mahrukh" age="20">Pratice Children props</Practice>

      <Practice name="Maira" age="16"/>

<br/>
<h2>WORK ON STATES:</h2>
       <button onClick={this.SwitchButtonHandler.bind(this , "Fareena")}>Switch Name</button>

{/* pass function as a property in component so (practice.js) access by using props */}

       <Practice name={this.state.properties[0].name}
        age={this.state.properties[0].age}
{/* Another Approach to handle argument in function */}
        click={() => this.SwitchButtonHandler("Fareena Ehtesham")}/>


       <Practice name={this.state.properties[1].name} 
        age={this.state.properties[1].age}
{/* Use bind because our function take argument */}
        click={this.SwitchButtonHandler.bind(this,"wareesha")}/>
      </div>


    );
  }
}

export default App;

