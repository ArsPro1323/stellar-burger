import { Ingredients } from "../../services/get-ingredients/get-ingredients-types";

export interface IngredientsType {
  buns: Array<Ingredients>;
  mains: Array<Ingredients>;
  sauces: Array<Ingredients>;
}