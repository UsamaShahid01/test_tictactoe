


import React, { useState } from 'react';
import './TicTacToe.css';
import circle_icon from '../Assets/circle.png';
import cross_icon from '../Assets/cross.png';

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);

  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const handleClick = (index) => {
    if (winner || board[index]) return; // Ignore clicks if the game is over or the cell is already filled

    const newBoard = [...board];
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    checkWinner(newBoard);
    setIsXNext(!isXNext);
  };

  const checkWinner = (board) => {
    for (const [a, b, c] of winningCombinations) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinner(board[a]);
        return;
      }
    }
    if (!board.includes(null)) {
      setWinner('Draw');
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
  };

  const renderCell = (index) => {
    return (
      <div
        className="box"
        onClick={() => handleClick(index)}
      >
        {board[index] === 'X' && <img src={cross_icon} alt="X" />}
        {board[index] === 'O' && <img src={circle_icon} alt="O" />}
      </div>
    );
  };

  return (
    <div className="container">
      <h1 className="title">
        {winner
          ? winner === 'Draw'
            ? 'It\'s a Draw!'
            : `Congratulations: ${winner}`
          : `Tic Tac Toe `}
      </h1>
      Play this game happily and enjoy
      <div className="board">
        {board.map((_, index) => renderCell(index))}
      </div>
      <button className="reset" onClick={resetGame}>Reset</button>
      <button className="reset" onClick={resetGame}>Reset</button>

    </div>
  );
};

export default TicTacToe;
