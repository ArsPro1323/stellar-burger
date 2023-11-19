import { Ingredients } from "../../../../services/get-ingredients/get-ingredients-types";

export interface cardData {
  image: string;
  name: string;
  price: string;
  onClick?: () => void;
}
