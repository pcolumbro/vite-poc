import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slice/user-slice'
import { pokemonApi } from './api/api'
// ...

export const store = configureStore({
  reducer: {
    user: userReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch