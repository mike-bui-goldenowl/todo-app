import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';

require('react-web-vector-icons/fonts');


ReactDOM.render(
  <Router basename="/">
    <App />
  </Router>,
  document.getElementById('root'),
);
