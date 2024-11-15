import styled from "styled-components";
import { useCartContext } from "./Context/CartContext"
import { CartItem } from "./CartItem";
import { NavLink } from "react-router-dom";
import { Button } from "./Button";
import { Format } from "./helper/PriceConvert";

export const Cart = ()=>{

    const {cart, clearCart, total_price,tax} = useCartContext();
    console.log(cart);

    if( cart.length===0){
        return(
            <ClearDiv>
                <h3>No item there</h3>
                <NavLink to="/product">
                <Button>Continue Shopping</Button>
            </NavLink>
            </ClearDiv>
        )
    }
    return(
        <Wrapper>
            <div className="coloums">
                <p className="p">Item</p>
                <p className="price p" >price</p>
                <p className="p">Quantity</p>
                <p className="p">Subtotal</p>
                <p className="p">Remove</p>
            </div>
            <hr />


            <div className="cart-item">
                {
                    cart.map((curElem)=>{
                        return(
                            
                            <CartItem  key={curElem.id} {...curElem} />
                            
                        )
                    })
                }
            </div>
            <hr />
            <div className="button-clear">

            <NavLink to="/product">
                <Button>Continue Shopping</Button>
            </NavLink>
            <Button className="btn-clear" onClick={clearCart}>Clear Item</Button>
            </div>

            <div className="total-container">
                <div className="total-data">
                    <p>Subtotal:</p>
                    <Format price={ total_price}/>
                </div>
                <div className="total-data">
                    <p>Tax:</p>
                    <Format price={ total_price*tax}/>
                </div>
                <hr />
                <div className="total-data">
                    <p>Total Price:</p>
                    <Format price={ total_price + total_price*tax}/>
                </div>
            </div>
        </Wrapper>
    )
}
const ClearDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding-top: 5rem;

    h3{
        font-size: 1.4vw;
        font-weight: 400;
    }
`
const Wrapper = styled.section`
    
    max-width: 60vw;
    min-height: 50vh;
    position: relative;
    margin: 5vw 18vw;


    .coloums{
        display: flex;
        justify-content: center;
        align-items: flex-start;
        
       

    }
    .p{
        font-size: 1vw;
        font-weight: 400;
        letter-spacing: 2px;
        width: 15rem;
    }

    img{
        height: 2vw;
        width: 3vw;
    }

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

    .container{
        display: flex;
        justify-content:center;
        align-items: center;
        

        /* background-color: #d11818; */


    }

    .items{
        display: flex;
        gap: 0.7rem;
        justify-content: flex-start;
        align-items: center;
        width: 15rem;
    }

    .name-color{
        display: flex;
        flex-direction: column;
        padding-top: 1.4rem;
        
        
    }

    .quantity{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 5rem;
        height: 2rem;
        
        gap: 1rem;
        width: 15rem;
        
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

    .quan-box h4{
        display: none;
    }

    .price{
        width: 15rem;
    }

    .subtotal{
        width: 15rem;
    }

    .remove{
        width: 15rem;
        font-size: 1.4vw;
        color: #8b1010;
       padding-left: 2rem;
       cursor: pointer;
    }
    .button-clear{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 20px;
        padding-right: 9rem;
    }

    .btn-clear{
        background-color: #a31414;
    }

    .total-container{
        margin-left: 35vw;
        padding-top: 5rem;
        max-width: 15rem;
    }
    .total-data{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.3rem 0;
        font-size: 1vw;
    }
`