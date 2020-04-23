import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Navbar, NavbarBrand} from 'reactstrap'
import Menu from './components/menu';

class App extends Component {

  render() {

const JSOBJ = {
  name:"maira",
  age: 18
}
    return (
      <div>

      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="#">React Website</NavbarBrand>
          
        </div>
          </Navbar>
          
      <Menu/> 
      </div>

      
    );
  }
}

export default App;
