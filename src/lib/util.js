const fs = require("fs");


export function getWord() {
  let words = fs.readFileSync("../data/words1.txt", "utf-8");
  words = words.split("\n");

  // words2 = fs.readFileSync("../data/words2.txt", "utf-8");
  // words2 = words2.split("\n");
  // words = words.concat(words2);

  let idx = getRandomInt(words.length);
  return words[idx];
}


function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}