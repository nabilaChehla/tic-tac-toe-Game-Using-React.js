

interface ButtonProps{
  count : number,
  onClick : ()=>void
}

function Button({count, onClick}:ButtonProps) {

    return (
      <>
        <button onClick={onClick}>Button clicked {count} time</button>
      </>
    )
  }
  
  export default Button
  