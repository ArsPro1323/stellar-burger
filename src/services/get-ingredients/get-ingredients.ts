import { BASE_URL, PostOrderRequest } from "../reducers/types";
import { IngredientsResp } from "./get-ingredients-types";
import { PostOrderResponse } from "../reducers/types";

export const getIngredients = async(): Promise<IngredientsResp> => {
  const resp = await fetch(`${BASE_URL}/ingredients`);
  if (resp.ok) {
    return resp.json();
  }
  return Promise.reject(`Ошибка ${resp.status}`);
}

export const postIngredients = async (request: PostOrderRequest): Promise<PostOrderResponse> => {
  const resp = await fetch(`${BASE_URL}/orders`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(request),
  })

  if (resp.ok) {
    return resp.json();
  }

  return Promise.reject(`Ошибка ${resp.status}`);
}