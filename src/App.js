import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Projects from './Components/Projects'

class App extends Component {
  render() {
    return (
      <div className="App">
        Hello CC...

        <Projects test='test value from App.js'/>
      </div>
    );
  }
}

export default App;
