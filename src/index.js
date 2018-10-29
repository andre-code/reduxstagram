import React from 'react';
import ReactDOM from 'react-dom';
//styles
import './styles/index.css';

//components
import App from './components/App';
import PhotoGrid from './components/PhotoGrid';
import Single from './components/Single';

import {  BrowserRouter, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'; 
import store, { history } from './store';

const router = (
  <Provider store={store} >
    <BrowserRouter history={history}>  
      <div>
        <App/> 
        <Route exact path='/' component={PhotoGrid} posts={store} />
        <Route path='/view/:postId' component={Single} />
      </div>
    </BrowserRouter>
  </Provider>
) 

ReactDOM.render(router, document.getElementById('root'));

serviceWorker.unregister();
