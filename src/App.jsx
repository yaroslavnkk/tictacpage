import Header from './components/Header.jsx';
import gameLogo from '../public/game-logo.png'
import Player from './components/Player.jsx';
import GameBoard from './components/GameBoard.jsx';
import Log from './components/Log.jsx';
import {useState} from "React";
function App() {
  const [activePlayer, setActivePlayer] = useState('X');
  const [playerTurn, setPlayerTurn] = useState([]);
  function handleSelectSquare(rowIndex, columnIndex){
      setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');
      setPlayerTurn((previousTurn) => {
          let currentPlayer = 'X';
          if(previousTurn.length > 0 && previousTurn[0].player === 'X'){
              currentPlayer = 'O';
          }
          const updatedTurn = [{ square : {row : rowIndex, col : columnIndex}, player : currentPlayer} , ...previousTurn];
          return updatedTurn;
  });
  }
  return (
      <>
        <h1>My React Game</h1>
        <Header image={gameLogo}/>
        <main>
            <div id="game-container">
                <ol id="players" className="highlight-player">
                    <Player initialName="Player 1" playerSymbol="X" isActive={activePlayer === 'X'} />
                    <Player initialName="Player 2" playerSymbol="O" isActive={activePlayer === 'O'} />
                </ol>
                <GameBoard onSelectSquare={handleSelectSquare} turns = {playerTurn} />
            </div>
            <Log turns ={playerTurn}/>
        </main>
      </>
  )
}

export default App
