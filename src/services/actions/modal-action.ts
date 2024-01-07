import { Ingredients } from "../reducers/types";
import { modalActions } from "../reducers/modal-reducer";
import { AppDispatch } from "../reducers/store";

export const openModal = (ingredient: Ingredients) => (dispatch: AppDispatch) => {
  dispatch(modalActions.setModal(ingredient));
}

export const closeModal = () => (dispatch: AppDispatch) => {
  dispatch(modalActions.closeModal());
}