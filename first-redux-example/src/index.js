import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CounterApp from './Container/App';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
    <div>         
        <CounterApp/>
        <br/>
              
    </div>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();