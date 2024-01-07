import { createSlice } from '@reduxjs/toolkit'
import BurgerIngredients from '../../components/burger-ingredients/burger-ingredients';
import { BurgerComponents } from './types';
import { Ingredients } from './types';

const initial: BurgerComponents = {bun: [], main: [], sauce: []}

const { actions, reducer } = createSlice({
  name: 'INGREDIENTS',
  initialState: initial,
  reducers: {
    setIngredients: (state, action) => {
      return action.payload.reduce((acc: BurgerComponents, ingredient: Ingredients) => {
        const ingredientType = ingredient.type as keyof BurgerComponents;
        acc[ingredientType].push(ingredient);
        return acc;
      }, { bun: [], main: [], sauce: [] });
    },
  },
}) 

export const ingredientsActions = actions;
export default reducer