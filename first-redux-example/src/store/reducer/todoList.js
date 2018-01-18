import Action from '../action/action';
import index from '../index';
let defaultState = {
    todo: []
}
let i = 0;
function addTodo(state = defaultState, action) {
    switch (action.type) {
        case Action.ADDTODO:
            return Object.assign({}, state, { todo: [...state.todo, { value: action.value.values, key: action.key }] })
            break;
        case Action.CLEARTODO:
            return Object.assign({}, state, { todo: [] });
            break;
        case Action.DELETETODO:
            console.log('yes its run');
            return Object.assign({},
                state,
                {
                    todo:
                        state.todo.filter(data => {
                            return data.key !== action.indx
                        })
                    // function(){
                    //     console.log(action.indx);
                    //     state.todo.splice(action.indx,1)
                    //     return state.todo;
                    //     }()
                }
            )
        case Action.UPDATETODO:
            console.log('update action is dispatch');
            return Object.assign({}, state, {
                todo: state.todo.map((data, index) => {                    
                    if (data.key === action.indx) {
                        return {
                            updated:'updated',
                            value: action.data.values,
                            key: data.key
                        }
                    }
                    return {
                        value: data.value,
                        key: data.key
                    };
                })
            })
            break;
        default:
            return state;
    }
}
export default addTodo;