export const getTotalValue = (items: { preco:number, amount: number }[]) => {
return items.reduce((accumulator, item) => {
    return (accumulator += item.preco * item.amount)
}, 0)
}

export const formatPrice = (preco = 0) => {
    return new Intl.NumberFormat('pt-BR', { style:'currency',currency:'BRL'}).format(preco)
}