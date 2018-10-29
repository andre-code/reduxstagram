import React, { Component } from 'react';
import { Link, BrowserRouter } from 'react-router-dom'; 

import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>
            <Link to='/'> InstaQuotes </Link>
        </h1>      
      </div>
    );
  }
}


export default App;
