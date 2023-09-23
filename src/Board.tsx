import{ useState } from 'react';

type Marker = 'X' | 'O' | null;

function Square({value,setMarkerOnClick}:{value:Marker,setMarkerOnClick:()=>void}){
  return(
    <button className="square" onClick={setMarkerOnClick}>{value} </button>
  )
}


function Board() {
  const [boardSquares , setboardSquares] = useState<Array<null|Marker>>(Array(9).fill(null));
  function handelBoardSquare(i:number){
    const squares = boardSquares.slice()// a copy of boardSquares
    squares[i]='X'
    setboardSquares(squares)
  }
    return (
      <>
      <div className="board-row">
      <Square value={boardSquares[0]} setMarkerOnClick={()=>{handelBoardSquare(0)}}/>
      <Square value={boardSquares[1]} setMarkerOnClick={()=>{handelBoardSquare(1)}}/>
      <Square value={boardSquares[2]} setMarkerOnClick={()=>{handelBoardSquare(2)}}/>
      </div>
      <div className="board-row">
      <Square value={boardSquares[3]} setMarkerOnClick={()=>{handelBoardSquare(3)}}/>
      <Square value={boardSquares[4]} setMarkerOnClick={()=>{handelBoardSquare(4)}}/>
      <Square value={boardSquares[5]} setMarkerOnClick={()=>{handelBoardSquare(5)}}/>
      </div>

      <div className="board-row">
      <Square value={boardSquares[6]} setMarkerOnClick={()=>{handelBoardSquare(6)}}/>
      <Square value={boardSquares[7]} setMarkerOnClick={()=>{handelBoardSquare(7)}}/>
      <Square value={boardSquares[8]} setMarkerOnClick={()=>{handelBoardSquare()}}/>
      </div>
      </>
    )
  }
  


  export default Board
  