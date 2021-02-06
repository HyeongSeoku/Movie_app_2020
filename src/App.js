import React from "react";
import PropTypes from "prop-types";
import { render } from "@testing-library/react";

class App extends React.Component{
  state = {
    count:0,
  };
  add = () => {
    this.setState({count:this.state.count+1});   //setState => state안의 값 변경 this.state로 변경시 직접변경 오류 뜸
  };
  minus = () => {
    this.setState({count:this.state.count-1});   //this.state.count : 현재 카운트 값
  }
  render(){
    return <div>
      <h1>The number is {this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick ={this.minus}>Minus</button>
    </div>
  }
}

export default App;