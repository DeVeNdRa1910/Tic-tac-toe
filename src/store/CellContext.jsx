import { createContext, useContext, useState} from "react";

export let cellContext = createContext({
    board: Array(3).fill(Array(3).fill(null)),
    setBoard: (i, j, elem) => {},
    checkWinner: (board) => {}
});

function CellProvider({children}){

    const boardCtx = useContext(cellContext);
    const [board, setBoard] = useState(boardCtx.board);

    const  cellCtx = {
        board: board,
        setBoard: (i , j , elem) =>{
            const newBoard = board.map(row => [...row]);
            newBoard[i][j] = elem;
            setBoard(newBoard);
        },
        checkWinner: () =>{
            const lines = [
                ...board,
                [board[0][0], board[1][1], board[2][2]],
                [board[0][2], board[1][1], board[2][0]],
                ...[0, 1, 2].map(col => board.map(row => row[col])),
            ]
    
            for (const line of lines) {
                if (line.every((cell) => cell === 'X')) {
                    alert('Player X wins');
                    return 'X';
                }
                if (line.every((cell) => cell === 'O')) {
                    alert('Player O wins');
                    return 'O';
                }
            }
    
            if(board.flat().every(item => item != null)) {
                alert('Draw');
                return 'Draw';
            };
    
        }
    }

    return (
        <cellContext.Provider value={cellCtx}>
            {children}
        </cellContext.Provider>
    )
}

export default CellProvider;