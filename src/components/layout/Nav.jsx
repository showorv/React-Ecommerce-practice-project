import { NavLink } from "react-router-dom"
import styled from "styled-components"
import { CiShoppingCart } from "react-icons/ci";
import { useCartContext } from "./Context/CartContext";
// import { IoMenu } from "react-icons/io5";
// import { IoCloseSharp } from "react-icons/io5";

export const Nav = ()=>{
    const { total_item } = useCartContext();
    const active =({isActive})=>{
        return{
            color: isActive?"black" : "white"
            
    }
    }
    return(
        <Navv >
           
                <ul className="nav-list">
                    <li>
                        <NavLink to="/" style={active} className="nav-link">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" style={active} className="nav-link">
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/product" style={active} className="nav-link">
                            Product
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" style={active} className="nav-link">
                           Contact
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/cart" style={active} className="cart-toly">
                        <CiShoppingCart className="cart-icon"/>
                        <span className="cart-total">{total_item}</span>
                        </NavLink>
                    </li>
                   
                </ul>

                {/* <div className="mobile-nav">
                <IoMenu  className="mobile-icon menu"/>
                <IoCloseSharp className="mobile icon close"/>

                </div> */}
                
        </Navv>
    )
}

const Navv=styled.nav`
 
    display: flex;
    justify-content:flex-start;
    align-items: center;
    
    gap: 1rem;

    
  
`