import React from 'react'
import styled from 'styled-components'
import { MdOutlineMenu } from "react-icons/md";
import { CiMenuKebab } from "react-icons/ci";
import { useFilterContext } from './Context/FilterContext';


export const Sort = () => {

  const { grid_view, setGridView, setListView ,filter_products,sorting } = useFilterContext()
  return (
    <Wrapper >

      <div className="view-col">
        <button className={ grid_view? " active btn" : " btn"}
        onClick={setGridView}><MdOutlineMenu className='ICON'/></button>
        <button className={ !grid_view? " active btn" : " btn"}
        onClick={setListView }><CiMenuKebab className='ICON'/></button>
      </div>


      <div className="quantity-data">
        <p>{`${filter_products.length} Proudcts Available`}</p>
      </div>


      <div className="drop-down">
        <form action="#">
          <label htmlFor="sort"></label>
          <select name="sort" 
          id="sort"
          onClick={sorting}
          
          > {/*this id = htmlfor */}
            <option value="highest"> Price (highest)</option>
            <option value="lowest"> Price (lowest)</option>
            
            <option value="a-z"> Price (a-z)</option>
            <option value="z-a"> Price (z-a)</option>
            
            
            </select> 

        </form>
      </div>
    </Wrapper>
  )
}


const Wrapper = styled.div`
  width:68rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5rem;
  border: 1px solid black;
  padding: 1rem 0.5rem;

  
  .view-col{
    display: flex;
    gap: 0.7rem;
  }

  .btn{
    border: none;
    cursor: pointer;
    padding: 0.2rem 0.2rem;
    text-align: center;
    
  }

  .active{
    background-color: black;
    color: white;
  }
  .ICON{
    font-size: 0%.8;
  }
  
`