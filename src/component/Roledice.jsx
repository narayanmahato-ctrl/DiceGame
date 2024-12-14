// import React, { useState } from 'react'
import styled from 'styled-components'



const Roledice = ({currentDice,roleDice}) => {
  
  
  return (
   <Dicecontainer>
     <div className='Dice' onClick={roleDice}>
        <img src={`./src/component/img/dice_${currentDice}.png`} alt='dices'/>
      
    </div>
    <p>Click on Dice Roll</p>
   
   </Dicecontainer>
  )
}

export default Roledice

const Dicecontainer=styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
   .Dice{
        cursor: pointer;
    }
    p{
        font-weight: 500;
    }
    
   
`
