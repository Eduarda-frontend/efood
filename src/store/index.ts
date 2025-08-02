import { configureStore } from '@reduxjs/toolkit'
import  apiRestaurant  from '../services/api'

import cartReducer from './reducer/cart'

export const store = configureStore({
    reducer:{
        cart: cartReducer,
        [apiRestaurant.reducerPath]: apiRestaurant.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiRestaurant.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>