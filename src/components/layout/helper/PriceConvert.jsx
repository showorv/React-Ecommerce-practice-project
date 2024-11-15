
export const Format = ({price})=>{

    return Intl.NumberFormat("BDT",{
        style: "currency",
        currency: "BDT",
        maximumFractionDigits: 2
    }).format( price/100)
}