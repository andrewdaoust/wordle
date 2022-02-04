import { words } from "../data/words.js";
import { extendedWords } from "../data/words-extended";

export function getWord() {
  // words = words.concat(extendedWords);

  let idx = getRandomInt(words.length);
  return words[idx];
}


function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


export function validateGuess(guess, answer) {
  return false
}