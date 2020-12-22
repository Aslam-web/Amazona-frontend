import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import store from './store/store';

ReactDOM.render(
  <React.StrictMode store = { store }>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

