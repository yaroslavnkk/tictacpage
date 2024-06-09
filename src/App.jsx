import Header from './components/Header.jsx';
import gameLogo from '../public/game-logo.png'
import Player from './components/Player.jsx';
import GameBoard from './components/GameBoard.jsx';
import {useState} from "React";
function App() {
  const [activePlayer, setActivePlayer] = useState('X');
  function handleSelectSquare(){
      setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');
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
                <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer} />
            </div>
        </main>
      </>
  )
}

export default App
