// Composables
import { createRouter, createWebHistory } from "vue-router";
import accountRoutes from "@/Account/account.routes";

const routes = [...accountRoutes];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
