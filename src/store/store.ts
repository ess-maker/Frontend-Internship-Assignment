import { configureStore } from '@reduxjs/toolkit'
import charteredsslice from './charteredsslice'
import shearchvalue from './shearchvalue'
// ...

export const store = configureStore({
  reducer: {
    chartereddata:charteredsslice,
    searchvalue:shearchvalue,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch