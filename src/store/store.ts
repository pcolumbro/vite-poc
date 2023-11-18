import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slice/user-slice'
import { pocApi } from './api/api'
// ...

export const store = configureStore({
  reducer: {
    user: userReducer,
    [pocApi.reducerPath]: pocApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pocApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch