import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/Counter/Slice'

export const Store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})
export default Store