import { useState } from 'react';
import { Keyboard, initialKeyboard } from "./keyboard";
import { GuessBoard, initialBoard } from "./guesses";
import { getWord } from '../lib/util';


export function Wordle() {
  let [keyboardState, setKeyboardState] = useState(initialKeyboard);
  let [boardState, setBoardState] = useState(initialBoard);

  const word = getWord();
  
  return (
    <div>
      <GuessBoard board={initialBoard} />
      <Keyboard />
    </div>
  );
}
