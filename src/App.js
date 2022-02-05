// import logo from './logo.svg';
import './App.css';
// import { Keyboard } from './components/keyboard';
// import { GuessBoard, initialBoard } from './components/guesses';
import { Wordle } from './components/wordle';

function App() {
  return (
    <div className="bg-slate-600 h-screen">
      <header className="h-1/8">
        <span className="text-white">WORDLE ∞</span>
      </header>
      <Wordle />
    </div>
  );
}

export default App;
