import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  var person1 = {
    name: "Dr. Mahfuz",
    job: "Singer"
    }

    var person2 = {
      name: "Eva",
      job: "Stupid"
      }

      var style={
        color: 'yellow',
        backgroundColor: 'red'
      }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit Done  <code>src/App.js</code> and save to reload.
        </p>
        <p className="style">Getting Started wth REACT</p>
        <Person name="Munna" job="footballer"></Person>
      </header>
    </div>
  );
}

function Person(Props){
  return (
    <div style={{border: '2px solid yellow'}}>
      <h3>My Name is {Props.name}}</h3>
  <p>My Profession: {Props.job}</p>
    </div>
  )
  
}

export default App;
