import { configureStore } from '@reduxjs/toolkit'
import api from '../services/api'
import carrinhoReducer from './reducer/carrinho'

export const store = configureStore({
    reducer:{
        carrinho: carrinhoReducer,
        [api.reducerPath]: api.reducer
        
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>