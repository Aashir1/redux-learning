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
            <button onClick={()=>{store.dispatch({type:'aashir'})}}>Aashir Data</button>
            <button onClick={()=>{store.dispatch({type:'zuhaib'})}}>zuhaib Data</button>
            <button onClick={()=>{store.dispatch({type:'faiz'})}}>faiz Data</button>
            <button onClick={()=>{store.dispatch({type:'shoaib'})}}>shoaib Data</button>   
    </div>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
