import { useState } from 'React';
const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]
export default function GameBoard({onSelectSquare, turns}) {
    let gameBoard = initialGameBoard;
    for (const turn of turns) {
        const {square, player} = turn;
        const{row,col} = square;
        gameBoard[row][col] = player;
    }
    // const [gameBoard, setGameBoard] = useState(initialGameBoard);
    // function handleClickCell(rowIndex, columnIndex){
    //     setGameBoard((prevGameBoard) => {
    //         const newGameBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
    //         newGameBoard[rowIndex][columnIndex] = activePlayerSymbol;
    //         return newGameBoard;
    //     });
    //     onSelectSquare();

    return <ol id="game-board">
        {gameBoard.map((row, rowIndex) => <li key={rowIndex}>
            <ol>
                {row.map((playerSymbol, columnIndex) => <li key={columnIndex}>
                    <button onClick={() => onSelectSquare(rowIndex, columnIndex)}>{playerSymbol}</button>
                </li>)}
            </ol>
        </li>)}
    </ol>
}