import React, { Component } from 'react';
import './App.css';

export interface IProps {
  value: number;
}

export interface IState {
  value: number;
}

class Square extends React.Component<IProps, IState> {
  constructor(props:IState){
    super(props);
    this.state = {
      value:this.props.value
    };
  }

  render() {
    return (
      <button className="square" onClick={() => console.log('click')}>
        {/* TODO */}
        {this.state.value}
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i:number) {
    return <Square value={i} />;
  }

  render() {
    const status = 'Next player...: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

export default App;