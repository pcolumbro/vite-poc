// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Pokemon } from '../../types/pokemon'

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'localhost:3456/' }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query<Pokemon, string>({
      query: (name) => `pokemon/${name}`,
    }),
    getAuthToken: builder.query<{ token: string }, void>({
      query: () => ({
        url: 'authToken',
        method: 'GET',
      }),
    }),
    getBaseUrl: builder.query<{url: string}, void>({
      query: () => ({
        url: 'baseUrl',
        method: 'GET',
      }),
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonByNameQuery } = pokemonApi