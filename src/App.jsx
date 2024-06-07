import Header from './components/Header.jsx';
import gameLogo from '../public/game-logo.png'
function App() {
  return (
      <>
        <h1>React Tic-Tac-Toe</h1>
        <Header image={gameLogo}/>
      </>
  )
}

export default App
