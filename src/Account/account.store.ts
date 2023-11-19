import { defineStore } from "pinia";
import { AccountDto, createUserFn } from "./account.service";
import { useAppStore } from "@/Global/store/app";
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
    login(): void {
      // ...
    },
    async registerMutation(accountDto: AccountDto) {
      const appStore = useAppStore();
      appStore.setLoading();

      try {
        const res = await createUserFn(accountDto);
        // console.log("res success: ", res);
        appStore.setSuccess(
          true,
          i18n.global.t("Success! New account created.")
        );
        appStore.setError(false);
      } catch (err: any) {
        appStore.setError(true, err.errorMessage);
      } finally {
        appStore.setLoading();
      }
    },

    async register(accountDto: AccountDto) {
      await this.registerMutation(accountDto);
    },

    logout(): void {
      // ...
    },
    recoverPassword(): void {
      // ...
    },
  },
});
