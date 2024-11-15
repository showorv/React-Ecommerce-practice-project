import React, { useState } from 'react'
import styled from 'styled-components'
import { FaCheck } from "react-icons/fa6";
import { CartTotal } from './CartTotal';
import { Button } from './Button';
import { NavLink } from 'react-router-dom';
import { useCartContext } from './Context/CartContext';


export const AddToCart = ({product}) => {
    const { addToCart} = useCartContext();
    const { id, colors, stock} = product;
    // console.log(colors);

    const [ color , setColor] = useState(colors[0]);

    const [ amount, setAmount] = useState(1)

    const quantityDecrease=()=>{

        amount > 1 ? setAmount(amount - 1) : setAmount(amount)
    }
    const quantityIncrease=()=>{

        stock > amount ? setAmount( amount + 1) : setAmount(stock)
    }

  return (
    <Wrapper>
        <div className="color-container">
            <p>
                Colors:
                { colors.map((curColor, index)=>{
                    return <button 
                    key={index}
                    style={{backgroundColor: curColor}}
                    className={ color ===curColor? "btnstyle active" : "btnstyle"}
                    onClick={ ()=> setColor(curColor)}
                    >
                        { color=== curColor? <FaCheck className='checkStyle'/> : curColor}
                        
                    </button>

                })}
            </p>
        </div>
        
        <CartTotal    amount={amount}
        quantityDecrease={quantityDecrease}
        quantityIncrease={quantityIncrease}/>

        <NavLink to="/cart"
        onClick={ ()=> addToCart( id, colors,amount, product)}> 
        {/* add to cart e add korte j sob details lagbe ta destructure kore newa hoise */}
        <Button >Add To Cart</Button>
        </NavLink>
        
    </Wrapper>
  )
}

const Wrapper = styled.div`
    
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items:flex-start;
    gap: 1rem;

    .btnstyle{
        height: 2rem;
        width: 2rem;
        border-radius:1000px;
        opacity: 0.5;
        margin-left: 0.2rem;
        background-color: #fff;
        border: none;
        outline: none;
        color: transparent;
    }

    .active{
        opacity: 1;
    }

    .checkStyle{
        color: white;
    }

    .quantity{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 5rem;
        height: 2rem;
        background-color: #dadada;
        gap: 1rem;
        
    }

    .btn{
        width: 1.7rem;
        height: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1vw;
        background-color: gray;
        cursor: pointer;
        border: none;
        

    }

    .btn:hover{
        background-color: #adabab;
    }

    .quan-box{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 1rem;
        
    }
`
