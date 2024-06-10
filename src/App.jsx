import Header from './components/Header.jsx';
import gameLogo from '../public/game-logo.png'
import Player from './components/Player.jsx';
import GameBoard from './components/GameBoard.jsx';
import Log from './components/Log.jsx';
import {useState} from "react";

function setActivePlayer(playerTurn){
    let currentPlayer = 'X';
    if(playerTurn.length > 0 && playerTurn[0].player === 'X'){
        currentPlayer = 'O';
    }
    return currentPlayer;
}
function App() {
  const [playerTurn, setPlayerTurn] = useState([]);
  function handleSelectSquare(rowIndex, columnIndex){
      setPlayerTurn((previousTurn) => {
          const currentPlayer = setActivePlayer(playerTurn);
          return [{square: {row: rowIndex, col: columnIndex}, player: currentPlayer}, ...previousTurn];
  });
  }
  return (
      <>
        <h1>My React Game</h1>
        <Header image={gameLogo}/>
        <main>
            <div id="game-container">
                <ol id="players" className="highlight-player">
                    <Player initialName="Player 1" playerSymbol="X" isActive={setActivePlayer(playerTurn) === 'X'} />
                    <Player initialName="Player 2" playerSymbol="O" isActive={setActivePlayer(playerTurn) === 'O'} />
                </ol>
                <GameBoard onSelectSquare={handleSelectSquare} turns = {playerTurn} />
            </div>
            <Log turns ={playerTurn}/>
        </main>
      </>
  )
}

export default App
