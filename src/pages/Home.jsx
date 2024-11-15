import { useEffect } from "react";
import { useGlobalContext } from "../components/layout/Context"
import { Herosection } from "../components/layout/Herosection"
import { Services } from "../components/layout/Services";
import { Trusted } from "../components/layout/Trusted";
import { Featureproduct } from "../components/layout/FeatureProduct";

export const Home = ()=>{

    const { UpdateHome } = useGlobalContext();

    useEffect(()=>{
        UpdateHome()
    },[])

    return(
        <>
        <Herosection/>
        <Featureproduct />
        <Services />
        <Trusted />
        </>
    )
}