import { createSlice } from '@reduxjs/toolkit'
import { Ingredients } from './types';

const sampleIngredient: Ingredients = {"_id": "", "name": "", "type": "", "proteins": 0, "fat": 0, "carbohydrates": 0, "calories": 0, "price": 0, "image": "", "image_mobile": "", "image_large": "",};

const initial = { isOpened: false, modalData : sampleIngredient }

const { actions, reducer } = createSlice({
  name: 'MODAL_WINDOW',
  initialState: initial,
  reducers: {
    setModal(state, action) {
      return {
        modalData: action.payload,
        isOpened: true
      }
    },
    closeModal(state) {
      return {
        ...state,
        isOpened: false
      }
    },
  },
}) 

export const modalActions = actions;
export default reducer