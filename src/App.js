// import logo from './logo.svg';
import './App.css';
// import { Keyboard } from './components/keyboard';
// import { GuessBoard, initialBoard } from './components/guesses';
import { Wordle } from './components/wordle';

function App() {
  return (
    <div className="bg-slate-600">
      <header>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        WORDLE CLONE
      </header>
      <Wordle />
    </div>
  );
}

export default App;
