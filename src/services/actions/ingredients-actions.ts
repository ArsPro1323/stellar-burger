import { createAsyncThunk } from "@reduxjs/toolkit";
import { getIngredients } from "../get-ingredients/get-ingredients";
import { ingredientsActions } from "../reducers/ingredients-reducer";
import { AppDispatch } from "../reducers/store";

export const initialiseIngredients = () => async (dispatch: AppDispatch) => {
  dispatch(ingredientsActions.setLoading());
  
  try {
    const ingredients = await getIngredients();
    if (ingredients.success) {
      dispatch(ingredientsActions.setIngredients(ingredients.data));
    } else {
      dispatch(ingredientsActions.setError());
    }
  } catch (error) {
    dispatch(ingredientsActions.setError());
  }
}
