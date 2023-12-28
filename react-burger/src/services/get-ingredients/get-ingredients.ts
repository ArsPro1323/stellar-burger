import { IngredientsResp } from "./get-ingredients-types";

const getIngredients = async(url: string): Promise<IngredientsResp> => {
  const resp = await fetch(url);
  if (resp.ok) {
      return resp.json();
  }
  return Promise.reject(`Ошибка ${resp.status}`);
}

export default getIngredients;