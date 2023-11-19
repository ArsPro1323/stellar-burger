import { Ingredients } from "../../services/get-ingredients/get-ingredients-types";

export interface IngredientDetailsType {
  item?: Ingredients;
  onModalClose: () => void;
}