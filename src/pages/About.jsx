import { useEffect } from "react";
import { useGlobalContext } from "../components/layout/Context"
import { Herosection } from "../components/layout/Herosection"

export const About = ()=>{

    const { UpdateAbout}= useGlobalContext();

    useEffect(()=>{
        UpdateAbout();
    },[])
    return(
        <>
       <Herosection />
        </>
    )
}