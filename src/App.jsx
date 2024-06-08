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
                    <Player initialName="Player 1" playerSymbol="X" />
                    <Player initialName="Player 2" playerSymbol="O" />
                </ol>
                GAME BOARD
            </div>
        </main>
      </>
  )
}

export default App
