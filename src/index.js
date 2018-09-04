import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './Component/Assignment-1';
import DefaultBulb from "./Bulbs/DefaultBulb"
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<DefaultBulb />, document.getElementById('root'));
registerServiceWorker();
