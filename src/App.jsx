import Header from './components/Header.jsx';
import gameLogo from '../public/game-logo.png'
import Player from './components/Player.jsx';
import GameBoard from './components/GameBoard.jsx';
import Log from './components/Log.jsx';
import GameOver from './components/GameOver.jsx';
import {useState} from "react";
import {WINNING_COMBINATIONS} from "./winning-combinations.js";
const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]
function setActivePlayer(playerTurn){
    let currentPlayer = 'X';
    if(playerTurn.length > 0 && playerTurn[0].player === 'X'){
        currentPlayer = 'O';
    }
    return currentPlayer;
}
function App() {

  const [playerTurn, setPlayerTurn] = useState([]);
  const [players, setPlayers]  = useState({
      'X' : 'Player 1',
      'O' : 'Player 2'
  });
  const activePlayer = setActivePlayer(playerTurn);
  let gameWinner = null;
    let gameBoard = [...initialGameBoard.map(array => [...array])];
    for (const turn of playerTurn) {
        const {square, player} = turn;
        const{row,col} = square;
        gameBoard[row][col] = player;
    }
    for (const combination of WINNING_COMBINATIONS) {
        const firstSymbol = gameBoard[combination[0].row][combination[0].column];
        const secondSymbol = gameBoard[combination[1].row][combination[1].column];
        const thirdSymbol = gameBoard[combination[2].row][combination[2].column];
        if(firstSymbol && firstSymbol === secondSymbol && firstSymbol === thirdSymbol){
            gameWinner = players[firstSymbol];
        }
    }
    const isDraw = playerTurn.length === 9 && !gameWinner;
  function handleSelectSquare(rowIndex, columnIndex){
      setPlayerTurn((previousTurn) => {
          const currentPlayer = setActivePlayer(playerTurn);
          return [{square: {row: rowIndex, col: columnIndex}, player: currentPlayer}, ...previousTurn];
  });
  }
  function handleRestart(){
      setPlayerTurn([]);
  }
  function handleNameChange(name,symbol){
      setPlayers(prevPlayers =>{
          return {
              ...prevPlayers,
              [symbol]: name
          }
      })
  }
  return (
      <>
        <h1>My React Game</h1>
        <Header image={gameLogo}/>
        <main>
            <div id="game-container">
                <ol id="players" className="highlight-player">
                    <Player initialName="Player 1" playerSymbol="X" isActive={activePlayer === 'X'} onChangeName={handleNameChange} />
                    <Player initialName="Player 2" playerSymbol="O" isActive={activePlayer === 'O'} onChangeName={handleNameChange} />
                </ol>
                {(gameWinner || isDraw) && <GameOver winner = { gameWinner } onRestart={ handleRestart } />}
                <GameBoard onSelectSquare={handleSelectSquare} board = {gameBoard} />
            </div>
            <Log turns ={playerTurn}/>
        </main>
      </>
  )
}

export default App
