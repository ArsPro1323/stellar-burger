import { BooleanLiteral, StringLiteral } from "typescript";

export interface Ingredients {
  _id: string;
  calories: number;
  carbohydrates: number;
  fat: number;
  image: string;
  image_large: string;
  image_mobile: string;
  name: string;
  price: number;
  proteins: number;
  type: string;
}

export interface IngredientsResp {
  success: boolean;
  data: Ingredients[];
}

export interface PostOrderRequest {
  ingredients: string[];
}

export interface PostOrderResponse {
  name: string;
  success: boolean;
  order: {
    number: number;
  };
}

export interface BurgerComponents {
  bun: Ingredients[];
  main: Ingredients[];
  sauce: Ingredients[];
}

export interface Burger {
  elements: Ingredients[];
  bun: Ingredients | null;
}