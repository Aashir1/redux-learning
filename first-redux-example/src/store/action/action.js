

class Action {
    static INCREMENT= 'INCREMENT';
    static DECREMENT = 'DECREMENT';
    static DESIRE_INCREMENT = 'DESIRE_INCREMENT';
    static ADDTODO = 'ADDTODO';
    static DELETETODO = 'DELETETODO';

    static increment(){
        return{
            type : Action.INCREMENT
        }
    }
    static decrement(){
        return{
            type: Action.DECREMENT
        }
    }
    static desireIncrement(value){
        return{
            type: Action.DESIRE_INCREMENT,
            value
        }
    }
    static addTodo(value){
        return{
            type: Action.ADDTODO,
            value
        }
    }
    static deleteTodo(indx){
        return{
            type: Action.DELETETODO,
            indx
        }
    }

}

export default Action;