import * as _ from "lodash";

export const initialBoard = new Array(30).fill(null);

export function GuessBoard({ board }) {
  let cells = [];
  _.each(board, (letter) => {
    let cell = <Cell state={letter} />;
    cells.push(cell);
  });

  const style = "grid grid-cols-5 gap-4 w-1/3 content-center";
  return (
    <div className={style} >
      { cells }
    </div>
  );
}


function Cell({ state }) {
  if (!state) {
    state = { letter: "", color: "bg-gray-400" };
  }
  const style = `w-20 h-20 m-0.5 ${state.color} border-2 border-slate-300`;
  return (
    <div className={style} >
      {state.letter}
    </div>
  );
}