
import Square from "./Square";
type Marker = 'X' | 'O' | null ; 
type boardSquares = Array<Marker>;


//--------------------------------------------------------------------------------------------
                                // Board COMPONANT
//-------------------------------------------------------------------------------------------
 function Board({history,onPlay,markerNext}:{history:Array<boardSquares>,onPlay:(i:number)=>void,markerNext:Marker}) {
       const squares: boardSquares= history[history.length-1]; 

    // we use this function to render which player should play next or which one is the winner----
    function nextplayerIs(){
      const winner = calculateWinner(squares);
      if (winner) {
        return  'Winner: ' + winner;
      } else {
        return  'Next player: ' + markerNext;
      }
    }


  
//---------------------------------------------------------------------------------------
  return (
    <>    
      <div className="status">{nextplayerIs()}</div>
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



export default Board ;



//-------------------------------------------------------------------------------------
export function calculateWinner(squares : boardSquares) {
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

