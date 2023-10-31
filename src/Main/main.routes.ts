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
          title: "Home",
        },
      },
      {
        path: "/categories",
        name: MainRoutesNames.Categories,
        component: () => import("@/Main/views/Categories.vue"),
        meta: {
          title: "Categories",
        },
      },
      {
        path: "/favorites",
        name: MainRoutesNames.Favorites,
        component: () => import("@/Main/views/Favorites.vue"),
        meta: {
          title: "Favorites",
        },
      },
      {
        path: "/settings",
        name: MainRoutesNames.Settings,
        component: () => import("@/Main/views/Settings.vue"),
        meta: {
          title: "Settings",
        },
      },
    ],
  },
];
