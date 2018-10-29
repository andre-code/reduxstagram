import React, { Component } from 'react';

import '../styles/PhotoGrid.css';

class PhotoGrid extends Component {
  constructor(props) {
    super(props);
    this.state = { }
    console.log(this.props);
  }
  
  render() {
    return (
      <div className="PhotogridBox">
       I am in photo grid
       <pre>
         Printing
         {JSON.stringify(this.props.posts, null, ' ')}
       </pre>
      </div>
    );
  }
}


export default PhotoGrid;
