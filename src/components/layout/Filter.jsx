import React from 'react'
import styled from 'styled-components'
import { useFilterContext } from './Context/FilterContext'
import { IoSearchSharp } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";
import { Format } from './helper/PriceConvert';
import { Button } from './Button';

export const Filter = () => {

  const { updateFilter, 
    filters:{text,category, company, colors, price, maxPrice, minPrice},
    main_products, clearFilters
    
  } = useFilterContext();


  //create unique function for filtering

     const uniqueFilter = (data, property)=>{

      let newVal = data.map((curElem)=>{
         return curElem[property];   // eta korar cause hcche curelem e jto catagpory ase sob arrayr mddhe store thakbe. amra direct curelem.catagory o nite partam kintu unique funtion newai r o filter add korbo dekhe direct catagory use kori nai
      })

      if( property === "colors"){
        //1 way

        // return (newVal = ["All", ...new Set([].concat(...newVal))])

        //2nd way

       newVal = newVal.flat() // return use kora jbe na. korle sobgula value alada vabe nibe.
      }
      return (newVal = ["All",...new Set(newVal)]);
      
     }
    
     // get catagory 
     const catagoryData = uniqueFilter( main_products, "category")
     console.log(catagoryData);

     const companyData = uniqueFilter( main_products, "company")
     console.log(companyData);

     const colorsData = uniqueFilter( main_products , "colors")
     console.log(colorsData);
     
  return (
    <Wrapper>

      <div className="filter-search">
        <form onSubmit ={(e)=> e.preventDefault()}>
          <input type="text" name='text' value={text}
           onChange={updateFilter} placeholder='Search Product'
          />
          <IoSearchSharp className='icon'/>
        </form>
      </div>


      <div className="category-filter">
        <h2>Catgory</h2>
        <div className='cata'>
          {
            catagoryData.map((curElem,index)=>{
              return (
              <button key={index}
              type='button'
              name='category'
              value={curElem}
              onClick={updateFilter}
              className={ curElem===category ? "active cat-but": "cat-but"}
              >
                {curElem}
                
              </button>
              )
            })
          }
        </div>
      </div>


      <div className="company-filter">
        <h2>Company</h2>
 
         <form action="#">
           <select name="company" id="company" className='company-list'
           onChange={updateFilter}>

            {
              companyData.map((curElem)=>{
                return(
                  <option value={curElem} name="company"
                >
                    {curElem}
                  </option>
                )
              })
            }
           </select>
        </form>

      </div>


      <div className="color-filter">
        <h2>Colors</h2>

        <div className="color-style">
          {
            colorsData.map((curCol, index)=>{

              //for showing all
              if (curCol === "all") {
                return (
                  <button
                    key={index}
                    type="button"
                    value={curCol}
                    name="colors"
                    className="color-all--style"
                    onClick={updateFilter}>
                    all
                  </button>
                );
              }
              return(
                <button key={index}
                type='button'
                name='colors'
                value={curCol}
                style={{backgroundColor:curCol}}
                className={ colors === curCol ? "btnStyle actives" : "btnStyle"} 
                onClick={updateFilter}
                >{ colors=== curCol? <FaCheck className='checkStyle'/> : curCol}
                </button>
              )
            })
          }
        </div>
      </div>
      
      <div className="range-filter">
        <h2>Price</h2>

        <p className='range-p'>Max Price: <Format price={price}/> </p>

        <input type="range" name='price' max={maxPrice} min={minPrice} value={price} onChange={updateFilter}/>
      </div>

      <div className="clear-filter">
        <Button onClick={clearFilters}>Clear Filters</Button>
      </div>
    </Wrapper>
  )
}


const Wrapper = styled.div`
  
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  margin-top: 2rem;


  .filter-search{
    width: 15rem;
    
  }

  input{
    width: 12rem;
    height: 1.9rem;
    padding: 0.5rem 0.7rem;
    font-size: 0.8vw;
    position: relative;
  }

  .icon{
    position: absolute;
    top: 3%;
    left: 70%;
    font-size: 0.9vw;
    cursor: pointer;
    text-align: center;
  }

  h2{
    font-size: 1vw;
    text-decoration: underline;

  }
  .category-filter{
    padding-top: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 0.6rem;
  }

  .cata{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1rem;
  }

  .cat-but{
    border: none;
    
    background-color: transparent;
    color: #9b9797;

  }
  .cat-but:hover{
    cursor: pointer;
    text-decoration: underline;

  }

  .active{
    color: black;
  }

  .company-filter{
    padding-top: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 0.6rem;
  }

  .company-list{
    color: #9b9797;
  }

  .color-filter{
    padding-top: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 0.6rem;
  }

  .color-style{
    display: flex;
    
    justify-content: flex-start;
    align-items: flex-start;
    gap: 0.2rem;
  }
  .color-all--style{
    background-color: transparent;
    color: black;
    
  }
  .btnStyle{
    width: 1vw;
    height: 1vw;
    border-radius: 50%;
    border: none;
    outline: none;
    color: transparent;
    opacity: 0.5;
    cursor: pointer;
   
  }
  

  .actives{
    opacity: 1;
  }
  .checkStyle{
        color: white;
        text-align: center;
        padding: 2px 2px;
    }

    .range-filter{
      padding-top: 15px;
    }
    .range-p{
      margin-top: 10px;
    }
`
