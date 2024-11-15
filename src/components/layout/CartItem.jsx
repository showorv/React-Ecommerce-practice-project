import React from 'react'
import {Format} from "../layout/helper/PriceConvert"
import { CartTotal} from "../layout/CartTotal"
import { MdDelete } from "react-icons/md";
import { useCartContext } from './Context/CartContext';


export const CartItem = (props) => {

    const { id,name,price,image,amount,colors} = props;
    const { removeCart,quantityDecrease,quantityIncrease} = useCartContext()

    // const quantityDecrease=()=>{

    //     // amount > 1 ? setAmount(amount - 1) : setAmount(amount)
    // }
    // const quantityIncrease=()=>{

    //     // stock > amount ? setAmount( amount + 1) : setAmount(stock)
    // }

  
  return (
    <div className="container">
        <div className="items">

        <figure>
            <img src={image} alt="" />
        </figure>
        <div className="name-color">
            <p className='pro-name'>{name}</p>

            <div className="colors">
                <p className="color">Color:</p>
                <div className='btnstyle' style={{backgroundColor: colors , colors:colors }}></div>
            </div>

        </div>
        </div>


        <div className="price">
            <Format price={price}/>
        </div>

        <CartTotal  amount={amount}
        quantityDecrease={()=>quantityDecrease(id)}
        quantityIncrease={()=>quantityIncrease(id)}/>


        <div className="subtotal">
            <Format price={price*amount}/>
        </div>
        
        <div className="remove">
        <MdDelete onClick={()=> removeCart(id)}/>

        </div>
    </div>
  )
}
