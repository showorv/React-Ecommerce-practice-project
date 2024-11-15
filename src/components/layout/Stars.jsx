import React from 'react'
import styled from 'styled-components';
import { FaStar } from "react-icons/fa6";
import { MdOutlineStarBorderPurple500 } from "react-icons/md";

import { MdOutlineStarHalf } from "react-icons/md";



export const Stars = ({stars, review}) => {


  const ratingStar=  Array.from({length:5}, (elem , index)=>{
    let number = index+ 0.5; // becausee without 0.5 number will always 0,1,2,3,4 but if we need 3.4 ratings thats why
 
  return (
        // index = 0 in first loop. so 4.4 >= 0+1 = 1 star evbe 4 star porjonto hobe index er value 1 barte barte. then second condition then 3rd condition.
        
        <span key={index}>
            { stars >= index+1 ?(<FaStar className='icons'/>)
            : stars>= number ? 
        (<MdOutlineStarHalf className='icons'/>)
    : (<MdOutlineStarBorderPurple500 className='icons'/>)}
        </span>
   
  )
})
  return(
    <Wrapper>
        {ratingStar}
        <p className='review'>({review} customer reviews)</p>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    
    .review{
        margin-left: 1rem;
    }

    .icons{
        color: #9b5310;
    }
`