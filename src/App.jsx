import { useState } from "react"

function App() {
 const [count, setCount]=useState(5);
 const increment = ()=>{
  setCount(count+1);
 }
 const decrement =()=>{
  setCount(count-1);
 }
 const reset =()=>{
  setCount(0);
 }
  return (
    <>
     <div className="container">
      <div class="heading">
      <h1>Counter App</h1>
      </div>
      <div className="number">
      <h3>{count}</h3>
      </div>
      <div className="button" >
      <button class="button button1" onClick={increment}>Increment</button>
      <button class="button button2" onClick={decrement}>Decrement</button>
      <button class="button button3" onClick={reset}>Reset</button>
      </div>
      
      </div>
     
    
    </>
  )
}

export default App
