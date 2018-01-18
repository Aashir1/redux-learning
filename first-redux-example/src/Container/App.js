import React from 'react';
import {connect} from 'react-redux';
import Action from '../store/action/action';
import Counter from '../components/counter';

function mapStoreStateToProps(state){
  console.log('store state: ', state)
  return{
    incrementedValue: state.incrementReducer.increment,
    decrementedValue: state.decrementReducer.decrement,
    todoList : state.addTodo.todo
  }
}

function mapDispatchWithProps(dispatch){
  return{
    increment: ()=> dispatch(Action.increment()),
    decrement: ()=> dispatch(Action.decrement()),
    desireIncrement: (value) => dispatch(Action.desireIncrement(value)),
    addTodo: (value) => dispatch(Action.addTodo(value)),
    deleteTodo: (index) => dispatch(Action.deleteTodo(index)),
    updateTodo: (data, i) => dispatch(Action.updateTodo(data, i))
  }
}

class CounterApp extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      userInput : 0,
      todoData: '',
      buttonValue: 'Add Todo',
      tempIndex: 0
    }
  }
  componentDidMount(){
    this.props.deleteTodo('i');
    this.props.updateTodo(null,null)  
  }
  updateState = (type,event)=>{
    let obj ={};
    obj[type] = event.target.value;
    this.setState(obj);
  }
  desireIncrement = () => {
    this.props.desireIncrement(this.state.userInput);
    // this.setState({userInput: ''});
    
  }
  incrementWithValue = (value) =>{
    console.log("yes this is update")
    this.props.desireIncrement(value);
  }
  addItem = () =>{
    console.log('addlist')
    if(this.state.buttonValue === 'Add Todo'){
      this.props.addTodo(this.state.todoData);
      this.setState({todoData:''});
    }else{
      this.props.updateTodo(this.state.todoData, this.state.tempIndex);
      this.setState({todoData: '', buttonValue: 'Add Todo'});
    }
  }
  delete = (i,ev)=>{
    // console.log('delete trigger index is: ' + i)
    this.props.deleteTodo(i);
  }
  edit = (data, i) =>{
    console.log(data);
    this.setState({
      todoData: data,
      tempIndex: i,
      buttonValue: 'Update'
    })
    console.log(this.state.todoData);    
  }
  render(){
  console.log('store state: ', this.props.todoList);
    
    return(
      <div>
        {/* <Counter count={this.props.incrementedValue + this.props.decrementedValue} update={this.incrementWithValue}/>
        <hr />
        <input type='number' value = {this.state.userInput} onChange={(event)=>{this.updateState('userInput',event)}}/>
        <h1>{this.props.incrementedValue + this.props.decrementedValue}</h1>
        <button onClick={this.props.increment}>Increment</button>
        <button onClick={this.props.decrement}>decrement</button>
        <button onClick={this.desireIncrement}>desire increment</button>*/}
        <div>
          <h1>Todo list</h1>
          <input type='text' value ={this.state.todoData} onChange={(event)=>{this.updateState('todoData',event)}}/>
          <button onClick={this.addItem}>{this.state.buttonValue}</button> 
          {
            this.props.todoList.map((data, i)=>{
              return(
                <div>
                  <ul>
                    <li key ={data.key}>
                      {data.value}
                      <button onClick={(ev) =>{this.delete(data.key,ev)}}>Delete</button>
                      <button onClick={(ev) =>{this.edit(data.value, data.key)}}>Edit</button>
                      
                    </li>
                  </ul>
                </div>
              )
            })
          }
        </div>
                
      </div>
    )
  }
}

export default connect(mapStoreStateToProps, mapDispatchWithProps)(CounterApp);