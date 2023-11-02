import { API } from "../utils/api";

export async function postData<T, K>(route: string, params?: T): Promise<K> {
  return await API.post(route, params);
}

export async function getData<T>(route: string): Promise<T> {
  const apiRes = await API.get(route);
  return apiRes.data;
}
