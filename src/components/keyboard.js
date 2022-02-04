import * as _ from 'lodash';
import { BackspaceIcon } from '@heroicons/react/outline';
import { validateGuess } from '../lib/util';


export const initialKeyboard = {
  q: { key: "Q", color: "bg-gray-400" },
  w: { key: "W", color: "bg-gray-400" },
  e: { key: "E", color: "bg-gray-400" },
  r: { key: "R", color: "bg-gray-400" },
  t: { key: "T", color: "bg-gray-400" },
  y: { key: "Y", color: "bg-gray-400" },
  u: { key: "U", color: "bg-gray-400" },
  i: { key: "I", color: "bg-gray-400" },
  o: { key: "O", color: "bg-gray-400" },
  p: { key: "P", color: "bg-gray-400" },
  a: { key: "A", color: "bg-gray-400" },
  s: { key: "S", color: "bg-gray-400" },
  d: { key: "D", color: "bg-gray-400" },
  f: { key: "F", color: "bg-gray-400" },
  g: { key: "G", color: "bg-gray-400" },
  h: { key: "H", color: "bg-gray-400" },
  j: { key: "J", color: "bg-gray-400" },
  k: { key: "K", color: "bg-gray-400" },
  l: { key: "L", color: "bg-gray-400" },
  z: { key: "Z", color: "bg-gray-400" },
  x: { key: "X", color: "bg-gray-400" },
  c: { key: "C", color: "bg-gray-400" },
  v: { key: "V", color: "bg-gray-400" },
  b: { key: "B", color: "bg-gray-400" },
  n: { key: "N", color: "bg-gray-400" },
  m: { key: "M", color: "bg-gray-400" },
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
  //     color = "bg-gray-400";
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


export function Keyboard({ answer, kbState, latestGuess, setLatestGuess, guesses, setGuesses }) {
  const onKeystroke = (letter) => {
    if (latestGuess.length <= 4) {
      latestGuess.push(letter);
      setLatestGuess(latestGuess);

      console.log(latestGuess);

      guesses[guesses.length-1].push({ letter: letter, color: "bg-gray-400" });
      setGuesses(guesses);

      console.log(guesses);
    }
  };

  const onBackspace = (letter) => {
    if (latestGuess.length > 0) {
      latestGuess.pop();
      setLatestGuess(latestGuess);

      console.log(latestGuess);

      guesses.pop();
      setGuesses(guesses);
    }
  };

  const onEnter = (letter) => {
    if (latestGuess.length === 5) {
      let guess = latestGuess.join("");

      let validatedGuess = validateGuess(guess, answer);
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
        <Key letter="enter" color="bg-gray-400" onClick={onEnter} />
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
          letter={<BackspaceIcon color="bg-gray-400" className="h-18 w-12" />}
          onClick={onBackspace}
        />
      </div>
    </div>
  );
}