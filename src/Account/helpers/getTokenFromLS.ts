import { useAccountStore } from "../account.store";

interface DecodedToken {
  sub: string;
  email: string;
  iat: number;
  exp: number;
}

export function getTokenFromLS(): void {
  const token = localStorage.getItem("user-token");
  const accountStore = useAccountStore();

  if (token) {
    const decodedToken: DecodedToken = JSON.parse(atob(token?.split(".")[1]));
    accountStore.setBaseUserData(decodedToken.sub, decodedToken.email);
    accountStore.token = token;
    accountStore.isLoggedIn = true;
  }
}
