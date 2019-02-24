import React, { Component } from "react";

class Buttons extends Component {
  render() {
    return (
      <div className="center">
        <button className="btn btn-default" onClick={this.props.playButton}>
          Play
        </button>
        <button className="btn btn-default" onClick={this.props.pauseButton}>
          Pause
        </button>
        <button className="btn btn-default" onClick={this.props.clear}>
          Clear
        </button>
        <button className="btn btn-default" onClick={this.props.slow}>
          Slow
        </button>
        <button className="btn btn-default" onClick={this.props.fast}>
          Fast
        </button>
        <button className="btn btn-default" onClick={this.props.seed}>
          Seed
        </button>
      </div>
    );
  }
}
export default Buttons;
