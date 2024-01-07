import { configureStore } from '@reduxjs/toolkit'

import ingredientsReducer from './ingredients-reducer'
import constructorReducer from './constructor-reducer'
import modalReducer from './modal-reducer'

const store = configureStore({
  reducer: {
    ingredients: ingredientsReducer,
    elementConstructor: constructorReducer,
    modalWindow: modalReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
  devTools: process.env.NODE_ENV !== 'production',
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch