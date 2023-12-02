import { defineStore } from "pinia";
import { AccountDto } from "./account.service";
import { registerMutation, loginMutation } from "./account.mutations";
import i18n from "@/plugins/i18n";

type BaseUserData = {
  id: number;
  email: string;
};
interface AccountStore {
  isLoggedIn: boolean;
  token?: string;
  baseUserData?: BaseUserData;
}

const initState = (): AccountStore => ({
  isLoggedIn: false,
  token: undefined,
  baseUserData: undefined,
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

    setTokenAndLoggedIn(token: string): void {
      this.token = token;
      this.isLoggedIn = true;
      localStorage.setItem("user-token", token);
    },

    logout(): void {
      // ...
    },
    recoverPassword(): void {
      // ...
    },
  },
});
