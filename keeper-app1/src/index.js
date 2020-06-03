import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Emoji from './Practice_Emoji'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}

    <Emoji />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
