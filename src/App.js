// import logo from './logo.svg';
import './App.css';
import { Keyboard } from './components/keyboard';
import { GuessBoard, initialBoard } from './components/guesses';

function App() {
  return (
    <div className="bg-slate-600">
      <header>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        WORDLE CLONE
      </header>
      <GuessBoard board={initialBoard} />
      <Keyboard />
    </div>
  );
}

export default App;
