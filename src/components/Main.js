import React, { Component }  from 'react';
import { Link } from 'react-router-dom';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { }
  }
  render() {
    return (
      <div>
        <h1>
            <Link to='/'> ReduxStagram </Link>
        </h1>   
      </div>
    );
  } 
}
export default Main;