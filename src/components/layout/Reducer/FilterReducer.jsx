
export const reducer = ( state, action)=>{

    switch(action.type){

        case "PRODUCTS_API":

        let priceArr = action.payload.map((curElem)=> curElem.price);
        console.log(priceArr);

        //find the maxpirce
        //firstway ->>>>> apply() method 

        // console.log( Math.max.apply( null, priceArr));

        //reduce() method

        let maxPrice = priceArr.reduce(( initialVal, curVal)=> Math.max( initialVal, curVal), 0)

        console.log(maxPrice);

        // spread operator ->>>

        // console.log(Math.max( ...priceArr));

            return{
                ...state,
                filter_products: [...action.payload],
                main_products: [...action.payload],
                filters: { ...state.filters, maxPrice, price:maxPrice}
            }
        
        case "GRID_VIEW":
            return{
                ...state,
                grid_view: true
            }    

        case "LIST_VIEW":
            return{
                ...state,
                grid_view: false
            }    

        case "GET_SORT":

        // let select = document.getElementById("sort");
        // let getValue = select.options[ select.selectedIndex].value
        // options is a method 
        // console.log(getValue);
            return{
                ...state,
                sorting_view: action.payload
            }
        

        case "GET_SORT_VALUE":

        let newSort;

        const { filter_products, sorting_view}= state;
        
        let tempSortValue = [...filter_products ]  //usually action.payload er copy newa hoise actual value na


        const sortingProducts = (a,b)=>{

            if( sorting_view === "lowest"){
                return a.price - b.price
            }

            if( sorting_view === "highest"){
                return b.price - a.price
            }

            if( sorting_view === "a-z"){
                return a.name.localeCompare( b.name)
            }

            if( sorting_view === "z-a"){
                return b.name.localeCompare(a.name)
            }
        }

        newSort = tempSortValue.sort( sortingProducts)

            return{

            ...state,

            filter_products: newSort,
        }


        case "GET_FILTERING":

         const { name, value} = action.payload


        return{
            ...state,
            filters: {
                ...state.filters,
                [name]: value
            }
        }


        case "FILTER_UPDATE":

        let {  main_products} = state;

        let tempProduct = [...main_products];

        const { text , category,company, colors, price} = state.filters;

        if( text){
            tempProduct = tempProduct.filter((curElem)=>{

              return   curElem.name.toLowerCase().includes(text);
    
            })
        }

       if(category !=="all"){

        tempProduct = tempProduct.filter((curElem)=>{
           return curElem.category === category;
        })
       }
       
      
       if(company !=="all"){

        tempProduct = tempProduct.filter((curElem)=>{
            return curElem.company === company;
        })
       }
      
       if(colors !=="all"){
        tempProduct = tempProduct.filter((curElem)=>{
            return curElem.colors.includes(colors)
        })
       }

       if( price){
        tempProduct = tempProduct.filter((curElem)=>{
          return  curElem.price <= price
        } )
       }

        return{
            ...state,
            filter_products: tempProduct
        }

        case "CLEAR_FILTERS":

        return{
            ...state,
            filters:{
                ...state.filters,
                text: "",
                category: "all",
                company: "all",
                colors: "all",
                maxPrice:state.filters.maxPrice,
                price: state.filters.maxPrice,
                minPrice:0
            }
        }
        default:
            break
    }
    return state;
}