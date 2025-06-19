import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { RestauranteItem } from "../components/Listas/ListaRestaurantes";

const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://fake-api-tau.vercel.app/api/efood/restaurantes'
    }),
    endpoints: (builder) => ({
        getCardapio: builder.query<RestauranteItem, string>({
            query:(id) => `/${id}`,
        }),
        getPratos: builder.query<RestauranteItem[], void>({
            query: () => ''
        })

    })
})

export const { useGetCardapioQuery, useGetPratosQuery } = api
export default api