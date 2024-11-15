import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "../Reducer/CartReducer";


const CartContext = createContext();

const localStorageItem = ()=>{

    let storage = localStorage.getItem("productItem");
    return storage? JSON.parse(storage) : [];
}



const CartProvider = ({children})=>{
    const initialVal ={
        // cart:[],
        cart: localStorageItem() || [],
        total_item: "",
        total_price: "",
        tax: 0.05
    }
    
    const [ state, dispatch] = useReducer( reducer, initialVal)

    const addToCart =(id, colors,amount, product)=>{
        dispatch({
            type: "ADD_TO_CART",
            payload: {
                id, colors,amount, product
            }
        })
    }

    //increment decrement

    const quantityDecrease= (id)=>{
        dispatch({
            type: "DECREMENT",
            payload: id
        })
    }
    const quantityIncrease= (id)=>{
        dispatch({
            type: "INCREMENT",
            payload: id
        })
    }

//remove cart
    const removeCart = (id)=>{
        dispatch({
            type: "REMOVE_CART",
            payload: id
        })
    }
    //clear the cart

    const clearCart = ()=>{
        dispatch({
            type: "CLEAR_CART"
        })
    }

    //to add in localStorage

    useEffect(()=>{
        dispatch({
            type: "CART_TOTAL"
        })
        dispatch(
            {
                type: "CART_TOTAL_PRICE"
            }
        )
        localStorage.setItem("productItem", JSON.stringify(state.cart))
    },[state.cart]) ;
    // localstorage string format e thake, jehetu cart ekta array so string e convert korte hbe + dependencies e state.cart dite hbe nahole add hbe na karone useeffect first page load hole run korbe

    return (<CartContext.Provider value={{...state,addToCart,removeCart,clearCart,quantityIncrease,quantityDecrease}}>{children}</CartContext.Provider>
    )
}

const useCartContext =()=>{
    return useContext(CartContext)
}
export{ CartContext,useCartContext, CartProvider}