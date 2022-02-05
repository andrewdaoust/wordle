import * as _ from 'lodash';
import { BackspaceIcon } from '@heroicons/react/outline';
import { validateGuess, validWord } from '../lib/util';
import { UNKNOWN_GREY } from '../lib/util';


export const initialKeyboard = {
  q: { key: "Q", color: UNKNOWN_GREY },
  w: { key: "W", color: UNKNOWN_GREY },
  e: { key: "E", color: UNKNOWN_GREY },
  r: { key: "R", color: UNKNOWN_GREY },
  t: { key: "T", color: UNKNOWN_GREY },
  y: { key: "Y", color: UNKNOWN_GREY },
  u: { key: "U", color: UNKNOWN_GREY },
  i: { key: "I", color: UNKNOWN_GREY },
  o: { key: "O", color: UNKNOWN_GREY },
  p: { key: "P", color: UNKNOWN_GREY },
  a: { key: "A", color: UNKNOWN_GREY },
  s: { key: "S", color: UNKNOWN_GREY },
  d: { key: "D", color: UNKNOWN_GREY },
  f: { key: "F", color: UNKNOWN_GREY },
  g: { key: "G", color: UNKNOWN_GREY },
  h: { key: "H", color: UNKNOWN_GREY },
  j: { key: "J", color: UNKNOWN_GREY },
  k: { key: "K", color: UNKNOWN_GREY },
  l: { key: "L", color: UNKNOWN_GREY },
  z: { key: "Z", color: UNKNOWN_GREY },
  x: { key: "X", color: UNKNOWN_GREY },
  c: { key: "C", color: UNKNOWN_GREY },
  v: { key: "V", color: UNKNOWN_GREY },
  b: { key: "B", color: UNKNOWN_GREY },
  n: { key: "N", color: UNKNOWN_GREY },
  m: { key: "M", color: UNKNOWN_GREY },
};


function Key({ letter, color, onClick }) {

  // switch (true) {
  //   case 1: // not in word
  //     color = "bg-gray-700";
  //     break;
  //   case 2: // in word, wrong spot
  //     color = "bg-yellow-400";
  //     break;
  //   case 3: // in word, right spot
  //     color = "bg-lime-500";
  //     break;
  //   default: // letter not guessed
  //     color = UNKNOWN_GREY;
  //     break;
  // }

  let size = "w-20 h-12 font-sans";
  let className = `${size} m-0.5 rounded text-slate-50 ${color}`;
    
  return (
    <div className={className}>
      <button className={size} onClick={() => onClick(letter)}>{letter}</button>
    </div>
  );
}


