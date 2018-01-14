import Action from '../action/action';
let defaultState = {
    decrement : 0
}

function decrementReducer(state = defaultState, action){
    console.log('decrement state: ', state);
    switch(action.type){
        case Action.DECREMENT:
        return Object.assign({}, state, {decrement : state.decrement - 1});
            break;
        default:
            return state;
    }
}

export default decrementReducer;