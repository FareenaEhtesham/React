import React , {Component} from 'react';
import './App.css';
import Practice from './components/practice'


class Condition extends Component {

    state={
  
      properties: [
  
        {id:'dsf' ,name :"Midhayy" ,age :20},
        {id:'gnj' ,name :"Maryam" ,age:17},
        {id:'uity' ,name : "Wareesha" ,age: 21}
  
      ],
      // assign boolean 
      show_Person : false

    }

    TogglePersonHandler =() =>{

      const showing= this.state.show_Person;
      this.setState ({ show_Person : !showing})

    }
     DeletePerson =(index1) =>{

/*
arrays and objects are reference type
so
if we dont use spread operator OR slice we make changes in original array of 'properties'   
which is not good 

by using this we make copy of 'properties'

*/

          // const properties =this.state.properties.slice();

          const properties =[ ...this.state.properties];
          properties.splice(index1 ,1)
          this.setState({properties :properties})

    }  
  
    render() {
      console.log(this.state)

      let persons;

      if(this.state.show_Person === true){

        persons = (
        <div>  

          {this.state.properties.map((a ,index) =>{

            return(
              <Practice name={a.name} age = {a.age} key = {a.id} 
            
              click={() =>{this.DeletePerson(index)}}/>

                  )   
        
          })}

       


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


{/* 
{this.state.show_Person === true ?

     <div> 

       {this.state.properties.map((a) => {

            return(
            <Practice name={this.state.properties[0].name}/>

              )       


       })}
       
 


    </div>:null

}     


 */}

</div>       
  
  );
  }
  }

export default Condition;