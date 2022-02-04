import * as _ from "lodash";
import { useEffect } from 'react';


export function GuessBoard({ board }) {
  let flatBoard = board.flat();
  let fillBoard = new Array(30 - flatBoard.length).fill(null);
  flatBoard = flatBoard.concat(fillBoard);
  let cells = [];
  _.each(flatBoard, (letter) => {
    let cell = <Cell props={letter} />;
    cells.push(cell);
  });

  const style = "grid grid-cols-5 gap-2 w-1/3 h-2/3 content-center";
  return (
    <div className={style} >
      { cells }
    </div>
  );
}


function Cell({ props }) {
  if (!props) {
    props = { letter: "", color: "bg-gray-400" };
  }
  const style = `w-full h-20 m-0.5 ${props.color} border-2 border-slate-300`;
  return (
    <div className={style} >
      {props.letter}
    </div>
  );
}
