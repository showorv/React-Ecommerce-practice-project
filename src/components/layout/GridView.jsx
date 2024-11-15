import React from 'react'
import styled from 'styled-components'
import { Product } from '../layout/Product'

export const GridView = ({products}) => {


  return (
    <Wrapper>
        <div className="flex-coloum">
            {
                products.map((curElem)=>{

                    return <Product key={curElem.id} {...curElem}/>
                })
            }
        </div>
    </Wrapper>
  )
}


const Wrapper =styled.div`
     padding: 2rem 0;
    background-color: rgba(197, 197, 197, 0.267);
    width: 68rem;
    min-height: 40vh;
    position: relative;
    
    .flex-coloum{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 2rem;
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
        
        background-color: #fff;
        border: 1px solid #dadada;
        padding: 0.5rem 0.5rem;

    }

   
    img{
        width: 20rem;
        height: 15rem;
        position: relative;
        transition: 0ms.2s all ease-in;

    }

    img:hover{
        opacity: 50%;

    }

    .catagory{
       
        
        
        color: black;
        padding: 0.2rem 1rem;
        background-color: #929be9;
        text-align: center;
        border-radius: 20px;
    }

    .card-data{
        display: flex;
        justify-content: space-between;
        align-items: center;
       padding: 0.4rem 0.4rem;

    }

    .product-name ,
    .proudct-price{
        color: black;
        font-size: 1vw;
        font-weight: 400;
    }
`