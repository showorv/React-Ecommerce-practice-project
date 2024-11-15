import React from 'react'
import { Product } from './Product'
import styled from 'styled-components'

export const ListView = ( {products}) => {
  return (
    <Wrapper>

      
      {
        products.map( (curElem)=>{
          return( <Product key={curElem.id} {...curElem}/>)
        })
      }
    </Wrapper>
    
    
  )
}

const Wrapper =styled.div`
     padding: 2rem 0;
    /* background-color: rgb(197, 197, 197); */
    max-width: 100%;
    min-height: 40vh;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    
    
    
    .flex-coloum{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        
        flex-wrap: wrap;

    }

    span{
        font-size: 1vw;
        color: #4f4fc4;
        margin: 0 18.5vw;
    }

    .h3{
        
        text-transform: uppercase;
        font-size:1.5vw;
        font-weight: 700;
        margin: 0 18.5vw;
        font-family: Arial, Helvetica, sans-serif;
    }

    .container{
        display: flex;
        
        align-items: center;
        gap: 3rem;
        margin: 4rem 18.5vw;

        

    }
    .card{
        width: 68rem;
        background-color: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        border: 1px solid #dadada;
        padding: 0.5rem 2rem;
        padding-right: 10rem;
        position: relative;
        

    }

   
    img{
        width: 15rem;
        height: 10rem;
        position: relative;
        transition: 0ms.2s all ease-in;

    }

    img:hover{
        opacity: 50%;

    }

    .catagory{
        position: absolute;
       
        color: #ffffff;
        padding: 0.2rem 1rem;
        background-color: #99ace2;
        text-align: center;
        border-radius: 20px;
        
    }

    .card-data{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
       padding: 0.4rem 0.4rem;

    }

    .product-name ,
    .proudct-price{
        color: black;
        font-size: 1vw;
        font-weight: 400;
    }
`