import React , {Component} from 'react';
import './App.css';
import Practice from './components/practice'


class Condition extends Component {

    state={
  
      properties: [
  
        {name :"Midhayy" ,age :20},
        {name :"Maryam" ,age:17},
        {name : "Wareesha" ,age: 21}
  
      ],
      // assign boolean 
      show_Person : false

    }
  
    TogglePersonHandler =() =>{

      const showing= this.state.show_Person;
      this.setState ({ show_Person : !showing})

    }
  
  
  
    render() {
      console.log(this.state)

      let persons;

      if(this.state.show_Person === true){

        persons = (
        <div>  
        <Practice name={this.state.properties[0].name}
          age={this.state.properties[0].age} />
  
  
        <Practice name={this.state.properties[1].name} 
          age={this.state.properties[1].age} />


    </div>)

      }
      else{
        persons = (
        <div>
          <p>Thats work!!!</p>
        </div>
        )
      }

//Inline css for styling of Button
const ButtonStyle={
//styling properties is in CamelCase b/c this is in JS file
    height :"8vh",
    backgroundColor: "green",
    fontSize: '20px',
    color : 'white',
    cursor:'pointer',
  
}


      return (
        <div className="App">
  
  <br/>
  <h2>WORK ON STATES:</h2>

         <button style={ButtonStyle} onClick={this.TogglePersonHandler}>Toggle Persons</button>
         {persons}

{/* use of if else in JSX     */}

{/* {

this.state.show_Person === true ?

    <div>  
        <Practice name={this.state.properties[0].name}
          age={this.state.properties[0].age} />
  
  
        <Practice name={this.state.properties[1].name} 
          age={this.state.properties[1].age} />


    </div>:null

}     */}

</div>       
  
  );
  }
  }

export default Condition;