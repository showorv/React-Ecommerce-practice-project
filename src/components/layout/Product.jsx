import { NavLink } from "react-router-dom";
import { Format } from "./helper/PriceConvert";

export const Product=(curElem)=>{

    const { id, name, image, category , price } = curElem;


    return(
        <NavLink to={`/singleproduct/${id}`}>
            <div className="card">
                <figure>
                    <img src={image} alt={name}/>
                    <figcaption className="catagory">{category}</figcaption>
                </figure>

                <div className="card-data">
                    <h4 className="product-name">{name}</h4>
                    <h3 className="proudct-price">{<Format price={price}/>}</h3>
                </div>
            </div>
        </NavLink>
    )
}