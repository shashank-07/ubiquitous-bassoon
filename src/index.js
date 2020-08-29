import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// 'bootstrap/dist/css/bootstrap.min.css';

import ready from 'domready';
import App from './scripts/App';
import Main from './Main'

ReactDOM.render(
  <React.StrictMode>
	<Main/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA


