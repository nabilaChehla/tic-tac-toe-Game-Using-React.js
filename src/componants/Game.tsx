import { useState } from 'react';
import Board from './Board';
import GoToButton from './GoToButton';
import { calculateWinner } from './Board';


type Marker = 'X' | 'O' | null ; 
type boardSquares = Array<Marker>;

//--------------------------------------------------------------------------------------------
                                // GAME COMPONANT
//--------------------------------------------------------------------------------------------
function Game(){

    const [history , setHistory] = useState<Array<boardSquares>>([Array(9).fill(null)]);
  
    const [markerNext, setMarkerNext] = useState<Marker>('X');
    const [squares, setSquares] = useState<boardSquares>(Array(9).fill(null));


    //function we use to check the squares with 'X' or 'O' : -------------------------------------
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
  
  
  

    // we use this function to jump to a previous state in history of the game -----------
  function jumpTo(turn:number){
   const newHistory:Array<boardSquares> = [] ;
   setMarkerNext('X'); // we have to regenerate marker when going back in history 
   history.forEach((boardSquare, index) => {
    if (index <= turn) { // we copy all the moves before the selected history 
      newHistory.push(boardSquare);
 
  }});
        // we have to take control of marker when going back in history :
  setMarkerNext(turn % 2 === 0 ? 'X' : 'O');
     setHistory(newHistory);
     setSquares(newHistory[newHistory.length-1]); // the bored is now matching the last array in history that we chose to come back to 
  }


  //-----------------------------------------------------------------------
  
  
  
    
  return(
    <>
   <Board history={history} onPlay={handleClick} markerNext ={markerNext}/> 
   <GoToButton history={history} onClickHistory={jumpTo}/>
    </>
  
  );
  
  }

  
  
  
  export default Game; 
  
  
