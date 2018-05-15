import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import configureStore from './store';

import './index.css';
import App from './components/App.jsx';

//let store = createStore(appReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// let store = createStore(appReducer)
// let store = createStore(appReducer, {}, DevTools.instrument())

ReactDOM.render(<App store={configureStore()}/>, document.getElementById('root'));
