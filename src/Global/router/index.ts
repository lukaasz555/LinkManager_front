import { createRouter, createWebHistory } from "vue-router";
import accountRoutes from "@/Account/account.routes";
import mainRoutes from "@/Main/main.routes";
import { AppRoute } from "../interfaces/AppRoute";
import { MainRoutesNames } from "@/Main/enums/MainRoutesNames.enum";
import { AccountRoutesNames } from "@/Account/enums/AccountRoutesNames.enum";
import { useAccountStore } from "@/Account/account.store";
import { isTokenValid } from "../utils/api";

interface DecodedToken {
  sub: string;
  email: string;
  iat: number;
  exp: number;
}

function getTokenFromLocalStorage(): void {
  const token = localStorage.getItem("user-token");
  if (token) {
    const decodedToken: DecodedToken = JSON.parse(atob(token?.split(".")[1]));
    if (decodedToken.exp * 1000 < Date.now()) {
      useAccountStore().setBaseUserData(decodedToken.sub, decodedToken.email);
      useAccountStore().token = token;
      useAccountStore().isLoggedIn = true;
    }
  } else console.log("no token");
}

const routes = [...accountRoutes, ...mainRoutes];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

function isUserAuthenthicated(): void {
  const token = localStorage.getItem("user-token");
}

router.beforeEach((to, from, next) => {
  const route = to as unknown as AppRoute;
  if (route.meta?.title) {
    document.title =
      route.meta.title.substring(0, 1).toUpperCase() +
      route.meta.title.substring(1);
  }
  if (route.meta?.isLoginRequired) {
    const accountStore = useAccountStore();
    getTokenFromLocalStorage();
    if (!accountStore.isLoggedIn) {
      router.push({ name: AccountRoutesNames.Login });
    }
  }
  next();
});

export default router;
