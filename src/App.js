import React, { useState } from "react";
import { Intro } from "./components";

const App = () => {
  const [status, setStatus] = useState("X");

  const Square = () => {
    return <button className="square"></button>;
  };

  const Board = () => {
    const renderSquare = (i) => {
      return <Square />;
    };

    return (
      <div>
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
    );
  };

  return (
    <div id="main">
      <Intro />
      <div className="game">
        <div className="game-info">
          <div> Next player {status}</div>
        </div>
        <div className="game-board">
          <Board />
        </div>
      </div>
    </div>
  );
};

export default App;
