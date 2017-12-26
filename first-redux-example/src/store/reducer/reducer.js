import {AppAction} from '../action/action';

function storeReducers(state = 0, action){
    switch(action.type){
        case AppAction.INCREMENT_BY_3:
        return state + action.val
        break;
        case AppAction.INCREMENT:
        return state + 1
        break;
        case AppAction.DECREMENT:
        return state - 1
        break;
        case 'add_desire_value':
        return state + action.val
        break;
        default:
        return state 
        
    }
}

export default storeReducers;