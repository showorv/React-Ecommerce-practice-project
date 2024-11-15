import styled from "styled-components"
import { GrDeliver } from "react-icons/gr";
import { AiOutlineDeliveredProcedure } from "react-icons/ai";
import { GiDeliveryDrone } from "react-icons/gi";
import { CiDeliveryTruck } from "react-icons/ci";



export const Services=()=>{

    return(
        <Wrapper>
            <h1>Our Services</h1>
            <div className="contain">

           
            <div className="box-1">
                <div className="i">
                <GrDeliver className="icon"/>
                </div>
            
            <h2>Fast Delivery</h2>
            </div>
            <div className="box-2">
                <div className="col-1">
                    <div className="i">
                    <AiOutlineDeliveredProcedure  className="icon"/>
                    </div>
                
                <h2>Air Services</h2>
                </div>
                <div className="col-2">
                    <div className="i">
                    <GiDeliveryDrone  className="icon"/>
                    </div>
                
                <h2>Drone Services</h2>
                </div>
            </div>
            <div className="box-3">
                <div className="i">
                <CiDeliveryTruck  className="icon"/>
                </div>
           
            <h2>Truck Services</h2>
            </div>

            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`


    max-width: 100%;
    min-height: 40vh;
    margin: 0 18.5vw;
    
    h1{
        text-transform: uppercase;
        font-size:1.5vw;
        font-weight: 700;
       
        font-family: Arial, Helvetica, sans-serif;
        text-decoration: underline;
        margin-bottom: 2rem;
        margin-top: 2rem;
    }

.contain{

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
}

    .box-1,
    .box-3{
        background-color: rgb(197, 197, 197);;
        height: 15vw;
        width: 15vw;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;

    }

    .box-2{
       
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 3rem;
    }
    .col-1,
    .col-2{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 15vw;
        height: 6vw;
        background: rgb(197, 197, 197);
        border-radius: 10px;
        gap: 1rem;
    }

    .i{
        width: 1.8vw;
        height: 1.8vw;
        background-color: white;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;

    }
    .icon{
        color: #42429c;
        font-size: 1vw;
        font-weight: bold;
    }
    h2{
        font-size: 1vw;
        font-weight: 400;

    }
`