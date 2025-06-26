import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { MenuItem } from "../../components/List/ListMenu"

type CartState = {
    items: MenuItem[]
    isOpen: boolean
}

const initialState: CartState = {
    items: [],
    isOpen: false

}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        add: (state, action: PayloadAction<MenuItem>) => {
            const plate = state.items.find((item) => item.id === action.payload.id)

            if(!plate) {
                state.items.push(action.payload)
            } else {
                alert('Este prato já foi adicionado ao carrinho!')
            }
        },
        remove: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter((item) => item.id !== action.payload)
        },
        open: (state) => {
            state.isOpen = true
        },
        close: (state) => {
            state.isOpen = false
        },
        clear: (state) => {
            state.items = []
        }
    }

})

export const { add, remove, open, close, clear } = cartSlice.actions
export default cartSlice.reducer