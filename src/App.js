
import './App.css';
import { useState } from "react";

function App() {
  
    const [a1, seta1] = useState(0);

    const randNum=() =>{
    if (a1>10) {

      window.alert("Target achieved")



    }
      
    seta1(Math.floor(Math.random(a1)*100))
     
    }

  return (
    <>
    <div class="div1">
      <h1>{a1}</h1>
      <button
        type="button"
        onClick={randNum}
      >click me</button>
      </div>
    </>
  )
    
}

export default App;
