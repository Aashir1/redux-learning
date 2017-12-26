import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import {AppAction} from './store/action/action'


function mapStateToProps(state){  
  return{
    counterValue: state
  }
}

let mapDispatchWithProps = (dispatch) =>{
  return{
    aashirInfo: ()=> dispatch(AppAction.increment_by_3(3)),
    zuhaibInfo: ()=> dispatch(AppAction.increment()),
    faizInfo: ()=> dispatch(AppAction.decrement()),
    addDesireValue: (value)=>dispatch({type: 'add_desire_value', val: value})
  }
}


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      userInput: 0
    }
  }
  valueChange(event){
    this.setState({userInput: parseInt(event.target.value)});
  }
  addValue(){
    this.props.addDesireValue(this.state.userInput);
    // this.setState({userInput: ''})
  }
  render() {
    return (
      <div>
        <h1>
          {this.props.counterValue}
          
        </h1>
            <input type="text" onChange={this.valueChange.bind(this)} />
            <button onClick={this.addValue.bind(this)}>increment_desired_value</button>            
            <button onClick={this.props.aashirInfo}>increment_by_3</button>
            <button onClick={this.props.zuhaibInfo}>increment</button>
            <button onClick={this.props.faizInfo}>decrement</button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchWithProps)(App);
