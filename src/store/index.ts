import { configureStore } from '@reduxjs/toolkit'

import  apiRestaurant  from '../services/apiRestaurant'
import apiViacep from '../services/apiViaCep'

import cartReducer from './reducer/cart'

export const store = configureStore({
    reducer:{
        cart: cartReducer,
        [apiRestaurant.reducerPath]: apiRestaurant.reducer,
        [apiViacep.reducerPath]: apiViacep.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiRestaurant.middleware, apiViacep.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;