import i18n from "@/plugins/i18n";
import { MainRoutesNames } from "./enums/MainRoutesNames.enum";

export default [
  {
    path: "/",
    component: () => import("@/Main/layout/Layout.vue"),
    children: [
      {
        path: "/",
        name: MainRoutesNames.Links,
        component: () => import("@/Main/views/Links.vue"),
        meta: {
          title: i18n.global.t("Home"),
        },
      },
      {
        path: "/categories",
        name: MainRoutesNames.Categories,
        component: () => import("@/Main/views/Categories.vue"),
        meta: {
          title: i18n.global.t("Categories"),
        },
      },
      {
        path: "/favorites",
        name: MainRoutesNames.Favorites,
        component: () => import("@/Main/views/Favorites.vue"),
        meta: {
          title: i18n.global.t("Favorites"),
        },
      },
      {
        path: "/settings",
        name: MainRoutesNames.Settings,
        component: () => import("@/Main/views/Settings.vue"),
        meta: {
          title: i18n.global.t("Settings"),
        },
      },
    ],
  },
];
