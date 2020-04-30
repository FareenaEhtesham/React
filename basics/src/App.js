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

{/* we can also pass function as a property in component   */}

       <Practice name={this.state.properties[0].name}
        age={this.state.properties[0].age}
        click={() => this.SwitchButtonHandler("Fareena Ehtesham")}/>


       <Practice name={this.state.properties[1].name} 
        age={this.state.properties[1].age}
        click={this.SwitchButtonHandler.bind(this,"wareesha")}/>
      </div>


    );
  }
}

export default App;

/*the code inside in return (which is JSX) the html code is not actually HTML it is JavaScript
b/c the code behind react.CreateElement( you can pass several arguments of html here) which is 
ofcourse not a good choice so thatswhy we use html syntax code inside return*/


/* 

Another noticeable thing is that all the code written under return statement can be wrapped by 
single root div like:

return(
  <div>
  <h1>Hello WOrld</h1>
  </div>

)

the code will not be run just like that:

return(

  <div>
  <h1>Hello WOrld</h1>
  </div>

  <h1>Dont WOrk OUT OF DIV </h1>
)

*/


/*
Component make the code more reusable b/c if you want to call code multiple times in different
pages you just call the self closing tag not write code again anad again

</Menu>
</Menu>
 
*/