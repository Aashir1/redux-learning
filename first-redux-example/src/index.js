import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
    <div>         
        <App/>
        From index.js
        <br/>
              
    </div>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
