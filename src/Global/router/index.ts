// Composables
import { createRouter, createWebHistory } from "vue-router";
import accountRoutes from "@/Account/account.routes";
import mainRoutes from "@/Main/main.routes";
import { AppRoute } from "../interfaces/AppRoute";

const routes = [...accountRoutes, ...mainRoutes];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const route = to as unknown as AppRoute;
  if (route.meta?.title) {
    document.title = route.meta.title;
  }
  next();
});

export default router;
