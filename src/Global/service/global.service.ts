import { API } from "../utils/api";

export async function postData<T>(route: string): Promise<T> {
  return await API.post(route);
}

export async function getData<T>(route: string): Promise<T> {
  const apiRes = await API.get(route);
  return apiRes.data;
}
