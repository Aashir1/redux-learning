import database from './firebase';
const post = database.database().ref('/redux-todo/');
// function load(){
//     post.on('child_added',snapshot=>{
//         console.log(snapshot.val());
//         console.log(snapshot.key);        
//     })
// };
// load();
let tempr = 0;
class Action {
    conos
    static INCREMENT = 'INCREMENT';
    static DECREMENT = 'DECREMENT';
    static DESIRE_INCREMENT = 'DESIRE_INCREMENT';
    static ADDTODO = 'ADDTODO';
    static DELETETODO = 'DELETETODO';
    static UPDATETODO = 'UPDATETODO';
    static CLEARTODO = 'CLEARTODO';

    static increment() {
        return {
            type: Action.INCREMENT
        }
    }
    static decrement() {
        return {
            type: Action.DECREMENT
        }
    }
    static desireIncrement(value) {
        return {
            type: Action.DESIRE_INCREMENT,
            value
        }
    }
    static clearTodo() {
        return {
            type: Action.CLEARTODO
        }
    }

    static addTodo(values) {
        // let obj={
        //     value
        // }
        // post.push(obj)
        // .then(user=>{
        //     console.log(user.key);
        // })
        // .catch(error=>{alert(error.message)});        
        let obj = {
            values
        }
        post.push(obj);
        let fetchedData = {};
        return (dispatch) => {
            database.database().ref('/redux-todo/').once('value', (snapshot) => {
                dispatch(Action.clearTodo())
                fetchedData = snapshot.val();
                let keys = Object.keys(fetchedData);
                keys.map(eachKey => {
                    dispatch({
                        type: Action.ADDTODO,
                        value: fetchedData[eachKey],
                        key: eachKey
                    })
                })

            })


            // .then(snapshot=>{
            //     console.log('me push k then sy chal rha hn',snapshot.key)
            //     })
            //     .catch(error=>alert(error.message));
            // }

            // return (dispatch) =>{
            //     post.on('child_added',snapshot=>{
            //         // console.log(snapshot.val());
            //         // console.log(snapshot.key);        
            //         dispatch({
            //             type: Action.ADDTODO,
            //             value: snapshot.val(),
            //             key: snapshot.key
            //         })

            // })
            // }
        }
    }
    static deleteTodo(indx) {
        console.log(indx);
        return (dispatch) => {
            post.child(indx).remove();
            post.on('child_removed', snapshot => {
                console.log(snapshot.val());
                console.log(snapshot.key);
                dispatch({
                    type: Action.DELETETODO,
                    indx: snapshot.key
                })
            })
        }
    }
    static updateTodo(data, indx) {
        database.database().ref('/redux-todo/' + indx).update({values: data})
        return (dispatch)=>{
            post.on('child_changed', snapshot=>{
                console.log(snapshot.val());
                console.log(snapshot.key);
                dispatch({
                    type: Action.UPDATETODO,
                    indx: snapshot.key,
                    data: snapshot.val()
                })
                
            })
        }
        
    }

}

export default Action;