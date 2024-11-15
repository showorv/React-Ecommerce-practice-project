import React,{  useContext, useEffect, useReducer } from "react";
import { useApiContext } from "./ProductContext";
import {reducer} from "../Reducer/FilterReducer"

const FilterContext = React.createContext();

const initialValue = {

    filter_products: [],
    main_products:[],
    grid_view: true,
    sorting_view: "highest",

    filters: {
        text: "",
        category: "all",
        company: "all",
        colors: "all",
        maxPrice:0,
        price:0,
        minPrice:0
    },

    
}

const FilterContextProvider = ({children})=>{

    const [state, dispatch] = useReducer( reducer, initialValue);
    const { product} = useApiContext();
    console.log(product);

    useEffect(()=>{

        dispatch({
            type: "PRODUCTS_API",
            payload: product
        })
    },[product]);

    const setGridView = ()=>{
        dispatch(
            {
                type: "GRID_VIEW"
            }
        )
    }
    const setListView = ()=>{
        dispatch(
            {
                type: "LIST_VIEW"
            }
        )
    }


    const sorting= (event)=>{
        let userChoice = event.target.value;
        dispatch(
            {
                
                type: "GET_SORT",
                payload: userChoice,
            }
        )
    }


    const updateFilter =(event)=>{

        let name = event.target.name;
        let value = event.target.value;  //ekhane sob kisur value get hcche. search, category, company,colors

        return dispatch({
            type: "GET_FILTERING",
            payload: { name, value}
        })
    }

    //clear filter

    const clearFilters=()=>{
        dispatch({
            type: "CLEAR_FILTERS"
        })
    }

    useEffect(()=>{

        dispatch({
            type: "FILTER_UPDATE"
        })
        dispatch({
            type: "GET_SORT_VALUE",
            payload: product
        })
    },[product, state.sorting_view, state.filters]);

return(
    <FilterContext.Provider value={{...state, setGridView,setListView, sorting, updateFilter,clearFilters}}>
    {children}
    </FilterContext.Provider>
)
   
}


const useFilterContext = ()=>{

  return  useContext(FilterContext);
}

export{ FilterContext, FilterContextProvider, useFilterContext}