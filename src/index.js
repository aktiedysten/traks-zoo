import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { TraksProvider } from './traks';
import App from './App';
ReactDOM.render(<TraksProvider><App /></TraksProvider>, document.getElementById('root'));
