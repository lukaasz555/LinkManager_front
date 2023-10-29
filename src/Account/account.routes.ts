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
      },
      {
        path: "register",
        name: AccountRoutesNames.Register,
        component: () => import("@/Account/views/Register.vue"),
      },
      {
        path: "forgotten",
        name: AccountRoutesNames.ForgottenPassword,
        component: () => import("@/Account/views/ForgottenPassword.vue"),
      },
    ],
  },
];
