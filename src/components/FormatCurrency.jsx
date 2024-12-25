const Currency_Formatter = new Intl.NumberFormat(undefined,{
    currency:"USD",
    style:"currency"
})

export default function FormatCurrency(num){
    return Currency_Formatter.format(num);
}