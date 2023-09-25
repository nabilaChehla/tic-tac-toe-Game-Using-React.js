import React from "react";


type Marker = 'X' | 'O' | null ; 


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

  export default Square ; 