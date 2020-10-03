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
        <p>Feeling Excited</p>
        <h1 style={{color: 'yellow',
        backgroundColor: 'hotpink'}}>Intisar Mahee</h1>
        <h2>My Birth Year {1900+95}</h2>
  <h1>my heading: {person1.name + " " + person2.job}</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
