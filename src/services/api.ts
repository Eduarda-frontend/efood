import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { RestaurantItem } from "../components/List/ListRestaurant";

type Product = {
    id: number
    price: number
}

type PurchasePayload = {
    products: Product[]
    delivery: {
        receiver: string,
        address: {
            descpription: string
            cidy: string
            zipCode: string
            number: number
            complement: string
        }
    },
    payment: {
        card: {
            name: string
            number: string
            code: number
            expires: {
                month: number
                year:number
            }
        }
    }
}

type PurchaseResponse = {
    orderId: string
}

const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://fake-api-tau.vercel.app/api/efood/'
    }),
    endpoints: (builder) => ({
        getMenu: builder.query<RestaurantItem, string>({
            query:(id) => `restaurantes/${id}`,
        }),
        getPlate: builder.query<RestaurantItem[], void>({
            query: () => 'restaurantes'
        }),
        purchase: builder.mutation<PurchaseResponse, PurchasePayload>({
            query:(body) => ({
                url:'checkout',
                method: 'POST',
                body
            })
        })

    })
})

export const { useGetMenuQuery, useGetPlateQuery, usePurchaseMutation } = api
export default api