import styled from "styled-components"

export const Contact = ()=>{

    return(
        <Wrapper>
            <h2 className="Heading">Feel Free to contact us</h2>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233667.49930141334!2d90.25487247764767!3d23.781067239454273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1726482928639!5m2!1sen!2sbd" width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

            <div className="contact">
                <form action="https://formspree.io/f/xqazowwo" method="POST" className="form">
                    <input type="text" name="username" autoComplete="off" required placeholder="Enter your name"  />
                    <input type="text" name="email" autoComplete="off" required placeholder="Enter your mail"/>

                    <textarea name="message" cols="30" rows="10" ></textarea>
                    <input type="submit" value="SEND" className="button" />
                </form>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    
    .Heading{
        text-align: center;
        margin: 2rem 0;
        font-size: 1.2vw;
        font-weight: 400;
    }

    .contact{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 2rem;
    }
    form{
        display: flex;
        flex-direction: column;
        gap: 1rem;

    }

    input{
        width: 20rem;
        height: 2rem;
        padding: 0px 10px;
       

    }

    input[ type="submit"]{
        width: 5rem;
        background-color: #56569c;
        color: white;
        font-size: 0%.8;
        font-weight: 400;
        border: none;
        margin-left: 7rem;
        cursor: pointer;
    }
    input[ type="submit"]:hover{
        background-color: #3434cc;
        transition: 0.5 all ease;
        transform: scale(1.2);
    }
`