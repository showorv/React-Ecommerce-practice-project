import React from 'react'

export const CartTotal = ({ amount, quantityDecrease,quantityIncrease}) => {
  return (
    <div className='quan-box'>
        <h4>Quantity: </h4>
        <div className="quantity">
            
            <button className="btn" onClick={quantityDecrease}>-</button>
            <p>{amount}</p>
            <button className="btn" onClick={quantityIncrease}>+</button>
        </div>
    </div>
  )
}

