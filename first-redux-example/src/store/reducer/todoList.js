import Action from '../action/action';
import index from '../index';
let defaultState ={
    todo: []
}
function addTodo(state = defaultState, action){
    console.log('yes i am called');
    switch(action.type){
        case Action.ADDTODO:
        return Object.assign({}, state, {todo: [...state.todo, action.value]})
        break;
        case Action.DELETETODO:
        console.log('yes its run');
        return Object.assign({},
                state,
                {todo: 
                    state.todo.filter(data=>{console.log(action);return data !== state.todo[action.indx]})
                    // function(){
                    //     console.log(action.indx);
                    //     state.todo.splice(action.indx,1)
                    //     return state.todo;
                    //     }()
                    }
                )
        default:
        return state;
    }
}
export default addTodo;