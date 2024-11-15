import styled from "styled-components"

export const Trusted = ()=>{

    return(
        <Wrapper >
            <h2>Trusted By 100+ Companies</h2>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    max-width: 100%;
    height: 30vh;
    background-color: rgb(197, 197, 197);;
    margin: 2rem 0;

    h2{
        text-align: center;
        padding-top: 2rem;
        font-size: 1.5vw;
        font-weight: 400;
        
    }
`