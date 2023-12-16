import i18n from "@/plugins/i18n";
import { AccountRoutesNames } from "./enums/AccountRoutesNames.enum";

export default [
  {
    path: "/account",
    component: () => import("@/Account/layout/Layout.vue"),
    children: [
      {
        path: "login",
        name: AccountRoutesNames.Login,
        component: () => import("@/Account/views/Login.vue"),
        meta: {
          title: i18n.global.t("Login"),
          isLoginRequired: false,
        },
      },
      {
        path: "register",
        name: AccountRoutesNames.Register,
        component: () => import("@/Account/views/Register.vue"),
        meta: {
          title: i18n.global.t("Register"),
          isLoginRequired: false,
        },
      },
      {
        path: "forgotten",
        name: AccountRoutesNames.ForgottenPassword,
        component: () => import("@/Account/views/ForgottenPassword.vue"),
        meta: {
          title: i18n.global.t("Forgotten password"),
          isLoginRequired: false,
        },
      },
    ],
  },
];
