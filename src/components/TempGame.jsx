import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { cellContext } from '../store/CellContext';

function TempGame() {
  const cellCtx = useContext(cellContext);
  const [boardCell, setBoardCell] = useState(cellCtx.board);
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const winner = cellCtx.checkWinner();
    if (winner || cellCtx.board.every(row => row.every(cell => cell !== null))) {
      setGameOver(true); 
    }
    setBoardCell(cellCtx.board); 
  }, [cellCtx.board]);

  function handleClick(i, j) {
    if (boardCell[i][j] === null && !gameOver) { 
      cellCtx.setBoard(i, j, currentPlayer);
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    }
  }

  return (
    <div className="flex justify-between h-[80vh] w-[80vw]">
      
      <div className="border-2 border-black h-[60vh] w-[60vh]">
        {boardCell.map((row, i) => (
          <div key={i} className="flex">
            {row.map((cell, j) => (
              <div
                key={j}
                className="flex justify-center items-center text-7xl font-semibold border-2 border-black h-[20vh] w-[20vh]"
                onClick={() => handleClick(i, j)}
              >
                {cell}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="h-full w-full flex justify-around mt-8">
        <div className="playerX h-[10vh] border-2 border-green-300 py-2 px-10 my-1 mx-2 hover:bg-green-500 shadow-xl shadow-blue-500 hover:shadow-green-500 transition-all rounded-xl active:bg-green-900">
          <h1>Player X</h1>
          <p className='text-2xl'>{currentPlayer === 'X' && !gameOver ? 'Your Turn' : 'Waiting'}</p>
        </div>
        <div className="playerO h-[10vh] border-2 border-blue-300 py-2 px-10 my-1 mx-2 hover:bg-blue-500 shadow-xl shadow-green-500 hover:shadow-blue-500 transition-all rounded-xl active:bg-blue-900">
          <h1>Player O</h1>
          <p className='text-2xl'>{currentPlayer === 'O' && !gameOver ? 'Your Turn' : 'Waiting'}</p>
        </div>
      </div>
    </div>
  );
}

export default TempGame;