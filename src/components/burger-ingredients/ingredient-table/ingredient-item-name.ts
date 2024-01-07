import { Ingredients } from "../../../services/get-ingredients/get-ingredients-types";

export interface IngredientsItemType {
  name: string;
  items: Array<Ingredients>;
  innerRef: React.RefObject<HTMLDivElement>;
}