
import './App.css';
import { useState } from "react";
import Result from './Result';
import { render } from '@testing-library/react';
import {Routes,Route,Link} from 'react-router-dom'

function App() {
  
    const [a1, seta1] = useState(0);
    let a2=a1
    
     
    const randNum=() =>{
   
     
    seta1(Math.floor(Math.random(a1)*100))
    if (a1>10) {

      window.alert("Target achieved")
    
    }
     
    }

  return (
    <>
    
    <div class="div1">
      <Routes>

    <Route exact path='/result' component={Result} />
    
    </Routes>

      <p>{a1}</p>
      
      <button
        type="button"
        onClick={randNum}
      >click me</button>
      <Result name={a2}/>
      
      
      </div>
    </>
  )
    
}

export default App;
