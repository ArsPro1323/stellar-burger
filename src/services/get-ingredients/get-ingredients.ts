import { PostOrderRequest } from "../reducers/types";
import { IngredientsResp } from "./get-ingredients-types";
import { PostOrderResponse } from "../reducers/types";

export const getIngredients = async(url: string): Promise<IngredientsResp> => {
  const resp = await fetch(url);
  if (resp.ok) {
    return resp.json();
  }
  return Promise.reject(`Ошибка ${resp.status}`);
}

export const postIngredients = async (url: string, request: PostOrderRequest): Promise<PostOrderResponse> => {
  const resp = await fetch(url, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(request),
  })

  if (resp.ok) {
    return resp.json();
  }

  return Promise.reject(`Ошибка ${resp.status}`);
}