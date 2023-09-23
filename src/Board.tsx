import { useState } from 'react';

type Marker = 'X' | 'O' | null;

function Square({ value, setMarkerOnClick }: { value: Marker, setMarkerOnClick: () => void }) {
  return (
    <button className="square" onClick={setMarkerOnClick}>{value} </button>
  )
}


function Board() {


  const [boardSquares, setboardSquares] = useState<Array<null | Marker>>(Array(9).fill(null));
  const [turn , setTurn] = useState<Marker>('X');

  function handelBoardSquare(i: number) {
    if(calculateWinner(boardSquares)==null){
      // IF THERE IS NO WINNER YET : 
    const squares = boardSquares.slice();// a copy of boardSquares to modify the board 

    if( turn == 'X' && boardSquares[i]==null) {
          squares[i] = 'X';
          setTurn('O') // exchange turn
    }
    else{
      if(turn == 'O' && boardSquares[i]==null){
           squares[i] = 'O';
          setTurn('X')   // exchange turn     
      }
      else{console.log ("partie terminée !")}
    }

    setboardSquares(squares);
    }
    else{      // IF THERE IS A WINNER ALREADY: 
      console.log(calculateWinner(boardSquares)+' WON !') }

  }//---------------------------------------------------------------------------------
  
//  TO CHECK IF THERE IS A WINNER :-----------------------------------------------------------------
function calculateWinner(squares : Array<null | Marker>) {
  if(squares.length==9){
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  }
  else{ console.log('error : squares in calculateWinner function shoud have 9 elements ')}
  return null;
}
//--------------------------------------------------------------------------------


  return (
    <>
      <div className="board-row">
        <Square value={boardSquares[0]} setMarkerOnClick={() => { handelBoardSquare(0) }} />
        <Square value={boardSquares[1]} setMarkerOnClick={() => { handelBoardSquare(1) }} />
        <Square value={boardSquares[2]} setMarkerOnClick={() => { handelBoardSquare(2) }} />
      </div>
      <div className="board-row">
        <Square value={boardSquares[3]} setMarkerOnClick={() => { handelBoardSquare(3) }} />
        <Square value={boardSquares[4]} setMarkerOnClick={() => { handelBoardSquare(4) }} />
        <Square value={boardSquares[5]} setMarkerOnClick={() => { handelBoardSquare(5) }} />
      </div>

      <div className="board-row">
        <Square value={boardSquares[6]} setMarkerOnClick={() => { handelBoardSquare(6) }} />
        <Square value={boardSquares[7]} setMarkerOnClick={() => { handelBoardSquare(7) }} />
        <Square value={boardSquares[8]} setMarkerOnClick={() => { handelBoardSquare(8) }} />
      </div>
    </>
  )
}



export default Board
