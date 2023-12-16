import axios from "axios";
import { useAccountStore } from "@/Account/account.store";

export const API = axios.create({
  baseURL: "http://localhost:4000",
});

API.interceptors.request.use(async (config) => {
  let token = localStorage.getItem("user-token") || "";
  const userId = useAccountStore().baseUserData?.id;

  if (!token) {
    const storeToken = useAccountStore().token;
    if (storeToken) token = storeToken;
  }

  if (token) config.headers["Authorization"] = `Bearer ${token}`;
  if (userId) config.headers["userId"] = userId;

  return config;
});
