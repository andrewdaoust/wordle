import { words } from "../data/words.js";
import { extendedWords } from "../data/words-extended";
import * as _ from "lodash";


export const GREEN = "bg-lime-500";
export const YELLOW = "bg-yellow-400";
export const WRONG_GREY = "bg-gray-700";
export const UNKNOWN_GREY = "bg-gray-400";


export function getWord() {
  // words = words.concat(extendedWords);

  let idx = getRandomInt(words.length);
  return words[idx];
}


function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


export function validateGuess(guess, answer) {
  let kbUpdates = {};
  let guessArr = [];
  if (guess === answer) {
    ([...guess]).forEach((c) => {
      guessArr.push({ letter: c, color: GREEN });
      let cLower = c.toLowerCase();
      if (kbUpdates[cLower] === undefined) {
        kbUpdates[cLower] = { key: c, color: GREEN };
      }
    });
    return [true, guessArr, kbUpdates];
  }
  let output = new Array(5).fill(null);
  let unmatchedIndices = [];
  let unmatchedAnswerLetters = [];

  let guessLetter;
  let answerLetter;
  let gLower;
  for (let i=0; i < guess.length; i++) {
    guessLetter = guess[i];
    answerLetter = answer[i];
    gLower = guessLetter.toLowerCase();

    if (guessLetter == answerLetter) {
      output[i] = { letter: guessLetter, color: GREEN };
      if (kbUpdates[gLower] === undefined) {
        kbUpdates[gLower] = { key: guessLetter, color: GREEN };
      }
    } else {
      unmatchedIndices.push(i);
      unmatchedAnswerLetters.push(answerLetter);
    }  
  }

  unmatchedIndices.forEach((j) => {
    guessLetter = guess[j]
    gLower = guessLetter.toLowerCase();

    if (unmatchedAnswerLetters.includes(guessLetter)) {
      output[j] = { letter: guessLetter, color: YELLOW };
      let idx = unmatchedAnswerLetters.indexOf(guessLetter);
      unmatchedAnswerLetters.splice(idx, 1);
      if (kbUpdates[gLower] === undefined) {
        kbUpdates[gLower] = { key: guessLetter, color: YELLOW };
      }
    } else {
      output[j] = { letter: guessLetter, color: WRONG_GREY };
      if (kbUpdates[gLower] === undefined) {
        kbUpdates[gLower] = { key: guessLetter, color: WRONG_GREY };
      }
    }
  });

  return [false, output, kbUpdates];
}


export function validWord(guess) {
  let wordList = words.concat(extendedWords);
  return wordList.includes(guess.toLowerCase());
}
