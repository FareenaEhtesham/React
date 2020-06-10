import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Emoji from './Practice_Emoji'
import Login from './LogIn/login'
import Decl_Imp from './Decl_Imp'
import Time from './Time'
import Main from './Hooks/main'
import React_Form from './Form_Component/React_Form'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}

    {/* <Emoji /> */}
    {/* <Login /> */}
	<React_Form />
    {/* <Decl_Imp /> */}
    {/* <Main/> */}
	{/* <Time /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
