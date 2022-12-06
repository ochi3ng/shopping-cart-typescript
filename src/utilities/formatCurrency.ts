const currency_formatter =new Intl.NumberFormat(undefined, {currency:"ksh", style:"currency"})

export function formatCurrency(number:number){
return currency_formatter.format(number)
}