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
        component: () => import("@/Main/modules/Links/LinksView.vue"),
        meta: {
          title: i18n.global.t("Home"),
          isLoginRequired: true,
        },
      },
      {
        path: "/categories",
        name: MainRoutesNames.Categories,
        component: () => import("@/Main/modules/Category/Categories.vue"),
        meta: {
          title: i18n.global.t("Categories"),
          isLoginRequired: true,
        },
      },
      {
        path: "/favorites",
        name: MainRoutesNames.Favorites,
        component: () => import("@/Main/views/Favorites.vue"),
        meta: {
          title: i18n.global.t("Favorites"),
          isLoginRequired: true,
        },
      },
      {
        path: "/settings",
        name: MainRoutesNames.Settings,
        component: () => import("@/Main/views/Settings.vue"),
        meta: {
          title: i18n.global.t("Settings"),
          isLoginRequired: true,
        },
      },
    ],
  },
];
