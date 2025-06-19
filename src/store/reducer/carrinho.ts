import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { CardapioItem } from "../../components/Listas/ListaCardapio"

type CarrinhoState = {
    itens: CardapioItem[]
    isOpen: boolean
}

const initialState: CarrinhoState = {
    itens: [],
    isOpen: false

}

const carrinhoSlice = createSlice({
    name: 'carrinho',
    initialState,
    reducers:{
        adicionar: (state, action: PayloadAction<CardapioItem>) => {
            const prato = state.itens.find((item) => item.id === action.payload.id)

            if(!prato) {
                state.itens.push(action.payload)
                alert('Prato adicionado ao carrinho!')
            } else {
                alert('Este prato já foi adicionado ao carrinho!')
            }
        },
        remover: (state, action: PayloadAction<number>) => {
            state.itens = state.itens.filter((item) => item.id !== action.payload)
        },
        abrir: (state) => {
            state.isOpen = true
        },
        fechar: (state) => {
            state.isOpen = false
        }
    }

})

export const { adicionar, remover, abrir, fechar } = carrinhoSlice.actions
export default carrinhoSlice.reducer