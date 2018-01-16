import React, { Component } from 'react';

class Projects extends Component {
  render() {
    return (
      <div className="Projects">
        Hello CC Projects...
        {this.props.test}
      </div>
    );
  }
}

export default Projects;
