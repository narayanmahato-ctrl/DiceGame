import React, { useState } from 'react'
import styled from 'styled-components';

const Selector = ({error ,setError, selectNumber, setSelectNumber}) => {
    const arrNumber=[1,2,3,4,5,6];
    const numberHandler=(value)=>{
        setSelectNumber(value);
        setError("")

    }
    
  return (
    <NumberselectorContainer>
        <p className='error'>{error}</p>
        <div className="flex">
        {arrNumber.map((value,i)=>(
            <Box
            isSelected={value === selectNumber}
            key={i}
            onClick={()=>numberHandler(value)}

            >
                {value}

            </Box>
        ))}
        </div> 
        <p>
            Select Number
        </p>
    
    </NumberselectorContainer>
  );
};

export default Selector;
const NumberselectorContainer=styled.div`
display: flex;
flex-direction: column;
align-items: end;
.flex{
    display: flex;
    gap:24px ;
}
p{
    font-size: 24px;
    font-weight: 700;
}
.error{
        color: red;
    }
     
`;

const Box=styled.div`
    height: 72px;
    width: 72px;
    border:1px solid black;
    display: grid;
    border-radius: 4px;
    place-items: center;
    font-size: 24px;
    font-weight: 700;
    background-color: ${(props)=>(props.isSelected ? "black" : "white")};
    color: ${(props)=>(!props.isSelected ? "black" : "white")};

    

`   