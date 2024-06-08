import Header from './components/Header.jsx';
import gameLogo from '../public/game-logo.png'
import Player from './components/Player.jsx';
function App() {
  return (
      <>
        <h1>React Tic-Tac-Toe</h1>
        <Header image={gameLogo}/>
        <main>
            <div id="game-container">
                <ol id="players">
                    <Player playerName="Player 1" playerSymbol="X" />
                    <Player playerName="Player 2" playerSymbol="O" />
                </ol>
                GAME BOARD
            </div>
        </main>
      </>
  )
}

export default App
