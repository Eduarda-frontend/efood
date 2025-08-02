import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type AddressResponse = {
    cep: string;
    logradouro: string;
    localidade: string;
    erro?: boolean;
  };

const apiViacep = createApi({
    reducerPath:'apiViacep',
    baseQuery:fetchBaseQuery({
        baseUrl:'https://viacep.com.br/ws/'
    }),
    endpoints:(builder) => ({
        getCep: builder.query<AddressResponse, string>({
            query:(cep) => `${cep}/json/`
        })
    })
})

export const { useLazyGetCepQuery } = apiViacep
export default apiViacep