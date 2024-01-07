import { createSlice } from '@reduxjs/toolkit'
import { ActionState } from './types'

const initial = { orderId : '', state: ActionState.INITIAL }

const { actions, reducer } = createSlice({
  name: 'ORDER',
  initialState: initial,
  reducers: {
    setLoading: (state) => {
      return {
        ...state,
        state: ActionState.LOADING,
      }
    },
    setError: (state) => {
      return {
        ...state,
        state: ActionState.ERROR,
      }
    },
    setOrder: (state, action: { payload: string }) => {
      return {
        orderId: action.payload,
        state: ActionState.SUCCESS,
      }
    }
  },
}) 

export const orderActions = actions;
export default reducer