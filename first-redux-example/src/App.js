import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';


function mapStateToProps(state){
  console.log(state);
  return{
    developerData: state
  }
}

let mapDispatchWithProps = (dispatch) =>{
  return{
    aashirInfo: ()=> dispatch({type: 'aashir'}),
    zuhaibInfo: ()=> dispatch({type: 'zuhaib'}),
    faizInfo: ()=> dispatch({type: 'faiz'}),
    shoaibInfo: ()=> dispatch({type: 'shoaib'}) 
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <h1>
          {this.props.developerData.name}
          <br />
          {this.props.developerData.salary}
          <br />
          {this.props.developerData.occupation}
          <br />
        </h1>
            <button onClick={this.props.aashirInfo}>Aashir Data</button>
            <button onClick={this.props.zuhaibInfo}>zuhaib Data</button>
            <button onClick={this.props.faizInfo}>faiz Data</button>
            <button onClick={this.props.shoaibInfo}>shoaib Data</button>   
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchWithProps)(App);
