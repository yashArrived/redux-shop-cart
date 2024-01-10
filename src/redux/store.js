import { configureStore } from '@reduxjs/toolkit'
import CounterSlice from './Slices/CounterSlice'
import cartSlice from './Slices/cartSlice'

export const store = configureStore({
  reducer: {
    counter: CounterSlice,
    cart : cartSlice
  },
})