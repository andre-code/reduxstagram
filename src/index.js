import React from 'react';
import ReactDOM from 'react-dom';
//styles
import './styles/index.css';

//components\
import PhotoGrid from './components/PhotoGrid';
import Single from './components/Single';

import {  BrowserRouter, Route, Link } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'; 
import store, { history } from './store';

const router = (
  <Provider store={store} >
    <BrowserRouter history={history}>  
      <div>
          <h1>
              <Link to='/'> InstaQuotes </Link>
          </h1>
        <Route exact path='/' component={PhotoGrid} />
        <Route path='/view/:postId' component={Single} />
      </div>
    </BrowserRouter>
  </Provider>
) 

ReactDOM.render(router, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
