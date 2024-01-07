import { getIngredients } from "../get-ingredients/get-ingredients";
import { ingredientsActions } from "../reducers/ingredients-reducer";
import { AppDispatch } from "../reducers/store";

export const initialiseIngredients = () => {
  const url = "https://norma.nomoreparties.space/api/ingredients"; 

  return async (dispatch: AppDispatch) => {
    const ingredients = await getIngredients(url);
    if (ingredients.success) {
      dispatch(ingredientsActions.setIngredients(ingredients.data));
    }
  }
}