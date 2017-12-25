import React from 'react';
import {createStore} from 'redux';
import storeReducer from './reducer/reducer';

let store = createStore(storeReducer);


export default store;