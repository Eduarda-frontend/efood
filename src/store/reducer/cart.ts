import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { MenuItem } from "../../components/List/ListMenu"

type CartItem = MenuItem &{
    amount: number
}

type CartState = {
    items: CartItem[]
    isOpen: boolean
    amount:number
}

const initialState: CartState = {
    items: [],
    isOpen: false,
    amount: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        add: (state, action: PayloadAction<MenuItem>) => {
            const plate = state.items.find((item) => item.id === action.payload.id)

            if(plate) {
                plate.amount++
            } else {
                state.items.push({ ...action.payload, amount: 1})
            }
            state.amount++
        },
        remove: (state, action: PayloadAction<number>) => {
            const indexItem = state.items.findIndex((item) => item.id === action.payload)
            
            if (indexItem !== -1) {
                const item = state.items[indexItem]

                if (item.amount > 1) {
                    item.amount--
                } else {
                    state.items.splice(indexItem, 1)
                }

                if (state.amount > 0){
                    state.amount--
                }
            }
        },
        open: (state) => {
            state.isOpen = true
        },
        close: (state) => {
            state.isOpen = false
        },
        clear: (state) => {
            state.items = []
            state.amount = 0
        }
    }

})

export const { add, remove, open, close, clear } = cartSlice.actions
export default cartSlice.reducer