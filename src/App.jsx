
import styled from "styled-components";
import Gamestart from "./component/Gamestart";
import { useState } from "react";
import Gamplay from "./component/Gamplay";


function App() {
  const[isGameStarted ,setIsGameStarted]=useState(false);
   const toggleGamePlay =()=>{
    setIsGameStarted((prev)=>!prev);
   };

  return (
   <>
    {isGameStarted ? <Gamplay /> : <Gamestart toggle={toggleGamePlay} />}
    
   </>
  )
}

export default App


