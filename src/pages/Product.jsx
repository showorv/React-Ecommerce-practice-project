import styled from "styled-components"
import {Filter} from "../components/layout/Filter"
import {Sort} from "../components/layout/Sort"
import {ProductList} from "../components/layout/ProductList"
import { useFilterContext } from "../components/layout/Context/FilterContext"
export const Product = ()=>{


   
    
    return(
        <Wrapper>
           <div className="filter-side">
            <Filter />
           </div>

           <div className="product-side">
            <div className="upper-list">
                <Sort />
            </div>

            <div className="product-list">
                <ProductList />
            </div>
           </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 6rem;
    margin: 2rem 19rem;
    


    .product-side{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 1rem;
    }

`