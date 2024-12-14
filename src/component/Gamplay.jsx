import React from "react";
import Score from "./Score";
import Selector from "./Selector";
import styled from "styled-components";
import Roledice from "./Roledice";
import { useState  } from "react";
import Rules from "./Rules";

const Gamplay = () => {
  const [score,setScore]=useState(0);
  const [selectNumber,setSelectNumber]=useState();
  const[currentDice,setCurrentDice]=useState(1);
  const[error,setError]=useState("");
  const[showrules,setShowRules]=useState(false);

  const generateRandomNumber=(min,max)=>{
    return Math.floor(Math.random()*(max-min)+min);
   };
   const roleDice=()=>{
    if(!selectNumber){
      setError("You Have Not Selected Any Number")
      return;
    }
    
    const randomNumber=generateRandomNumber(1,7);
    setCurrentDice((prev)=>randomNumber);


    if(selectNumber==randomNumber){ 
      setScore((prev)=>randomNumber+prev)
    }
    else{
      setScore((prev)=>prev-2)
    }
    setSelectNumber(undefined)
   }
   const reset=()=>{
    setScore(0);

   }

  return (
    <MainContainer>
      <div className="top_section">
        <Score  score={score}/>
        <Selector selectNumber={selectNumber} 
        setSelectNumber={setSelectNumber}
        error={error}
        setError={setError}
        
        />
      </div>
      <Roledice currentDice={currentDice}
      roleDice={roleDice}/>
       <div className='btnn'>
        <button onClick={reset}>Reset Score</button>
        <button onClick={()=>setShowRules((prev)=>!prev)}>
          {showrules ? "Hide": "Show"}Rules</button>
    </div>
    {showrules &&<Rules/>}
    </MainContainer>
  );
};

export default Gamplay;

const MainContainer = styled.main`
padding-top: 70px;
  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
  .btnn{
        display: flex;
        flex-direction: column;
        gap: 24px;
        align-items: center;
        margin-top: 30px;
        
        

    }
    button{
        padding: 10px 40px;
        background-color: black;
        color: white;
        font-size: 20px;
        /* width: 30px; */
        border-radius: 1px solid black transparent;
        border-radius: 15px;
        cursor: pointer;
  border: 1px solid transparent;
  transition: 0.3s background ease-in;

        &:hover{
    background-color: #ffffff;
    border: 1px solid black;
    color: black;
    transition: 0.27s background ease-in;
  }
    }

`;
