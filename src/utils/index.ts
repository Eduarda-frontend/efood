import type { MenuItem } from "../components/List/ListMenu"

export const getTotalValue = (items: MenuItem[]) => {
return items.reduce((accumulator, currentValue) => {
    return (accumulator += currentValue.preco)
}, 0)
}

export const formatPrice = (preco = 0) => {
    return new Intl.NumberFormat('pt-BR', { style:'currency',currency:'BRL'}).format(preco)
}