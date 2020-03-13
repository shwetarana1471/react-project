import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App appTitle=" Relevant Persons"/>, document.getElementById('root')); // App = root component throughout the project.
registerServiceWorker();