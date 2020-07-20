import React, { Component } from "react";
import "./App.css";
import People from "./components/People/People";
import Gallery from "./components/Gallery/AllPictures";
import AddPhoto from './components/PhotoForm/PhotoForm';
import AddPerson from './components/PersonForm/PersonForm';
import AddRoll from './components/PersonForm/RollForm';
import AddPersonToRoll from './components/PersonForm/PersonToRollForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>NeoWithNic GRANDstack Starter</h1>
        
        <h2>Gallery Component</h2> 
        <Gallery /> <hr></hr> <br></br> <br></br>
        

        <h2>Add a Photo Component </h2> <br></br>
        <AddPhoto /><hr /><br></br> <br></br>
        
        <h2>People Component </h2> 
        <People /><hr></hr> <br></br> <br></br>
        
        <h2>Add a Person Component </h2> 
        <AddPerson /><hr></hr> <br></br> <br></br>

        <h2>Add a Roll Component </h2> 
        <AddRoll /><hr></hr> <br></br> <br></br>
        
        <h2>Add Person to Roll Component </h2> 
        <AddPersonToRoll /><hr></hr> <br></br>
        
      </div>
    );
  }
}

export default App;
