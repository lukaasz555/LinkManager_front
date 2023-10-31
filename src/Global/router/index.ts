// Composables
import { createRouter, createWebHistory } from "vue-router";
import accountRoutes from "@/Account/account.routes";
import mainRoutes from "@/Main/main.routes";

const routes = [...accountRoutes, ...mainRoutes];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
