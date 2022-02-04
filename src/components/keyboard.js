import * as _ from 'lodash';
import { useState } from 'react';
import { BackspaceIcon } from '@heroicons/react/outline';


export const initialKeyboard = {
  q: { letter: "Q", keyState: 0 },
  w: { letter: "W", keyState: 0 },
  e: { letter: "E", keyState: 0 },
  r: { letter: "R", keyState: 0 },
  t: { letter: "T", keyState: 0 },
  y: { letter: "Y", keyState: 0 },
  u: { letter: "U", keyState: 0 },
  i: { letter: "I", keyState: 0 },
  o: { letter: "O", keyState: 0 },
  p: { letter: "P", keyState: 0 },
  a: { letter: "A", keyState: 0 },
  s: { letter: "S", keyState: 0 },
  d: { letter: "D", keyState: 0 },
  f: { letter: "F", keyState: 0 },
  g: { letter: "G", keyState: 0 },
  h: { letter: "H", keyState: 0 },
  j: { letter: "J", keyState: 0 },
  k: { letter: "K", keyState: 0 },
  l: { letter: "L", keyState: 0 },
  z: { letter: "Z", keyState: 0 },
  x: { letter: "X", keyState: 0 },
  c: { letter: "C", keyState: 0 },
  v: { letter: "V", keyState: 0 },
  b: { letter: "B", keyState: 0 },
  n: { letter: "N", keyState: 0 },
  m: { letter: "M", keyState: 0 },
};


function Key({ letter, keyState, onClick }) {
  let color;
  switch (parseInt(keyState)) {
    case 1: // not in word
      color = "bg-gray-700";
      break;
    case 2: // in word, wrong spot
      color = "bg-yellow-400";
      break;
    case 3: // in word, right spot
      color = "bg-lime-500";
      break;
    default: // letter not guessed
      color = "bg-gray-400";
      break;
  }

  let size = "w-20 h-12 font-sans";
  let className = `${size} m-0.5 rounded text-slate-50 ${color}`;
    
  return (
    <div className={className}>
      <button class={size} onClick={() => onClick(letter)}>{letter}</button>
    </div>
  );
}


export function Keyboard() {
  let [state, setState] = useState(initialKeyboard);

  // console.log(state)

  const testClick = (letter) => {
    let newState = _.cloneDeep(state);
    // TODO: Make this actually do something useful
    newState[letter.toLowerCase()].keyState += 1
    if (newState[letter.toLowerCase()].keyState > 3) {
      newState[letter.toLowerCase()].keyState = 0;
    }
    
    setState(newState);
  };

  const backspaceClick = (letter) => {
    setState(initialKeyboard);
  }

  const enterClick = (letter) => {
    setState(initialKeyboard);
  }

  const rowStyle = "flex items-stretch";
  // const rowStyle = "grid grid-rows-1";
  return (
    // <Key letter="Q" keyState="0" />
    <div>
      <div className={rowStyle}>
        <Key letter={state.q.letter} keyState={state.q.keyState} onClick={testClick} />
        <Key letter={state.w.letter} keyState={state.w.keyState} onClick={testClick} />
        <Key letter={state.e.letter} keyState={state.e.keyState} onClick={testClick} />
        <Key letter={state.r.letter} keyState={state.r.keyState} onClick={testClick} />
        <Key letter={state.t.letter} keyState={state.t.keyState} onClick={testClick} />
        <Key letter={state.y.letter} keyState={state.y.keyState} onClick={testClick} />
        <Key letter={state.u.letter} keyState={state.u.keyState} onClick={testClick} />
        <Key letter={state.i.letter} keyState={state.i.keyState} onClick={testClick} />
        <Key letter={state.o.letter} keyState={state.o.keyState} onClick={testClick} />
        <Key letter={state.p.letter} keyState={state.p.keyState} onClick={testClick} />
      </div>
      <div className={rowStyle}>
        <Key letter={state.a.letter} keyState={state.a.keyState} onClick={testClick} />
        <Key letter={state.s.letter} keyState={state.s.keyState} onClick={testClick} />
        <Key letter={state.d.letter} keyState={state.d.keyState} onClick={testClick} />
        <Key letter={state.f.letter} keyState={state.f.keyState} onClick={testClick} />
        <Key letter={state.g.letter} keyState={state.g.keyState} onClick={testClick} />
        <Key letter={state.h.letter} keyState={state.h.keyState} onClick={testClick} />
        <Key letter={state.j.letter} keyState={state.j.keyState} onClick={testClick} />
        <Key letter={state.k.letter} keyState={state.k.keyState} onClick={testClick} />
        <Key letter={state.l.letter} keyState={state.l.keyState} onClick={testClick} />
      </div>
      <div className={rowStyle}>
        <Key letter="enter" onClick={enterClick}/>
        <Key letter={state.z.letter} keyState={state.z.keyState} onClick={testClick} />
        <Key letter={state.x.letter} keyState={state.x.keyState} onClick={testClick} />
        <Key letter={state.c.letter} keyState={state.c.keyState} onClick={testClick} />
        <Key letter={state.v.letter} keyState={state.v.keyState} onClick={testClick} />
        <Key letter={state.b.letter} keyState={state.b.keyState} onClick={testClick} />
        <Key letter={state.n.letter} keyState={state.n.keyState} onClick={testClick} />
        <Key letter={state.m.letter} keyState={state.m.keyState} onClick={testClick} />
        <Key letter={<BackspaceIcon className="h-18 w-12"/>} onClick={backspaceClick}/>
      </div>
    </div>
  );
}