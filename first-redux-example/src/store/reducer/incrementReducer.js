import Action from '../action/action';

let defaultState = {
    increment: 0
}

function incrementReducer(state = defaultState, action){
    // console.log('increment state: ', state);
    switch(action.type){
        case Action.INCREMENT_BY_3:
        return Object.assign({}, state,{increment: state.increment + 3});
        break;
        case Action.INCREMENT:
        return Object.assign({}, state, {increment: state.increment + 1});
        break;
        case Action.DESIRE_INCREMENT:
        return Object.assign({}, state,{increment: state.increment + action.value});
        break;
        default:
        return state 
        
    }
}

export default incrementReducer;