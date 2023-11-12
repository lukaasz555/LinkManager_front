import { useAccountStore } from "@/Account/account.store";
import axios from "axios";

export const API = axios.create({
  baseURL: "https://localhost:4000",
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("user-token");
  const userId = useAccountStore().baseUserData?.id;

  if (token) config.headers.Authorization = `Bearer ${token}`;
  if (userId) config.headers[userId] = userId;

  return config;
});
