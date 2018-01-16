import React, { Component } from 'react';

class AddProject extends Component {
    static defaultProps={
        categories:['Web Design','Web Development','Mobile Development']
    }

  render() {
      let categoryOption=this.props.categories.map(category=>{
          return <option key={category} value='category'>{category}</option>
      })
    return (
      <div>
        Hello CC from Add Project...<br/ >
        <form>
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
            </form>
      </div>
    );
  }
}

export default AddProject;
