import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { cellContext } from '../store/CellContext'

function Game() {
    const cellCtx = useContext(cellContext);
    const [boardCell, setBoardCell] = useState(cellCtx.board);
    const [currentPlayer, setCurrentPlayer] = useState('X');
    const [row, setRow] = useState(null);
    const [col, setCol] = useState(null);

    function handleClick(i, j) {
        if(boardCell[i][j] === null){
            setRow(i);
            setCol(j);
        };
    }

    function playerX(){
        cellCtx.setBoard(row, col, currentPlayer);
        setCurrentPlayer('O');
    }

    function playerO(){
        cellCtx.setBoard(row, col, currentPlayer);
        setCurrentPlayer('X');
    }

    useEffect(() => {
        cellCtx.checkWinner()
        setBoardCell(cellCtx.board);
    }, [cellCtx.board]);

    // First will be X
    // Second will be O

    return (
        <div className='flex justify-between h-[80vh] w-[80vw]'>
            <div className='outer border-2 border-black h-[60vh] w-[60vh]'>
                {
                    boardCell.map((cellRow, i) => (
                        <div key={i} className='flex'>
                            {
                                cellRow.map((elem, j) => (
                                    <div
                                        key={j}
                                        className='flex justify-center items-center text-7xl font-semibold inner border-2 border-black h-[20vh] w-[20vh]'
                                        onClick={() => handleClick(i, j)}
                                    >
                                        {elem}
                                    </div>
                                ))
                            }
                        </div>
                    ))
                }
            </div>

            <div className='h-full w-full flex justify-around mt-8'>
                <div className='h-full w-full flex justify-around mt-8'>
                    <div className='playerX'>
                        <h1>Player X</h1>
                        {currentPlayer === 'X' ? <button className='border-2 border-green-300 py-2 px-10 my-1 mx-2 hover:bg-green-500 shadow-xl shadow-blue-500 hover:shadow-green-500 transition-all rounded-xl active:bg-green-900' onClick={playerX} disabled={currentPlayer!=='X'}>X</button> : 'Waiting'}
                    </div>
                    <div className='playerO'>
                        <h1>Player O</h1>
                        {currentPlayer === 'O' ? <button className='border-2 border-blue-300 py-2 px-10 my-1 mx-2 hover:bg-blue-500 shadow-xl shadow-green-500 hover:shadow-blue-500 transition-all rounded-xl active:bg-blue-900' onClick={playerO} disabled={currentPlayer!=='O'}>O</button> : 'Waiting'}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Game