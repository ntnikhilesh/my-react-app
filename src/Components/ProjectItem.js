import React, { Component } from 'react';

class ProjectItem extends Component {
  render() {
      console.log(this.props.projects)
    return (
      <li className="Project">
        Hello CC from project item...
        <strong>{this.props.project.title} : </strong>
        {this.props.project.category}

      </li>
    );
  }
}

export default ProjectItem;
