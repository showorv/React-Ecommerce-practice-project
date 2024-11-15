import styled from "styled-components"
import { useGlobalContext } from "./Context"
import { Button } from "./Button";

export const Herosection = ()=>{

    const {name, image} = useGlobalContext();

    return(
        <Wrapper>
            <div className="container">
                <div className="left-box">
                    <span> Welcome To,</span>
                    <h1>{name}</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptas maiores accusantium perferendis voluptatibus molestiae repellendus dolorem ullam delectus nemo, accusamus nesciunt fuga laudantium vero et, ipsam eaque atque explicabo?</p>
                   <Button>Explore</Button>
                </div>

                <div className="right-box">
                    <figure>
                        <img src={image} alt="images" className="image-style" />
                    </figure>
                </div>
            </div>
            
        </Wrapper>
    )
}

const Wrapper = styled.section`
    
    min-height: 50vh;
    max-width: 100%;
    position: relative;

    .container{
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        max-width: 70%;
        gap: 5rem;
        padding: 7rem 0;
    }

    .left-box{
       max-width: 50rem;

    }
    .left-box span{
        font-size: 1.3vw;
        font-weight: 300;
        word-spacing: 2px;
        letter-spacing: 2px;
        margin-bottom: 7px;
    }
    .left-box h1{
        font-size: 2.7vw;
        font-weight: 800;
        word-spacing: 2px;
        letter-spacing: 1px;
        
    }
    .left-box p{
        font-size: 0%.7;
        font-weight: 300;
        width: 30rem;
        
        letter-spacing: 1px;
        margin-bottom: 1rem;
        
    }
    .right-box img{
        width: 40vh;
        height: 40vh;
    }

    Button:hover{
        background-color: #4d58f8;
    }
`