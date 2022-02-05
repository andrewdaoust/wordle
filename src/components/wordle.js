import { useState } from "react";
import { Keyboard, initialKeyboard } from "./keyboard";
import { GuessBoard, initialBoard } from "./guesses";
import { getWord } from "../lib/util";
import { useEffect } from 'react';

export function Wordle() {
  let [gameOver, setGameOver] = useState(false)
  let [word,] = useState(getWord().toUpperCase());
  let [keyboardState, setKeyboardState] = useState(initialKeyboard);
  let [latestGuess, setLatestGuess] = useState([]);
  let [guesses, setGuesses] = useState([[]]);

  console.log(word);

  return (
    <div>
      <GuessBoard board={guesses} />
      <Keyboard
        answer={word}
        kbState={keyboardState}
        setKbState={setKeyboardState}
        latestGuess={latestGuess}
        setLatestGuess={setLatestGuess}
        guesses={guesses}
        setGuesses={setGuesses}
        gameOver={gameOver}
        setGameOver={setGameOver}
      />
    </div>
  );
}
