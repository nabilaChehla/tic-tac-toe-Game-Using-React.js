import Button from "./Button"
import ShoppingList from "./Shopping"
import { useState } from "react"

function App() {
  const [numClick, setNumClick]= useState<number>(0)
  
  const handelClick  = ()=>{
    setNumClick(numClick + 1)
  }

  return (
    <>
      <form>
        <label className="addItem">
          <h2>Add new item: </h2>
          <br />
          <input type="text" defaultValue="John" />
        </label>
        <button>ADD</button>
      </form>
      <Button count={numClick} onClick={handelClick}/>
      <Button  count={numClick} onClick={handelClick}/>
      <ShoppingList />

    </>
  )
}

export default App
