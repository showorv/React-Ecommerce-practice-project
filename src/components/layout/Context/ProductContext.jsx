import axios from "axios";
import React,{ useContext, useEffect, useReducer } from "react";
import reducer from "../Reducer/ProductReducer"

const ApiContext = React.createContext();

const initialvalue ={

    isLoading: false,
    isError: false,
    product: [],
    featureProducts: [],
    isSingleLoading: false,
    singleProduct:{}

}

const ApiProvider = ({children})=>{


    const [ state, dispatch] = useReducer(reducer , initialvalue)

     const API = "https://api.pujakaitem.com/api/products";

    const getProducts = async(url)=>{

        dispatch( { type: "API_LOADING"})

        try {
            const res=await axios.get(url);
            // console.log(res);
            const products = await res.data;
            // console.log(products);
            
            dispatch( {
                type: "API_DATA",
                payload: products
            })
        } catch (error) {
            dispatch({
                type: "API_ERROR"
            })
        }

       
    }

    // for singleProduct

    const getSingleProduct =async (url)=>{
        dispatch({
            type: "SET_SINGLE_LOADING"
        })
        try {
           
            const res= await axios.get(url);
            const singleProduct = await res.data;

            dispatch({
                type: "SET_SINGLE_DATA",
                payload: singleProduct
            })
        } catch (error) {
            dispatch({
                type: "SET_SINGLE_ERROR"
            })
        }
    }
    useEffect(()=>{
        getProducts(API)
    },[])

    return(
        <ApiContext.Provider value={{...state , getSingleProduct}}>{children}</ApiContext.Provider>
    )
}

const useApiContext = ()=>{
   return useContext(ApiContext)
}

export { ApiContext, ApiProvider , useApiContext}