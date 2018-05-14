import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'

import appReducer from './reducers'
import { createUser, createPost } from './actions'
import './index.css';
import App from './components/App.jsx';

let store = createStore(appReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

// create users
store.dispatch(createUser('dan', 'Daniel Bugl'))
store.dispatch(createUser('des', 'Destiny'))

// create posts
store.dispatch(createPost('dan', {
  title: 'First post',
  text: 'Hello world! This is the first blog post.',
  category: 'welcome',
}))
store.dispatch(createPost('des', {
  title: 'Another test',
  text: 'This is another test blog post.',
  category: 'test',
}))
store.dispatch(createPost('des', {
  title: 'Another what',
  text: 'This is joes blog.',
  category: 'test',
}))
console.log('initial state:', store.getState())


ReactDOM.render(<App store={store}/>, document.getElementById('root'));
