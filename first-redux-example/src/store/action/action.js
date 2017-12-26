import React, { Component } from 'react';


export class AppAction{
    static INCREMENT= 'INCREMENT';
    static DECREMENT = 'DECREMENT';
    static INCREMENT_BY_3 = 'INCREMENT_BY_3'; 
    static increment_by_3(value) {
        return { 
            type: AppAction.INCREMENT_BY_3 ,
            val: value 
        }
    }
    static decrement() {
        return { 
            type: AppAction.DECREMENT
        }
    }
    static increment() {
        return { 
            type: AppAction.INCREMENT
        }
    }
}


// export default AppAction;