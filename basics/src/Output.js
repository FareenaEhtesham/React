
import React , {Component} from 'react';
import './App.css';
import User_Input from './components/UserInput/user_input'
import User_Output from './components/UserOutput/user_output'

class Output extends Component{

    state={

        NamesOfPerson: [
           { userName : "Fareena"} ,
            {userName : "Mahrukh"} ,
            {userName : "Maira"}
        ],

        Paragraph :[
            {status  : "Software Engineer"},
            {status : "Doctor"},
            {status : "Intermediate"}
        ]
    }

    NameChangerHandler = (event) =>{
        this.setState({

            NamesOfPerson: [
                { userName : "Fareena"} ,
                { userName : event.target.value} ,
                {userName : "Maira"}
             ]

        })
    }

    TextChangerHandler = (event) =>{

        this.setState({
            Paragraph :[
                {status  : "Software Engineer"},
                {status : event.target.value},
                {status : "Intermediate"}
            ]
        })
    }

    render() {
   
  
        return (
         
          <div className = "App">
    <br/>
  
        <User_Input changingName={this.NameChangerHandler}
        changingText = {this.TextChangerHandler}
        userName = {this.state.NamesOfPerson[1].userName}/>

        <User_Output userName = {this.state.NamesOfPerson[0].userName}
        status = {this.state.Paragraph[0].status}/>

        <User_Output userName = {this.state.NamesOfPerson[1].userName}
        status = {this.state.Paragraph[1].status}/>

        <User_Output userName = {this.state.NamesOfPerson[2].userName}
        status = {this.state.Paragraph[2].status}/>

          </div>       
    
        );
      }
    }
    


export default Output;