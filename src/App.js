import React, { Component } from 'react';
import './App.css';
import Projects from './Components/Projects'
import AddProject from './Components/AddProject'
import uuid from 'uuid'

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
    id: uuid.v4(),
    title:'Buisness Website',
    category:'Web Design'
  },
  {
    id: uuid.v4(),
    title:'Social App',
    category:'Mobile Development'
  },
  {
    id: uuid.v4(),
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

hadleDeleteProject(id){
  let projects=this.state.projects;
  let index=projects.findIndex(x=>x.id===id)
    projects.splice(index,1);
    this.setState({projects:projects});
}


  render() {
    return (
      <div className="App">
        Hello from App.js
        <AddProject addProject={this.handleAddProject.bind(this)}/>
        <Projects onDelete={this.hadleDeleteProject.bind(this)} projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;
