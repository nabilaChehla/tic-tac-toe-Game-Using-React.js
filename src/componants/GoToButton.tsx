  
  
type Marker = 'X' | 'O' | null ; 
type boardSquares = Array<Marker>;



//--------------------------------------------------------------------------------------------
                                  // GoToButton COMPONANT
  //--------------------------------------------------------------------------------------------
  // we use this componant to display the buttons we use to go back in history 
  
  function GoToButton({history, onClickHistory}:{history:Array<boardSquares>,onClickHistory:(i:number)=>void}) {
    const historyButtons = history.map((boardSquare, index) => (
      <li key={index}>
        <button onClick={()=>onClickHistory(index)}>go back to step {index}</button>
      </li>
    ));
    return(
    <ul>
      {historyButtons}
    </ul>
  );
  }
  

  export default GoToButton ; 
  