import React, { Component } from 'react';
import uuid from 'uuid'

class AddProject extends Component {

    constructor(){
        super();
        this.state={
            newProject:{}
        }
    }


    static defaultProps={
        categories:['Web Design','Web Development','Mobile Development']
    }

    handleSubmit(e){
        console.log('Submitted',this.refs.title.value)
        if(this.refs.title.value ===''){
            alert('Title is required.')
        }else{
            this.setState({newProject:{
                id: uuid.v4(),
                title:this.refs.title.value,
                category: this.refs.category.value
            }},function(){
                console.log(this.state)
                //set value to the sate of App.js
                this.props.addProject(this.state.newProject)
            })
        }
        e.preventDefault();
    }

  render() {
      let categoryOption=this.props.categories.map(category=>{
          return <option key={category} value={category}>{category}</option>
      })
    return (
      <div>
        Hello CC from Add Project...<br/ >
        <form onSubmit={this.handleSubmit.bind(this)}>
            <div>
                <label>Title</label><br/>
                <input type='text' ref='title' />
            </div>
            <div>
                <label>Category</label><br/>
                <select ref='category' >
                    {categoryOption}
                </select>
            </div>
            <input type='submit' value='Submit' />
            </form>
      </div>
    );
  }
}

export default AddProject;
