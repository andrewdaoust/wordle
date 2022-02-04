import { useState } from "react";
import { Keyboard, initialKeyboard } from "./keyboard";
import { GuessBoard, initialBoard } from "./guesses";
import { getWord } from "../lib/util";

export function Wordle() {
  let [keyboardState, setKeyboardState] = useState(initialKeyboard);
  let [latestGuess, setLatestGuess] = useState([]);
  let [guesses, setGuesses] = useState([[]]);

  const word = getWord().toUpperCase();
  console.log(word);

  return (
    <div>
      <GuessBoard board={guesses} />
      <Keyboard
        answer={word}
        kbState={keyboardState}
        latestGuess={latestGuess}
        setLatestGuess={setLatestGuess}
        guesses={guesses}
        setGuesses={setGuesses}
      />
    </div>
  );
}
