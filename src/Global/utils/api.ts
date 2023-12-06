import { useAccountStore } from "@/Account/account.store";
import axios from "axios";
import { postData } from "../service/global.service";
import { getAccessToken } from "../helpers/getAccessToken";

export const API = axios.create({
  baseURL: "http://localhost:4000",
});

export function isTokenValid(token: string): boolean {
  const decodedToken = JSON.parse(atob(token.split(".")[1]));
  return decodedToken.exp * 1000 < Date.now();
}

API.interceptors.request.use(async (config) => {
  const token = localStorage.getItem("user-token");
  const userId = useAccountStore().baseUserData?.id;

  if (token) {
    const isValid = isTokenValid(token);
    if (isValid) {
      config.headers["Authorization"] = `Bearer ${token}`;
      console.log("token is valid");
    } else {
      console.log("invalid token: (");
      const data = useAccountStore().baseUserData;
      let newToken;
      if (data) {
        const refreshToken = localStorage.getItem("user-refresh-token") || "";
        newToken = await getAccessToken({
          email: data.email,
          refreshToken,
        });
        console.log("newToken has been generated ->", newToken);
      }
      config.headers["Authorization"] = `Bearer ${newToken}`;
    }
  }
  if (userId) config.headers["userId"] = userId;

  return config;
});
