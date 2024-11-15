import React from 'react'

export const reducer = (state,action) => {
    if( action.type==="ADD_TO_CART"){
       let { id,colors,amount, product} = action.payload;

        // console.log(product);

        let cartDetails;

        //find existing product. if existing product find then only increase amount not add as a new product

        let existingProduct = state.cart.find((curElem)=> curElem.id === id+colors);
        // console.log(existingProduct);

        if(existingProduct){

            let updatedProudct = state.cart.map((curElem)=>{
                if( curElem.id===id+colors){
                    let newamount = curElem.amount+amount;

                    if( newamount >= curElem.max){
                       newamount= curElem.max
                    }

                    return{
                        ...curElem,
                        amount:newamount
                    }
                }else{
                    return { ...curElem }; // if we dont spreed there then the begining product will be shown as NaN .
                }
                
            })

            return{
                ...state,
                cart: updatedProudct

            }
        }else{

            cartDetails = {
                id: id+colors,
                colors,
                name: product.name,
                image: product.image[0].url,
                amount,
                price:product.price,
                max: product.stock
            }
            return{
                ...state,
                cart: [...state.cart, cartDetails]
            }
       
        }

    }


    if( action.type==="REMOVE_CART"){

        let updatedCart = state.cart.filter((curElem)=>{
            return curElem.id !== action.payload
        })
        return{
            ...state,
            cart: updatedCart
        }
    }

    if(action.type==="CLEAR_CART"){

        return{
            ...state,
            cart: []
        }
    }


    if( action.type==="DECREMENT"){

        let updatedAmount = state.cart.map((curElem)=>{

            if( curElem.id === action.payload){
                let decrement = curElem.amount - 1;

                if( decrement < 1){
                    decrement = 1;
                }
                return{
                    ...curElem,
                    amount: decrement
                }
            }else{
                return {...curElem};
            }
        })

        return{
            ...state,
            cart: updatedAmount
        }
    }
    if( action.type==="INCREMENT"){

        let updatedAmount = state.cart.map((curElem)=>{

            if( curElem.id === action.payload){
                let increment = curElem.amount + 1;

                if( increment > curElem.max){
                    increment = curElem.max;
                }
                return{
                    ...curElem,
                    amount: increment
                }
            }else{
                return {...curElem};
            }
        })

        return{
            ...state,
            cart: updatedAmount
        }
    }

    // adding cart total item in navbar

    if(action.type==="CART_TOTAL"){

        let cartItem = state.cart.reduce((accumal, curVal)=>{
            let {amount} = curVal; // reduce use for sum all amount in cart. curElem/curVal er jnne amount destructure kora hoise.

            accumal = accumal+ amount;
            return accumal;
        },0)

        return{
            ...state,
            total_item: cartItem
        }
    }


    if( action.type==="CART_TOTAL_PRICE"){
        let cartTotal = state.cart.reduce((accumal, curElem)=>{

            let { price, amount} = curElem;

            accumal = accumal+ price*amount;

            return accumal;
        },0)

        return{
            ...state,
            total_price: cartTotal
        }
    }
    return state;
  
}
