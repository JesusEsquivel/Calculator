import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Frame from './components/frame';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Frame />, document.getElementById('root'));
registerServiceWorker();
