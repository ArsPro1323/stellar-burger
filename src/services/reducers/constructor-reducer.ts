import { createSlice } from "@reduxjs/toolkit";
import { ActionState, Burger } from './types';

const initial = { elements: [], bun: null, state: ActionState.INITIAL } as Burger;

const { actions, reducer } = createSlice({
  name: 'ELEMENT_CONSTRUCTOR',
  initialState: initial,
  reducers: {
    addIngredients(state, action) {
      return {
        ...state,
        elements: state.elements.concat(action.payload)
      }
    },
    removeIngredients(state, action) {
      const newElements = state.elements.slice(0, action.payload).concat(state.elements.slice(action.payload + 1));
      return {
        ...state,
        elements: newElements,
      }
    },
    changeBun(state, action) {
      return {
        ...state,
        bun: action.payload,
      }
    },
    swapElements(state, action) {
      let index1 = action.payload.firstId;
      let index2 = action.payload.secondId;
      const newElements = state.elements.slice();
      if (index1 > index2) {
        let tmp = index1;
        index1 = index2;
        index2 = tmp;
      }
      let tmp = newElements[index2];
      for (let i = index2; i > index1; i--) {
        newElements[i] = newElements[i - 1];
      }
      newElements[index1] = tmp;
      return {
        ...state,
        elements: newElements,
      }
    },
    clearConstructor(state) {
      return initial;
    },
  },
})

export const constructorActions = actions;
export default reducer