export function Keyboard({
  answer,
  kbState,
  setKbState,
  latestGuess,
  setLatestGuess,
  guesses,
  setGuesses,
  gameOver,
  setGameOver,
}) {
  const onKeystroke = (letter) => {
    if (!gameOver && latestGuess.length <= 4) {
      latestGuess.push(letter);
      setLatestGuess(latestGuess);

      // console.log(latestGuess);

      guesses[guesses.length - 1].push({ letter: letter, color: UNKNOWN_GREY });
      guesses = JSON.parse(JSON.stringify(guesses));
      setGuesses(guesses);

      // console.log(guesses);
    }
  };

  const onBackspace = (letter) => {
    if (!gameOver && latestGuess.length > 0) {
      latestGuess.pop();
      setLatestGuess(latestGuess);

      // console.log(latestGuess);

      guesses[guesses.length - 1].pop();
      guesses = JSON.parse(JSON.stringify(guesses));
      setGuesses(guesses);

      // console.log(guesses);
    }
  };

  const onEnter = (letter) => {
    if (!gameOver && latestGuess.length === 5) {
      let guess = latestGuess.join("");
      if (validWord(guess)) {
        let [didWin, validatedGuess, kbUpdates] = validateGuess(guess, answer);

        guesses[guesses.length - 1] = validatedGuess;
        guesses.push([]);
        setGuesses(guesses);
        setLatestGuess([]);
        _.map(_.keys(kbUpdates), (key) => {
          kbState[key] = kbUpdates[key];
        });
        setKbState(JSON.parse(JSON.stringify(kbState)));

        if (didWin) {
          setGameOver(true);
          alert("YOU WIN! Refresh to play again");
        } else if (guesses.length > 6) {
          setGameOver(true);
          alert(`YOU LOSE! The word was ${answer}. Refresh to play again`);
        }
      } else {
        alert("Invalid word");
      }
    }
  };

  const rowStyle = "flex items-stretch";
  // const rowStyle = "grid grid-rows-1";
  return (
    // <Key letter="Q" color="0" />
    <div className="h-1/3">
      <div className={rowStyle}>
        <Key
          letter={kbState.q.key}
          color={kbState.q.color}
          onClick={onKeystroke}
        />
        <Key
          letter={kbState.w.key}
          color={kbState.w.color}
          onClick={onKeystroke}
        />
        <Key
          letter={kbState.e.key}
          color={kbState.e.color}
          onClick={onKeystroke}
        />
        <Key
          letter={kbState.r.key}
          color={kbState.r.color}
          onClick={onKeystroke}
        />
        <Key
          letter={kbState.t.key}
          color={kbState.t.color}
          onClick={onKeystroke}
        />
        <Key
          letter={kbState.y.key}
          color={kbState.y.color}
          onClick={onKeystroke}
        />
        <Key
          letter={kbState.u.key}
          color={kbState.u.color}
          onClick={onKeystroke}
        />
        <Key
          letter={kbState.i.key}
          color={kbState.i.color}
          onClick={onKeystroke}
        />
        <Key
          letter={kbState.o.key}
          color={kbState.o.color}
          onClick={onKeystroke}
        />
        <Key
          letter={kbState.p.key}
          color={kbState.p.color}
          onClick={onKeystroke}
        />
      </div>
      <div className={rowStyle}>
        <Key
          letter={kbState.a.key}
          color={kbState.a.color}
          onClick={onKeystroke}
        />
        <Key
          letter={kbState.s.key}
          color={kbState.s.color}
          onClick={onKeystroke}
        />
        <Key
          letter={kbState.d.key}
          color={kbState.d.color}
          onClick={onKeystroke}
        />
        <Key
          letter={kbState.f.key}
          color={kbState.f.color}
          onClick={onKeystroke}
        />
        <Key
          letter={kbState.g.key}
          color={kbState.g.color}
          onClick={onKeystroke}
        />
        <Key
          letter={kbState.h.key}
          color={kbState.h.color}
          onClick={onKeystroke}
        />
        <Key
          letter={kbState.j.key}
          color={kbState.j.color}
          onClick={onKeystroke}
        />
        <Key
          letter={kbState.k.key}
          color={kbState.k.color}
          onClick={onKeystroke}
        />
        <Key
          letter={kbState.l.key}
          color={kbState.l.color}
          onClick={onKeystroke}
        />
      </div>
      <div className={rowStyle}>
        <Key letter="enter" color={UNKNOWN_GREY} onClick={onEnter} />
        <Key
          letter={kbState.z.key}
          color={kbState.z.color}
          onClick={onKeystroke}
        />
        <Key
          letter={kbState.x.key}
          color={kbState.x.color}
          onClick={onKeystroke}
        />
        <Key
          letter={kbState.c.key}
          color={kbState.c.color}
          onClick={onKeystroke}
        />
        <Key
          letter={kbState.v.key}
          color={kbState.v.color}
          onClick={onKeystroke}
        />
        <Key
          letter={kbState.b.key}
          color={kbState.b.color}
          onClick={onKeystroke}
        />
        <Key
          letter={kbState.n.key}
          color={kbState.n.color}
          onClick={onKeystroke}
        />
        <Key
          letter={kbState.m.key}
          color={kbState.m.color}
          onClick={onKeystroke}
        />
        <Key
          letter={<BackspaceIcon color={UNKNOWN_GREY} className="h-18 w-12" />}
          onClick={onBackspace}
        />
      </div>
    </div>
  );
}