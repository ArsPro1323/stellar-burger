export interface Ingredients {
  _id: string;
  calories: number;
  carbohydrates: number;
  fat: number;
  image: string;
  image_large: string;
  image_mobile: string;
  name: string;
  price: string;
  proteins: number;
  type: string;
}

export interface IngredientsResp {
  success: boolean;
  data: Ingredients[];
}