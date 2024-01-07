import { Ingredients, PostOrderRequest, PostOrderResponse } from "../reducers/types";
import { constructorActions } from "../reducers/constructor-reducer";
import { AppDispatch } from "../reducers/store";
import { postIngredients } from "../get-ingredients/get-ingredients";

export const addIngredient = (ingredient: Ingredients) => (dispatch: AppDispatch) => {
  dispatch(constructorActions.addIngredients(ingredient));
}

export const changeBun = (ingredient: Ingredients) => (dispatch: AppDispatch) => {
  dispatch(constructorActions.changeBun(ingredient));
}

export const removeIngredients = (index: number) => (dispatch: AppDispatch) => {
  dispatch(constructorActions.removeIngredients(index));
}

export const swapElements = (index1: number, index2: number) => (dispatch: AppDispatch) => {
  dispatch(constructorActions.swapElements({firstId: index1, secondId: index2}));
}

export const sendIngredients = async (request: PostOrderRequest): Promise<PostOrderResponse> => {
  const url = 'https://norma.nomoreparties.space/api/orders';
  
  const res = await postIngredients(url, request);
  return res;
}

export const clearConstructor = () => (dispatch: AppDispatch) => {
  dispatch(constructorActions.clearConstructor());
}
