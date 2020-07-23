import React, { Component } from "react";
import NodeGroup from "react-move/NodeGroup";
import { getInitialData } from "./helper";
import "./App.css";

let barHeight = 25;
let barPadding = 2;
let barColour = "#FF0000";
let widthScale = d => d * 5;

function BarGroup(props) {
  let width = widthScale(props.state.value);
  let yMid = barHeight * 0.5;

  return (
    <g className="bar-group" transform={`translate(0, ${props.state.y})`}>
      <rect
        y={barPadding * 0.5}
        width={width}
        height={barHeight - barPadding}
        style={{ fill: barColour, opacity: props.state.opacity }}
      />
      <text
        className="value-label"
        x={width - 6}
        y={yMid}
        alignmentBaseline="middle"
      >
        {props.state.value.toFixed(0)}
      </text>
      <text
        className="name-label"
        x="-6"
        y={yMid}
        alignmentBaseline="middle"
        style={{ opacity: props.state.opacity }}
      >
        {props.data.name}
      </text>
    </g>
  );
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: getInitialData()
    };
  }

  startTransition(d, i) {
    return { value: 0, y: i * barHeight, opacity: 0 };
  }

  enterTransition(d) {
    return { value: [d.value], opacity: [1], timing: { duration: 250 } };
  }

  updateTransition(d, i) {
    return { value: [d.value], y: [i * barHeight], timing: { duration: 300 } };
  }

  leaveTransition(d) {
    return { y: [-barHeight], opacity: [0], timing: { duration: 250 } };
  }

  render() {
    return (
      <div>
        <div id="menu">
        </div>
        <svg width="800" height="2200">
          <g className="chart" transform="translate(100,10)">
            <NodeGroup
              data={this.state.data}
              keyAccessor={d => d.name}
              start={this.startTransition}
              enter={this.enterTransition}
              update={this.updateTransition}
              leave={this.leaveTransition}
            >
              {nodes => (
                <g>
                  {nodes.map(({ key, data, state }) => (
                    <BarGroup key={key} data={data} state={state} />
                  ))}
                </g>
              )}
            </NodeGroup>
          </g>
        </svg>
      </div>
    );
  }
}

export default App;
