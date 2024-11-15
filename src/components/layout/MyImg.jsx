import { useState } from "react";
import styled from "styled-components"

export const MyImg = ({img= [{url:""}]})=>{  //url:"" because of image are in array.
console.log(img);

    //use state for change image

    const [ mainImage , setMainImage] = useState(img[0]);

    return(
      <Wrapper>
        <div className="left-side">
    
                {
                img.map((curElem)=>{
                    return(
                    <figure key={curElem.id}>
                        <img src={curElem.url} alt={curElem.filename}
                         className="imageleft"

                         onClick={()=> setMainImage(curElem)}
                        />

                    </figure>
                    )
                })
            }
               
        </div>

        <div className="right-side">
            <img src={mainImage.url} alt={mainImage.filename} />
        </div>
      </Wrapper>
    )
}

const Wrapper = styled.div`
    
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1rem;

    .imageleft{
        width: 7rem;
        height: 7rem;
        cursor: pointer;
    }

    .right-side img{
        width: 15rem;
        height: 13rem;
        margin-top: 8rem;
        
    }
`