import { useState } from 'React';
const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]
export default function GameBoard(){
    const [gameBoard, setGameBoard] = useState(initialGameBoard);
    function handleClickCell(rowIndex, columnIndex){
        setGameBoard((prevGameBoard) => {
            const newGameBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
            newGameBoard[rowIndex][columnIndex] = 'X';
            return newGameBoard;
        });
    }
    return <ol id="game-board">
        {gameBoard.map((row, indexRow) => <li key = {indexRow}>
            <ol>
                {row.map((playerSymbol, columnIndex) => <li key = {columnIndex}><button onClick={() => handleClickCell(indexRow, columnIndex)}>{playerSymbol}</button></li>)}
            </ol>
        </li> )}
    </ol>
}