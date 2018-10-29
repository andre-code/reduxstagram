import { createStore, compse } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { createBrowserHistory } from 'history';

//import the root reducer
import rootReducer from './reducers/index';
import posts from './data/posts';
import comments from './data/comments';

//create an object for a default data 
const defaultState = {
  posts,
  comments
}

const store = createStore( rootReducer, defaultState );
export const history = syncHistoryWithStore(createBrowserHistory(), store);

export default store;