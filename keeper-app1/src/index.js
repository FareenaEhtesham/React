import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Emoji from './Practice_Emoji'
import Login from './LogIn/login'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}

    {/* <Emoji /> */}
    <Login />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
