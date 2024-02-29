import { i18n } from "@/plugins/i18n";

export const emailRules = [
  (v: string) => !!v || i18n.global.t("E-mail is required"),
  (v: string) => /.+@.+\..+/.test(v) || i18n.global.t("Invalid e-mail"),
];

export const passwordRegisterRules = [
  (v: string) => !!v || i18n.global.t("Password is required"),
  (v: string) => v.length >= 7 || i18n.global.t("at least 7 characters"),
];

export const passwordLoginRules = [
  (v: string) => !!v || i18n.global.t("Password is required"),
];
