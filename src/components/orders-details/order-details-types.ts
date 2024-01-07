import { Ingredients } from "../../services/get-ingredients/get-ingredients-types";

export interface OrderDetailsType {
  onModalClose: () => void;
  orderId: string;
}