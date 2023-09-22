import{ useState } from 'react';

function Square({value}:{value:string}){
  return(
    <button className="square">{value}</button>
  )
}


function Board() {
  const [count_turn, setTurn] = useState<number>(0);
  
  function HandelTurn(){
    if(count_turn%2==0 && count_turn<9){
      Check_O()
    }
    else if(count_turn%2==1 && count_turn<9){
      Check_X()
    }
    else(console.log('partie terminée'));
    setTurn(count_turn+1)
  }

    return (
      <>
      <div className="board-row">
      <Square value={''} />
      <Square value={''} />
      <Square value={''} />
      </div>
      <div className="board-row">
      <Square value={''} />
      <Square value={''} />
      <Square value={''} />
      </div>

      <div className="board-row">
      <Square value={''} />
      <Square value={''} />
      <Square value={''} />
      </div>
      </>
    )
  }
  
  export default Board
  