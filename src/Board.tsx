import { useState } from 'react';

type Marker = 'X' | 'O' | null ; 
type boardSquares = Array<Marker>;


//--------------------------------------------------------------------------------------------
                                // Square COMPONANT
//-------------------------------------------------------------------------------------------
function Square({value, onSquareClick}:{value:Marker , onSquareClick:()=>void}) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}
//--------------------------------------------------------------------------------------------
                                // Board COMPONANT
//-------------------------------------------------------------------------------------------
 function Board({history,onPlay,status}:{history:Array<boardSquares>,onPlay:(i:number)=>void,status:string}) {
       const squares: boardSquares= history[history.length-1]; 
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

//--------------------------------------------------------------------------------------------
                                // GAME COMPONANT
//--------------------------------------------------------------------------------------------
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




function naxtplayerIs(){
  const winner = calculateWinner(squares);
  if (winner) {
    return  'Winner: ' + winner;
  } else {
    return  'Next player: ' + markerNext;
  }
}
  
function jumpTo(turn:number){
 const newHistory:Array<boardSquares> = [] ;

 history.forEach((boardSquare, index) => {
  if (index <= turn) {
    newHistory.push(boardSquare);
  }
});
   setHistory(newHistory);
   setSquares(newHistory[newHistory.length-1]);
}


console.log(history)

  
return(
  <>
 <Board history={history} onPlay={handleClick} status ={naxtplayerIs()}/> 
 <GoToButton history={history} onClickHistory={jumpTo}/>
  </>

);

}
//--------------------------------------------------------------------------------------------
                                // GoToButton COMPONANT
//--------------------------------------------------------------------------------------------
function GoToButton({history, onClickHistory}:{history:Array<boardSquares>,onClickHistory:(i:number)=>void}) {
  const historyButtons = history.map((boardSquare, index) => (
    <li key={index}>
      <button onClick={()=>onClickHistory(index)}>go to step {index}</button>
    </li>
  ));
  return(
  <ul>
    {historyButtons}
  </ul>
);
}




export default Game; 




//-------------------------------------------------------------------------------------
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
