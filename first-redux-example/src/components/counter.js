import React from 'react';

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            userInput : ''
        }
    }
    incCounterByOne = () =>{
        this.props.update(1);
    }
    incCounterByInput = () =>{
        this.props.update(parseInt(this.state.userInput));
    }
    updateState = (event) =>{
        this.setState({userInput: event.target.value});
    }
    render(){
        return(
            <div>
                I am counter or Dum Component
                <h1>
                    {this.props.count}
                </h1>
                <input type = 'number' onChange = {this.updateState} value={this.state.userInput}/>
                <button onClick ={this.incCounterByOne}>incCounterByOne</button>
                <button onClick ={this.incCounterByInput}>incCounterByInput</button>                
            </div>
        )
    }
}
export default Counter;