import { useEffect } from "react";
import { useParams } from "react-router-dom"
import { useApiContext } from "./Context/ProductContext";
import styled from "styled-components";
import { PageNavi } from "./PageNavigation";
import { Format } from "./helper/PriceConvert";
import { MyImg } from "./MyImg";
import { TbTruckDelivery } from "react-icons/tb";
import { RiFindReplaceFill } from "react-icons/ri";
import { Stars } from "./Stars";
import { AddToCart } from "./AddToCart";
import { CartTotal } from "./CartTotal";

//create API for singleproduct

const API = "https://api.pujakaitem.com/api/products"

export const SingleProduct = ()=>{

    //get all from context
    const{ getSingleProduct, isSingleLoading, singleProduct} = useApiContext();
    console.log(singleProduct);
    

    //create params to get id
    const { id} = useParams();
    // console.log(id);

    useEffect(()=>{
        getSingleProduct(`${API}?id=${id}`);
    },[])

    //destructure all for display
    const { id: alias, name , image,price,reviews, company, description, category, stock,stars} = singleProduct;


    if(isSingleLoading){
        return <div>...Loading</div>
    }
    return(<>
        <PageNavi tittle={name}/>
       <Wrapper>
        

        <div className="container">
            <div className="image-side">
           <MyImg img={image}/>
            </div>

            <div className="contain-side">
                <h3 className="name">{name}</h3>
                <Stars stars={stars} review = {reviews}/>
                
                <p className="original-price">
                    MRP:
                    <del>
                   <span className="span"> <Format price={price+ 40000} /></span>
                    </del>
                </p>
                <p className="offerPrice">
                    Deal Price: 
                     <Format price={ price}/>
                </p>
                <p className="description">
                    {description}
                </p>

                <div className="product-del">
               <div className="box">
                <div className="truck">
                <TbTruckDelivery />
                </div>
              
                <h5>Free Delivery</h5>
               </div>
               
               <div className="box">
                <div className="truck">
                <RiFindReplaceFill />
                </div>
               
                <h5>30 days Replacement</h5>
               </div>
                </div>

                <div className="stock-info">
                    <p>Availble: <span>{stock > 0 ? "IN STOCK" : "OUT OF STOCK"}</span></p>
                </div>
                <p className="id">ID: {id}</p>
                <p className="company">Brand: <span>{company}</span></p>

                { stock>0 && <AddToCart product = {singleProduct}/>}

                
            </div>
        </div>
         
       </Wrapper>
       </>
    )
}

const Wrapper = styled.section`
    
    max-width: 100%;
    min-height: 100vh;
    position: relative;
    padding: 10rem 18.5vw;
    
    .container{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 6rem;

    }

    .contain-side{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 1rem;
    }

    span{
        font-size: 0%.8;
        font-weight: bold;
    }

    .product-del{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 2rem;
        background-color: #e4e4e4;
        padding: 0.3rem 2rem;
        
    }

    .truck,
    .rep{
        width: 1.5vw;
        height: 1.5vw;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 20px;
    }

    h5{
        font-size: 1vw;
        font-weight: 400;
        margin-top: 0.5rem;
    }

    .description{
        width: 30rem;
    }

    .company{
        border-bottom: 2px solid black;
        width: 30rem;
        padding-bottom: 1rem;
    }

    .p{
        text-decoration: line-through;
    }

    .span{
        text-decoration: line-through;
        margin-left: 0.5rem;
    }

`