import React, { Component } from 'react';
import './App.css';
import Projects from './Components/Projects'

class App extends Component {
// set states

constructor(){
  super(); 
  this.state={
    projects:[]
  }
}

//life cycle method
componentWillMount(){
  this.setState({projects:[{
    title:'Buisness Website',
    category:'Web Design'
  },
  {
    title:'Social App',
    category:'Mobile Development'
  },
  {
    title:'Ecommerce Shopping Cart',
    category:'Web Development'
  }]})
}

  render() {
    return (
      <div className="App">
        Hello from App.js

        <Projects projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;
