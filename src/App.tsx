import React, { Component } from 'react';
import './App.css';

export interface ISquareProps {
  value: string;
}

export interface ISquareState {
  value: string;
}

class Square extends React.Component<ISquareProps, ISquareState> {
  constructor(props: ISquareState) {
    super(props);
    this.state = {
      value: this.props.value,
    };
  }

  render() {
    return (
      <button className="square"
        onClick={() => this.setState({ value: 'X' })}
      >
        {/* TODO */}
        {this.state.value}
      </button>
    );
  }
}


export interface IBoardProps {
  squares: Array<any>;
}

export interface IBoardState {
  squares: Array<any>;
}

class Board extends React.Component<IBoardProps, IBoardState> {

  constructor(props: IBoardState) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    }
  }
  renderSquare(i: any) {
    return <Square value={this.state.squares[i]} />;
  }

  render() {
    const status = 'Next player...: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare('0')}
          {this.renderSquare('1')}
          {this.renderSquare('2')}
        </div>
        <div className="board-row">
          {this.renderSquare('3')}
          {this.renderSquare('4')}
          {this.renderSquare('5')}
        </div>
        <div className="board-row">
          {this.renderSquare('6')}
          {this.renderSquare('7')}
          {this.renderSquare('8')}
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
          <Board squares={[]}/>
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