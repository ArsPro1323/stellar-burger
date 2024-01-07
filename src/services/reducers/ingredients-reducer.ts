import { createSlice } from '@reduxjs/toolkit'
import BurgerIngredients from '../../components/burger-ingredients/burger-ingredients';
import { ActionState, BurgerComponents, BurgerData } from './types';
import { Ingredients } from './types';

const initial: BurgerData = {
  entities: { 
    bun: [], 
    main: [],  
    sauce: []
  } as BurgerComponents,
  state: ActionState.INITIAL,
}

const { actions, reducer } = createSlice({
  name: 'INGREDIENTS',
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
    setIngredients: (state, action: { payload: Ingredients[] }) => {
      const ingredients = action.payload.reduce((acc: BurgerComponents, ingredient: Ingredients) => {
        const ingredientType = ingredient.type as keyof BurgerComponents;
        acc[ingredientType].push(ingredient);
        return acc;
      }, { bun: [], main: [], sauce: [] });

      return {
        ...state,
        entities: ingredients,
        state: ActionState.SUCCESS,
      }
    },
  },
}) 

export const ingredientsActions = actions;
export default reducer