import React, { Component } from 'react';
import './App.css';

export interface ISquareProps {
  value: string;
  onClick: any;
}

export interface ISquareState {
  value: string;
  onClick: any;
}

// class Square extends React.Component<ISquareProps, ISquareState> {
//   constructor(props: ISquareState) {
//     super(props);
//   }

//   render() {
//     return (
//       <button className="square"
//         onClick={() => this.props.onClick()}
//       >
//         {/* TODO */}
//         {this.props.value}
//       </button>
//     );
//   }
// }
function Square(props: ISquareState) {
  return (
    <button className="square"
      onClick={() => props.onClick()}
    >
      {/* TODO */}
      {props.value}
    </button>
  );
}

export interface IBoardProps {
  squares: Array<any>;
  xIsNext: boolean;
}

export interface IBoardState {
  squares: Array<any>;
  xIsNext: boolean;
}

class Board extends React.Component<IBoardProps, IBoardState> {

  constructor(props: IBoardState) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    }
  }
  renderSquare(i: any) {
    return <Square
      value={this.state.squares[i]}
      onClick={() => this.handleClick(i)}
    />;
  }

  handleClick(i: any) {
    const squares = this.state.squares.slice();
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }

  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    if(winner){
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

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
          <Board squares={[]} xIsNext={true} />
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

function calculateWinner(squares: any) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i: number = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}