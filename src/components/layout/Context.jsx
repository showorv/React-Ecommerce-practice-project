import React, { useContext, useReducer } from "react";
import { reducer } from "./Reducer";

const Context = React.createContext();

const AppProvider = ({children})=>{

const initial={
    name: "",
    image: ""
}

const [ state, dispatch ] =  useReducer( reducer, initial);

 const UpdateHome = ()=>{

    dispatch(
        {
            type: "HOME_UPDATE",
            payload: {
                name: "E-SHOP",
                image: "/images/p1.jpg  "
            }
        }
    )
 }
 const UpdateAbout = ()=>{

    dispatch(
        {
            type: "ABOUT_UPDATE",
            payload: {
                name: "About Us",
                image: "/images/p1.jpg "
            }
        }
    )
 }



return(
    <Context.Provider value={{ ...state , UpdateHome, UpdateAbout}}>
        {children}
    </Context.Provider>
)
}
const useGlobalContext = ()=>{
    return useContext(Context);
 }

export { Context, AppProvider, useGlobalContext }