import React, { Component } from 'react';
import './App.css';
import Projects from './Components/Projects'
import AddProject from './Components/AddProject'

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

handleAddProject(project){
  console.log('new project from add project in App.js : ',project)

  let projects=this.state.projects;
  projects.push(project);
  this.setState({projects:projects})
}


  render() {
    return (
      <div className="App">
        Hello from App.js
        <AddProject addProject={this.handleAddProject.bind(this)}/>
        <Projects projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;
