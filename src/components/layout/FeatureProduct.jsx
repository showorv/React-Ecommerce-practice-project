import styled from "styled-components"
import { useApiContext } from "./Context/ProductContext"
import { Product } from "./Product";


export const Featureproduct = ()=>{

    const { isLoading , featureProducts} = useApiContext();
    console.log(featureProducts);

    if( isLoading){
        return (
            <div>isloading</div>
        )
    }

    return(
        <Wrapper>
           <span>Check Now</span>
           <h3 className="h3">Our Feature Products</h3>

           <div className="container">
            {
                featureProducts.map((curElem)=>{
                  return  <Product key={curElem.id}  {...curElem}/>   //...curelem means data te ja ase sob get korbe
                })
            }
           </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    padding: 2rem 0;
    background-color: rgb(197, 197, 197);
    max-width: 100%;
    min-height: 40vh;
    position: relative;

    span{
        font-size: 1vw;
        color: #4f4fc4;
        margin: 0 18.5vw;
    }

    .h3{
        
        text-transform: uppercase;
        font-size:1.5vw;
        font-weight: 700;
        margin: 0 18.5vw;
        font-family: Arial, Helvetica, sans-serif;
    }

    .container{
        display: flex;
        
        align-items: center;
        gap: 3rem;
        margin: 4rem 18.5vw;

        

    }
    .card{
        max-width: 21rem;
        max-height: 19rem;
        background-color: #fff;

    }

   
    img{
        width: 20rem;
        height: 15rem;
        position: relative;
        transition: 0ms.2s all ease-in;

    }

    img:hover{
        opacity: 50%;

    }

    .catagory{
        position: absolute;
        top: 37%;
        
        color: black;
        padding: 0.2rem 1rem;
        background-color: #fff;
        text-align: center;
        border-radius: 20px;
    }

    .card-data{
        display: flex;
        justify-content: space-between;
        align-items: center;
       padding: 0.4rem 0.4rem;

    }

    .product-name ,
    .proudct-price{
        color: black;
        font-size: 1vw;
        font-weight: 400;
    }
`