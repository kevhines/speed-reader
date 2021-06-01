import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {createStore, compose, applyMiddleware} from 'redux'
import manageSentences from './reducers/manageSentences'
import {composeWithDevTools} from 'redux-devtools-extension'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'


const store = createStore(manageSentences, compose(applyMiddleware(thunk), composeWithDevTools()))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

