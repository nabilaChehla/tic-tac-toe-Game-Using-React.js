import{ useState } from 'react';

let turn = 0 ; 



function Square({id}:{id:number}){
  const [check, setCheck]=useState<string>('');

  function handelCheck(){
    if(check=='' && turn %2 == 0  ){
      setCheck('X')
      turn ++ ;
    }
    else if(check=='' && turn %2 == 1 ){
     setCheck('O');
      turn ++ ;
  }}

  return(
    <button className="square" onClick={handelCheck}>{check}</button>
  )
}


function Board() {


    return (
      <>
      <div className="board-row">
      <Square />
      <Square />
      <Square />
      </div>
      <div className="board-row">
      <Square />
      <Square />
      <Square />
      </div>

      <div className="board-row">
      <Square />
      <Square />
      <Square />
      </div>
      </>
    )
  }
  


  export default Board
  