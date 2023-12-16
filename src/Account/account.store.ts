import { defineStore } from "pinia";
import { AccountDto } from "./account.service";
import { registerMutation, loginMutation } from "./account.mutations";
import i18n from "@/plugins/i18n";
import router from "@/Global/router";
import { AccountRoutesNames } from "./enums/AccountRoutesNames.enum";

class BaseUserData {
  id = "";
  email = "";

  setData(id: string, email: string): this {
    this.email = email;
    this.id = id;
    return this;
  }
}
interface AccountStore {
  isLoggedIn: boolean;
  token?: string;
  baseUserData: BaseUserData | null;
}

const initState = (): AccountStore => ({
  isLoggedIn: false,
  token: undefined,
  baseUserData: null,
});

export const useAccountStore = defineStore("accountStore", {
  state: initState,
  actions: {
    async login(accountDto: AccountDto): Promise<void> {
      await loginMutation(accountDto, i18n.global.t("Login success"));
    },
    async register(accountDto: AccountDto) {
      await registerMutation(
        accountDto,
        i18n.global.t("Your have created an account. Now you can sign in.")
      );
    },

    setTokenAndLoggedIn(accessToken: string): void {
      this.token = accessToken;
      this.isLoggedIn = true;
      localStorage.setItem("user-token", accessToken);
    },

    setBaseUserData(id: string, email: string): void {
      this.baseUserData = new BaseUserData();
      this.baseUserData.setData(id, email);
    },

    logout(): void {
      this.$reset();
      localStorage.removeItem("user-token");
      localStorage.removeItem("user-refresh-token");
      router.push({ name: AccountRoutesNames.Login });
    },
    recoverPassword(): void {
      // ...
    },
  },
});
