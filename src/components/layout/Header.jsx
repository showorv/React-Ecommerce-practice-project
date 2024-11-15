import { NavLink } from "react-router-dom"
import { Nav } from "./Nav"
import styled from "styled-components"

export const Header = ()=>{

    return(
       <Headerr>
        <NavLink to="/">
        <IMG src="images/logo.png" alt="logo" />
        </NavLink>
        <Nav />
        </Headerr>
        
    )
}

const Headerr = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:0 18.5vh;
    padding-top: 10px;
    background-color: #020222a7;
    max-width: 100%;
`

const IMG = styled.img`
    height: 6vh;
    width: 8vh;
`