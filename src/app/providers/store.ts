import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { JsonplaceholderAPI } from '../../shared'

export const store = configureStore({
   reducer: {
      [JsonplaceholderAPI.reducerPath]: JsonplaceholderAPI.reducer
   },
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(JsonplaceholderAPI.middleware),
})

setupListeners(store.dispatch)