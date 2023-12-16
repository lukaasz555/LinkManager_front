import { createRouter, createWebHistory } from "vue-router";
import accountRoutes from "@/Account/account.routes";
import mainRoutes from "@/Main/main.routes";
import { AppRoute } from "../interfaces/AppRoute";
import { AccountRoutesNames } from "@/Account/enums/AccountRoutesNames.enum";
import { useAccountStore } from "@/Account/account.store";
import { getTokenFromLS } from "@/Account/helpers/getTokenFromLS";

const routes = [...accountRoutes, ...mainRoutes];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const route = to as unknown as AppRoute;
  if (route.meta?.isLoginRequired) {
    getTokenFromLS();
    const accountStore = useAccountStore();
    if (!accountStore.isLoggedIn) {
      router.push({ name: AccountRoutesNames.Login });
    }
  }
  next();
});

router.beforeEach((to, from, next) => {
  const route = to as unknown as AppRoute;
  if (route.meta?.title) {
    document.title =
      route.meta.title.substring(0, 1).toUpperCase() +
      route.meta.title.substring(1);
  }
  next();
});

export default router;
