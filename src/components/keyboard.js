function Key({ letter, keyState handleClick }) {
  let color
  switch (keyState) {
    case 1: // not in word
      color = "bg-slate-700";
      break;
    case 2: // in word, wrong spot
      color = "bg-yellow-200";
      break;
    case 3: // in word, right spot
      color = "bg-lime-400";
      break;
    default: // letter not guessed
      color = "bg-slate-300";
      break;
  }

  let className = `w-20 h-12 text-slate-50 ${color}`;
    
  return (
    <div className={className}>
      <button onClick={() => alert(letter)}>{letter}</button>
    </div>
  );
}


export function Keyboard(state) {
  const initialState = {
    q: {letter: "Q", keyState: 0},
    w: {letter: "W", keyState: 0},
    e: {letter: "E", keyState: 0},
    r: {letter: "R", keyState: 0},
    t: {letter: "T", keyState: 0},
    y: {letter: "Y", keyState: 0},
    u: {letter: "U", keyState: 0},
    i: {letter: "I", keyState: 0},
    o: {letter: "O", keyState: 0},
    p: {letter: "P", keyState: 0},
    a: {letter: "A", keyState: 0},
    s: {letter: "S", keyState: 0},
    d: {letter: "D", keyState: 0},
    f: {letter: "F", keyState: 0},
    g: {letter: "G", keyState: 0},
    h: {letter: "H", keyState: 0},
    j: {letter: "J", keyState: 0},
    k: {letter: "K", keyState: 0},
    l: {letter: "L", keyState: 0},
    z: {letter: "Z", keyState: 0},
    x: {letter: "X", keyState: 0},
    c: {letter: "C", keyState: 0},
    v: {letter: "V", keyState: 0},
    b: {letter: "B", keyState: 0},
    n: {letter: "N", keyState: 0},
    m: {letter: "M", keyState: 0},
  };
  [ keyState, setKeyState ] = useState(initialState);

  const rowStyle = "flex items-stretch";
  return (
    // <Key letter="Q" keyState="0" />
    <div>
      <div className={rowStyle}>
        <Key letter="Q" keyState="0" onClick={setKeyState}/>
        <Key letter="W" keyState="0" />
        <Key letter="E" keyState="0" />
        <Key letter="R" keyState="0" />
        <Key letter="T" keyState="0" />
        <Key letter="Y" keyState="0" />
        <Key letter="U" keyState="0" />
        <Key letter="I" keyState="0" />
        <Key letter="O" keyState="0" />
        <Key letter="P" keyState="0" />
      </div>
      <div className={rowStyle}>
        <Key letter="A" keyState="0" />
        <Key letter="S" keyState="0" />
        <Key letter="D" keyState="0" />
        <Key letter="F" keyState="0" />
        <Key letter="G" keyState="0" />
        <Key letter="H" keyState="0" />
        <Key letter="J" keyState="0" />
        <Key letter="K" keyState="0" />
        <Key letter="L" keyState="0" />
      </div>
      <div className={rowStyle}>
        <Key letter="Z" keyState="0" />
        <Key letter="X" keyState="0" />
        <Key letter="C" keyState="0" />
        <Key letter="V" keyState="0" />
        <Key letter="space" keyState="0" />
        <Key letter="B" keyState="0" />
        <Key letter="N" keyState="0" />
        <Key letter="M" keyState="0" />
      </div>
    </div>
  );
}