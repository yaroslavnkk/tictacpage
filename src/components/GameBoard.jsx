

export default function GameBoard({onSelectSquare, board}) {

    // const [gameBoard, setGameBoard] = useState(initialGameBoard);
    // function handleClickCell(rowIndex, columnIndex){
    //     setGameBoard((prevGameBoard) => {
    //         const newGameBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
    //         newGameBoard[rowIndex][columnIndex] = activePlayerSymbol;
    //         return newGameBoard;
    //     });
    //     onSelectSquare();

    return <ol id="game-board">
        {board.map((row, rowIndex) => <li key={rowIndex}>
            <ol>
                {row.map((playerSymbol, columnIndex) => <li key={columnIndex}>
                    <button onClick={() => onSelectSquare(rowIndex, columnIndex)} disabled={playerSymbol !== null}>{playerSymbol}</button>
                </li>)}
            </ol>
        </li>)}
    </ol>
}