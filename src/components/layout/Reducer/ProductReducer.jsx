const ProductReducer = ( state, action)=>{

    // if(action.type === " API_LOADING"){
    //     return{
    //         ...state,
    //         isLoading: true
    //     }
    // }

    //switch use korbo karon onk gula condition

    switch (action.type) {
        case "API_LOADING":
            
            return{
                ...state,
                isLoading: true
            }

        case "API_DATA":
            const featureData = action.payload.filter((curElem)=>{
                return curElem.featured === true;  // featureProducts e shudhu matro j products gular featured true segula jabe
            })
             
            return{
                ...state,
                isLoading : false,
                product: action.payload,
                featureProducts: featureData
            }

        case "API_ERROR":

        return{
            ...state,
            isLoading: false,
            isError: true

        }
        case "SET_SINGLE_LOADING":
            
        return{
            ...state,
            isSingleLoading: true
        }

        case "SET_SINGLE_DATA":
       
             
            return{
                ...state,
                isSingleLoading : false,
                singleProduct: action.payload,
                
            }

        case "SET_SINGLE_ERROR":

            return{
                ...state,
                isSingleLoading: false,
                isError: true
    
            }

        default:
            break;
    }

return state;
}

export default ProductReducer;