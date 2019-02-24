import React, { Component } from "react";
import Grid from "./components/Grid";

import "./App.css";
class App extends Component {
  constructor() {
    super();
    this.speed = 100;
    this.rows = 30;
    this.cols = 50;
    this.state = {
      generation: 0,
      gridFull: Array(this.rows).fill(Array(this.cols).fill(false))
    };
  }
  selectBox = (row, col) => {
    let gridCopy = arrayClone(this.state.gridFull);
    gridCopy[row][col] = !gridCopy[row][col];
    this.setState({
      gridFull: gridCopy
    });
  };
  render() {
    return (
      <div>
        <h1>The Game of Life</h1>

        <Grid
          gridFull={this.state.gridFull}
          rows={this.rows}
          cols={this.cols}
          selectBox={this.selectBox}
        />

        <h2>Generations: {this.state.generation}</h2>
      </div>
    );
  }
}
function arrayClone(arr) {
  return JSON.parse(JSON.stringify(arr));
}
export default App;
