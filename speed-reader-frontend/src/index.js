import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {createStore, compose, applyMiddleware, combineReducers} from 'redux'
import manageSentences from './reducers/manageSentences'
import manageUser from './reducers/manageUser'
import manageErrors from './reducers/manageErrors'
import {composeWithDevTools} from 'redux-devtools-extension'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  sentences: manageSentences,
  user: manageUser,
  error: manageErrors
});

const store = createStore(rootReducer, compose(applyMiddleware(thunk), composeWithDevTools()))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

