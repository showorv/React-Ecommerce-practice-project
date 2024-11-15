import { NavLink } from "react-router-dom"
import styled from "styled-components"

export const PageNavi = ({tittle})=>{

    return(
        <Wrapper>
            
            <NavLink to="/" className="Nav">Home</NavLink > / {tittle}
        </Wrapper>
    )
}

const Wrapper = styled.header`
    font-size: 1.5vw;
    padding: 0.5rem 5rem;
    background-color: #c4bebe;
    max-width: 1005;

    .Nav{
        color: #4547b3;
    }

    .Nav:hover{
        color: gray;
    }
    
`