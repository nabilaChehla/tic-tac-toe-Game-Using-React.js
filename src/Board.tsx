import { useState } from 'react';

type Marker = 'X' | 'O' | null ; 
type boardSquares = Array<Marker>;

function Square({value, onSquareClick}:{value:Marker , onSquareClick:()=>void}) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

 function Board({squares,onPlay}:{squares:boardSquares,onPlay:(i:number)=>void}) {


  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => onPlay(0)} />
        <Square value={squares[1]} onSquareClick={() => onPlay(1)} />
        <Square value={squares[2]} onSquareClick={() => onPlay(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => onPlay(3)} />
        <Square value={squares[4]} onSquareClick={() => onPlay(4)} />
        <Square value={squares[5]} onSquareClick={() => onPlay(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => onPlay(6)} />
        <Square value={squares[7]} onSquareClick={() => onPlay(7)} />
        <Square value={squares[8]} onSquareClick={() => onPlay(8)} />
      </div>
    </>
  );
}


function Game(){

  const [history , setHistory] = useState<Array<boardSquares>>([Array(9).fill(null)]);

  const [markerNext, setMarkerNext] = useState<Marker>('X');
  const [squares, setSquares] = useState<boardSquares>(Array(9).fill(null));

  function handleClick(i: number) {
    if (calculateWinner(squares) || squares[i]!=null) {
      return;
    }
    const nextSquares = squares.slice();
    let nextHistory = history.slice();

    if (markerNext=='X') {
      nextSquares[i] = 'X';
      setMarkerNext('O');
    } else {
      nextSquares[i] = 'O';
      setMarkerNext('X');
    }
    setSquares(nextSquares);
    nextHistory = history.concat([nextSquares]);
    setHistory(nextHistory);
  }



  
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + markerNext;
  }

console.log(status)
console.log(history
  
  )
return(
<Board squares={squares} onPlay={handleClick}/>
);

}

export default Game; 

function calculateWinner(squares : boardSquares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
