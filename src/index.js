// jshint esversion: 9
import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { combineReducers, createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import configureStore from './hooks-store/products-store';
// import productReducer from './store/reducers/products';
// import ProductsProvider from './context/products-context';

// const rootReducer = combineReducers({
//   shop: productReducer
// });

// const store = createStore(rootReducer);

configureStore();

ReactDOM.render(
  // So now I'm providing my context here and anywhere in this component tree so in any child component here or in a child component of that component I can kind of listen to that context.
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  document.getElementById('root')
);
