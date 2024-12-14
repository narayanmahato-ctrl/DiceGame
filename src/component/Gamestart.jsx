import React from 'react'
import styled from "styled-components";

const Gamestart = ({toggle}) => {
  return (
    <div>
        <Div className="ff"> 
    <Img src="./src/images/dices 1.png"/>
    <H1>DICE GAME</H1>
    <Button onClick={toggle} >
      Start Game
    </Button>
   </Div></div>
  )
}

export default Gamestart












const Img=styled.img`
  /* height: 700px;
  width: 700px;
  margin-top: 70px; */
  background-size: contain;
`
const Div=styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  column-gap: 40px;
  /* width: 600px;
  height: 720px; */
  /* flex-direction: column; */
  /* margin-top: 80px; */
  margin: 80px 40px;
`
const H1=styled.h1`
  font-size:90px;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif
 
  
`
const Button=styled.button`
  background-color:black;
  color: aliceblue;
  border-radius: 40px;
  font-size: 15px;
  padding: 10px 60px;
  margin-top: 300px;
  cursor: pointer;
  border: 1px solid transparent;
  transition: 0.3s background ease-in;
  &:hover{
    background-color: #ffffff;
    border: 1px solid black;
    color: black;
    transition: 0.27s background ease-in;
  }
  
`
