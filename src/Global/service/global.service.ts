import axios, { AxiosError, AxiosResponse } from "axios";
import { API } from "../utils/api";

export async function postData<T, K>(
  route: string,
  body: T
): Promise<AxiosResponse<K>> {
  try {
    const apiRes = await API.post(route, body);
    return apiRes.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      const axiosErr: AxiosError<K> = err;
      if (axiosErr.response && axiosErr.response.data) {
        throw axiosErr.response.data;
      }
    }
    throw err;
  }
}

export async function getData<T>(route: string): Promise<T> {
  const apiRes = await API.get(route);
  return apiRes.data;
}
