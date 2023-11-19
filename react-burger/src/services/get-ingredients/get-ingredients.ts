import { IngredientsResp } from "./get-ingredients-types";

const getIngredients = async(url: string): Promise<IngredientsResp> => {
  const resp = await fetch(url);
  return resp.json();
}

export default getIngredients;