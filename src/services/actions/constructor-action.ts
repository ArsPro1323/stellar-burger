import { Ingredients, PostOrderRequest, PostOrderResponse } from "../reducers/types";
import { constructorActions } from "../reducers/constructor-reducer";
import { AppDispatch } from "../reducers/store";
import { postIngredients } from "../get-ingredients/get-ingredients";
import { orderActions } from "../reducers/order-reducer";
import { BASE_URL } from "../reducers/types";

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

export const sendIngredients = (request: PostOrderRequest) => async (dispatch: AppDispatch) => {  
  dispatch(orderActions.setLoading());
  try {
    const res = await postIngredients(request);
    if (res.success) {
      dispatch(orderActions.setOrder(res.order.number.toString()));
    } else {
      dispatch(orderActions.setError());
    }
  } catch (err) {
    dispatch(orderActions.setError());
  }
}

export const clearConstructor = () => (dispatch: AppDispatch) => {
  dispatch(constructorActions.clearConstructor());
}
